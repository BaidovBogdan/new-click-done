import { BlogPageCardProps } from '@/shared/model/types/blog';
import Image from 'next/image';

export default function BlogPageCard({
  description,
  date,
  image,
}: BlogPageCardProps) {
  return (
    <div className='bg-white rounded-3xl max-w-[350px] h-[280px] sm:max-w-[344px] sm:h-[320px]'>
      <div className='flex flex-col gap-12 p-2 h-full'>
        <div className='relative'>
          <span className='w-[58px] h-[30px] flex items-center justify-center TextFS font-normal bg-[#F7F7F7] rounded-lg text-center absolute top-3 left-3'>
            Article
          </span>
          <Image
            src={image}
            alt='blog-page-card'
            width={172}
            height={468}
            className='absolute top-[154px] right-[-8px] sm:top-[194px] sm:right-[-8px]'
          />
        </div>
        <div className='p-3 relative'>
          <div className='max-w-[318px] HeadingFS4 font-medium'>
            {description}
          </div>
          <span className='absolute -bottom-12 left-3 font-normal text-[#1D1D1FA6]/70'>
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
