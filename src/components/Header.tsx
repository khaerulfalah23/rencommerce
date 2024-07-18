'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BsBag } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { SidebarStore } from '@/stores';
import { CartStore } from '@/stores/CartStore';

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const toggle = SidebarStore((state) => state.toggle);
  const itemAmount = CartStore((state) => state.itemAmount);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed top-0 w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* logo */}
        <Link href={'/'}>
          <Image
            width={0}
            height={0}
            className='w-[40px] h-auto'
            src='/img/logo.svg'
            title='Logo'
            alt='Logo'
          />
        </Link>
        {/* cart */}
        <div
          onClick={() => toggle()}
          className='cursor-pointer flex relative'>
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -buttom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
}
