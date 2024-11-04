import { apiClient } from './config';
import { ApiResponse } from './types';
import { User } from '../types';

export const userService = {
    getProfile: async () => {
      const response = await apiClient.get<ApiResponse<User>>('/user/profile');
      return response.data;
    },
  
    updateProfile: async (data: Partial<User>) => {
      const response = await apiClient.put<ApiResponse<User>>('/user/profile', data);
      return response.data;
    },
  };