import Link from 'next/link';
import Image from 'next/image';
import { ProductItem } from '@/types';
import { CartStore } from '@/stores/CartStore';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

export function CartItem({ item }: { item: ProductItem }) {
  const { id, title, image, price, amount } = item;
  const [removeFromCart, increaseAmount, decreaseAmount] = CartStore(
    (state) => [
      state.removeFromCart,
      state.increaseAmount,
      state.decreaseAmount,
    ]
  );
  return (
    <div className='flex gap-x-4 py-2 lg:py-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link href={`/products/${id}`}>
          <Image
            width={80}
            height={80}
            className='w-auto h-auto'
            src={image}
            alt='Product image'
          />
        </Link>
        <div className='w-full flex flex-col'>
          {/* title & remove icon*/}
          <div className='flex justify-between mb-2'>
            {/* title */}
            <Link
              href={`/products/${id}`}
              className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* qty */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              {/* minus icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className='flex-1 flex items-center h-full justify-center cursor-pointer'>
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className='h-full flex items-center justify-center px-2'>
                {amount}
              </div>
              {/* plus icon */}
              <div
                onClick={() => increaseAmount(id)}
                className='flex-1 h-full flex items-center justify-center cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className='flex-1 flex items-center justify-around'>
              $ {price}
            </div>
            {/* final price */}
            <div className='flex flex-1 justify-end items-center text-primary font-medium'>{`$ ${(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
