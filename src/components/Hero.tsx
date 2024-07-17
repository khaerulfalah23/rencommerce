import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className='-mt-3 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pretitle */}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] mr-3 bg-red-500'></div>New Trend
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE STYLISH <br />
            <span className='font-semibold'>WOMENS</span>
          </h1>
          <Link
            href={'/'}
            className='self-start uppercase font-semibold border-b-2 border-primary'>
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <Image
            priority
            width={279}
            height={700}
            src='/img/woman_hero.png'
            alt=''
          />
        </div>
      </div>
    </section>
  );
}
