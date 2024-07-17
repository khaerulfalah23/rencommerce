'use client';

import { Product } from './Product';
import { useFetchProducts } from '@/features/product';

export function ProductList() {
  const { data: products } = useFetchProducts();
  const filteredProduct = products?.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredProduct &&
            filteredProduct.map((product) => (
              <Product
                key={product.id}
                product={product}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
