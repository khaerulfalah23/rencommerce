'use client';

import { CartStore } from '@/stores/CartStore';
import { ProductItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { BsEyeFill, BsPlus } from 'react-icons/bs';

export function Product({ product }: { product: ProductItem }) {
  const { id, title, category, image, price } = product;
  const addToCart = CartStore((state) => state.addToCart);
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <Image
              width={120}
              height={160}
              className='h-auto w-auto group-hover:scale-110 transition duration-300'
              src={image}
              alt='Product image'
            />
          </div>
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link
            href={`/products/${id}`}
            className='w-12 h-12 bg-white text-primary drop-shadow-xl flex justify-center items-center'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <div className='text-sm capitalize mb-1 text-gray-500'>{category}</div>
        <Link href={`products/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  );
}
