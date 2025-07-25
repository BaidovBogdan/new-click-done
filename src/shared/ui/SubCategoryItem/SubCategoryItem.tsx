import Image from 'next/image';
import { SubCategoryItemProps } from '../../model/types/subCategory';

export default function SubCategoryItem({
  title,
  image,
  link,
}: SubCategoryItemProps) {
  return (
    <div className='flex flex-row sm:flex-col sm:items-center sm:justify-center pr-3 sm:pr-0 gap-2 h-[48px] sm:w-[164px] sm:h-[136px] xl:w-[136px] xl:h-[136px] bg-white rounded-xl sm:rounded-3xl xl:hover:scale-105 transition-all duration-300'>
      <Image
        src={image}
        alt={title}
        width={56}
        height={56}
        className='sm:hidden'
        quality={100}
      />
      <Image
        src={image}
        alt={title}
        width={68}
        height={68}
        className='hidden sm:block'
        quality={100}
      />
      <div className='flex justify-center items-center'>
        <span className='TextFS tracking-[-0.03em] font-medium text-[#1D1D1FE5] sm:text-center'>
          {title}
        </span>
      </div>
    </div>
  );
}
