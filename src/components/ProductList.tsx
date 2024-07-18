'use client';

import { Product } from './Product';
import { ProductSkeleton } from './ProductSkeleton';
import { useFetchProducts } from '@/features/product';

export function ProductList() {
  const { data: products, isPending } = useFetchProducts();
  return (
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {isPending ? (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          ) : (
            products &&
            products.map((product, idx) => (
              <Product
                key={idx}
                product={product}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
