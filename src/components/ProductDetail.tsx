'use client';

import Image from 'next/image';
import { useFetchProductById } from '@/features/product';
import { CartStore } from '@/stores/CartStore';

export function ProductDetail({ id }: { id: string }) {
  const addToCart = CartStore((state) => state.addToCart);
  const { data: product } = useFetchProductById(id);
  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Lodading...
      </section>
    );
  }
  const { title, price, description, image } = product;
  return (
    <section className='mt-14 pt-12 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className=' flex flex-col lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <Image
              priority
              width={384}
              height={200}
              className='max-w-[200px] lg:max-w-sm'
              src={image}
              alt=''
            />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[420px] mx-auto lg:mx-0'>
              {title}
            </h1>
            <div className='text-xl text-red-500 font-medium mb-6'>
              $ {price}
            </div>
            <p className='mb-8'>{description}</p>
            <button
              onClick={() => addToCart(product)}
              className='bg-primary py-4 px-8 text-white'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
