'use client';

import Image from 'next/image';
import { BlogPageCard } from '@/shared/ui';
import { useBreakpoint } from '@/shared/hooks';

export default function BlogCTA() {
  const breakpoint = useBreakpoint();
  const isLaptop = breakpoint === 'desktop';
  return (
    <div className='flex flex-col gap-6 items-center sm:-mx-0.5'>
      <span className='text-center HeadingFS2 font-medium'>Blog</span>
      <div className='flex flex-col sm:flex-row gap-4 xl:gap-6'>
        <Image
          src='/images/blog/mobile-blog-cta.webp'
          alt='blog-cta'
          width={350}
          height={280}
          quality={100}
          priority
          className='sm:hidden'
        />
        <Image
          src='/images/blog/mobile-blog-cta.webp'
          alt='blog-cta'
          width={344}
          height={320}
          quality={100}
          priority
          className='hidden sm:block max-w-[344px] max-h-[320px] min-w-[324px] min-h-[300px] xl:hidden'
        />
        <Image
          src='/images/blog/laptop-blog-cta.webp'
          alt='blog-cta'
          width={792}
          height={400}
          quality={100}
          priority
          className='hidden xl:block'
        />
        <div className='min-w-[300px]'>
          <BlogPageCard
            date='12.06.2025'
            description='Does avoiding impulse purchases help you save money?Does avoiding impulse purchases help you save money?'
            image={
              isLaptop
                ? '/images/blog/laptop-line.webp'
                : '/images/blog/mobile-line.webp'
            }
          />
        </div>
      </div>
    </div>
  );
}
