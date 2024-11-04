import { apiClient } from './config';
import { ApiResponse } from './types';

export const loyaltyService = {
    getPoints: async () => {
      const response = await apiClient.get<ApiResponse<{ points: number; history: any[] }>>('/loyalty/points');
      return response.data;
    },
  
    redeemPoints: async (points: number, rewardId: string) => {
      const response = await apiClient.post<ApiResponse<{ remainingPoints: number; qrCode: string }>>('/loyalty/redeem', {
        points,
        rewardId,
      });
      return response.data;
    },
  };