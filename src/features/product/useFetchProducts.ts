'use client';

import { axiosInstance } from '@/lib/axios';
import { ProductItem } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useFetchProducts = () => {
  return useQuery<ProductItem[]>({
    queryKey: ['products'],
    queryFn: async (): Promise<ProductItem[]> => {
      const productResponse = await axiosInstance.get('/products');
      return productResponse.data;
    },
  });
};
