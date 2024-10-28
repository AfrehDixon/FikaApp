import { Cart, CartItem } from '../types';
import { apiClient } from './config';
import { ApiResponse } from './types';

export const cartService = {
  addToCart: async (productId: string, quantity: number, selectedOptions?: any[]) => {
    const response = await apiClient.post<ApiResponse<Cart>>('/cart/add', {
      productId,
      quantity,
      selectedOptions,
    });
    return response.data;
  },

  getCart: async () => {
    const response = await apiClient.get<ApiResponse<Cart>>('/cart');
    return response.data;
  },

  updateCartItem: async (itemId: string, quantity: number) => {
    const response = await apiClient.put<ApiResponse<Cart>>(`/cart/${itemId}`, {
      quantity,
    });
    return response.data;
  },
};