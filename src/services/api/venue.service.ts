import { Venue, Product } from '../types';
import { apiClient } from './config';
import { ApiResponse } from './types';

export const venueService = {
  getVenues: async (latitude?: number, longitude?: number, radius?: number) => {
    const response = await apiClient.get<ApiResponse<Venue[]>>('/venues', {
      params: { latitude, longitude, radius },
    });
    return response.data;
  },

  getVenueProducts: async (
    venueId: string,
    params?: {
      category?: string;
      search?: string;
      page?: number;
      limit?: number;
    }
  ) => {
    const response = await apiClient.get<ApiResponse<{ products: Product[]; totalCount: number }>>(`/venues/${venueId}/products`, {
      params,
    });
    return response.data;
  },
};