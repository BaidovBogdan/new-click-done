import Image from 'next/image';
import { XlBlogCardProps } from '@/shared/model/types/blog';

export default function XlBlogGridCard({
  image,
  desc,
  date,
  big,
}: XlBlogCardProps) {
  return (
    <div
      className={`bg-white rounded-3xl hover:scale-105 transition-all duration-300 ${
        big ? '!w-[588px] !h-[414px]' : '!w-[384px] !h-[374px]'
      }`}
    >
      <div className='flex flex-col gap-2 p-2'>
        <div className='relative'>
          {!big ? (
            <Image
              src={image}
              alt='blog-card'
              width={368}
              height={240}
              className='hidden xl:block'
              loading='lazy'
              quality={100}
            />
          ) : (
            <Image
              src={image}
              alt='blog-card'
              width={572}
              height={300}
              className='hidden xl:block'
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
          <span className='TextFSSM font-normal text-[#1D1D1FA6] sm:TextFS sm:mt-7'>
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
