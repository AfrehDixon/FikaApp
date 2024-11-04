import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://fiakapi-1.onrender.com/';

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = await AsyncStorage.getItem('refreshToken');

            try {
                const res = await apiClient.post('/auth/refresh-token', { refreshToken });
                await AsyncStorage.setItem('accessToken', res.data.token);
                apiClient.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
                return apiClient(originalRequest);
            } catch (refreshError) {
                // Handle refresh token failure (logout user)
                await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
                // Navigate to login screen
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);