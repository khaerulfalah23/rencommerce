'use client';

import Link from 'next/link';
import { CartItem } from './CartItem';
import { FiTrash2 } from 'react-icons/fi';
import { CartStore } from '@/stores/CartStore';
import { SidebarStore } from '@/stores';
import { IoMdArrowForward } from 'react-icons/io';
import { useEffect } from 'react';

export function Sidebar() {
  const { isOpen, toggle } = SidebarStore();
  const [
    cart,
    itemAmount,
    totalPrice,
    clearCart,
    setItemAmount,
    setTotalPrice,
  ] = CartStore((state) => [
    state.cart,
    state.itemAmount,
    state.totalPrice,
    state.clearCart,
    state.setItemAmount,
    state.setTotalPrice,
  ]);
  useEffect(() => {
    setItemAmount();
    setTotalPrice();
  }, [cart,setItemAmount, setTotalPrice]);
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase font-semibold text-sm'>
          Shopping Bag ({itemAmount})
        </div>
        {/* icons */}
        <div
          onClick={toggle}
          className='cursor-pointer h-8 w-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 overflow-y h-[50%] overflow-x-hidden overflow-y-auto border-b'>
        {cart.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
            />
          );
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {totalPrice.toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
        <Link
          href={'/'}
          className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>
          view cart
        </Link>
        <Link
          href={'/'}
          className='bg-primary flex py-4 justify-center items-center text-white w-full font-medium'>
          Chekout
        </Link>
      </div>
    </div>
  );
}
