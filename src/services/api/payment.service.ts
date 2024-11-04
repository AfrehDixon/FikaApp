import { apiClient } from './config';
import { ApiResponse } from './types';

export const paymentService = {
    initiatePayment: async (orderId: string, paymentMethod: string) => {
        const response = await apiClient.post<ApiResponse<{ paymentId: string; paymentUrl: string }>>('/payment/initiate', {
            orderId,
            paymentMethod,
        });
        return response.data;
    },

    confirmPayment: async (paymentId: string, orderId: string) => {
        const response = await apiClient.post<ApiResponse<{ success: boolean; order: Order }>>('/payment/confirm', {
            paymentId,
            orderId,
        });
        return response.data;
    },
};