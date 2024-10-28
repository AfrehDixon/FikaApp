import { Order } from '../types';
import { apiClient } from './config';
import { ApiResponse } from './types';

export const orderService = {
  createOrder: async (data: {
    userId: string;
    items: CartItem[];
    deliveryAddress?: {
      address: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
    };
  }) => {
    const response = await apiClient.post<ApiResponse<{ order: Order; paymentUrl: string }>>('/orders', data);
    return response.data;
  },

  getOrders: async () => {
    const response = await apiClient.get<ApiResponse<Order[]>>('/orders');
    return response.data;
  },
};