import Image from 'next/image';
import { BlogPageCard } from '@/shared/ui';

export default function BlogCTA() {
  return (
    <div className='flex flex-col gap-6 items-center'>
      <span className='text-center HeadingFS2 font-medium'>Blog</span>
      <div className='flex flex-col gap-4'>
        <Image
          src='/images/blog/mobile-blog-cta.webp'
          alt='blog-cta'
          width={350}
          height={280}
          quality={100}
        />
        <div>
          <BlogPageCard
            date='12.06.2025'
            description='Does avoiding impulse purchases help you save money?Does avoiding impulse purchases help you save money?'
            image='/images/blog/mobile-line.webp'
          />
        </div>
      </div>
    </div>
  );
}
