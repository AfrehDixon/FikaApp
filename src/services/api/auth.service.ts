import { apiClient } from './config';
import { User } from '../types';
import { ApiResponse } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
}

export const authService = {
  login: async (data: LoginRequest) => {
    const response = await apiClient.post<ApiResponse<{ token: string; user: User }>>('/auth/login', data);
    await AsyncStorage.setItem('accessToken', response.data.data.token);
    return response.data;
  },

  signup: async (data: SignupRequest) => {
    const response = await apiClient.post<ApiResponse<{ userId: string }>>('/auth/signup', data);
    return response.data;
  },

  verifyOtp: async (phoneNumber: string, otp: string) => {
    const response = await apiClient.post<ApiResponse<{ verified: boolean }>>('/auth/verify-otp', {
      phoneNumber,
      otp,
    });
    return response.data;
  },

  logout: async () => {
    await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
  },
};