import Image from 'next/image';
import { BlogCardProps } from '@/shared/model/types/blog';

export default function BlogGridCard({
  image,
  mobileImage,
  desc,
  date,
  big,
}: BlogCardProps) {
  return (
    <div
      className={`bg-white rounded-3xl w-[352px] h-[356px] sm:w-[344px] sm:h-[360px] ${
        big && '!w-[704px] !h-[414px]'
      }`}
    >
      <div className='flex flex-col gap-2 p-2'>
        <div className='relative'>
          <Image
            src={mobileImage}
            alt='blog-card'
            width={342}
            height={200}
            className='sm:hidden'
            loading='lazy'
            quality={100}
          />
          {!big ? (
            <Image
              src={image}
              alt='blog-card'
              width={328}
              height={190}
              className='hidden sm:block'
              loading='lazy'
              quality={100}
            />
          ) : (
            <Image
              src={image}
              alt='blog-card'
              width={688}
              height={300}
              className='hidden sm:block'
              loading='lazy'
              quality={100}
            />
          )}
          <span className='w-[58px] h-[30px] flex items-center justify-center TextFS font-normal bg-white rounded-lg text-center absolute top-3 left-3'>
            Article
          </span>
        </div>
        <div className='flex flex-col p-2 justify-between h-[115px] sm:h-[95px]'>
          <div
            className={`HeadingFS5 font-medium text-[#1D1D1FE5] sm:HeadingFS4 w-[318px] sm:w-[352px] ${
              big && '!w-[658px]'
            }`}
          >
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
