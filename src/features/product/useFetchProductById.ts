'use client';

import { ProductItem } from '@/types';
import { axiosInstance } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const useFetchProductById = (id: string) => {
  return useQuery<ProductItem>({
    queryKey: ['product', id],
    queryFn: async (): Promise<ProductItem> => {
      const productResponse = await axiosInstance.get(`/products/${id}`);
      return productResponse.data;
    },
    enabled: !!id,
  });
};
