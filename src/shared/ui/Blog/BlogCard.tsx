import Image from 'next/image';
import { BlogCardProps } from '@/shared/model/types/blog';

export default function BlogCard({
  image,
  mobileImage,
  desc,
  date,
}: BlogCardProps) {
  return (
    <div className='bg-white rounded-3xl w-[280px] h-[326px] sm:w-[384px] sm:h-[374px]'>
      <div className='flex flex-col gap-4 p-2'>
        <div className='relative'>
          <Image
            src={mobileImage}
            alt='blog-card'
            width={272}
            height={200}
            className='sm:hidden'
          />
          <Image
            src={image}
            alt='blog-card'
            width={368}
            height={240}
            className='hidden sm:block'
          />
          <span className='w-[58px] h-[30px] flex items-center justify-center TextFS font-normal bg-white rounded-lg text-center absolute top-3 left-3'>
            Article
          </span>
        </div>
        <div className='flex flex-col justify-between h-[115px] sm:h-[95px]'>
          <div className='HeadingFS5 font-medium text-[#1D1D1FE5] sm:HeadingFS4 w-[248px] sm:w-[352px]'>
            {desc}
          </div>
          <span className='TextFSSM font-normal text-[#1D1D1FA6] sm:TextFS'>
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
