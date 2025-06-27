import Image from 'next/image';
import { HowItWorksCardProps } from '@/shared/model/types/howItWorks';

export default function HowItWorksCard({
  title,
  description,
  image,
}: HowItWorksCardProps) {
  return (
    <div className='flex flex-col gap-4 w-[280px] h-[388px] sm:w-[384px] sm:h-[484px]'>
      <Image
        src={image}
        alt={title}
        width={280}
        height={280}
        className='sm:hidden'
        loading='lazy'
      />
      <Image
        src={image}
        alt={title}
        width={384}
        height={384}
        className='hidden sm:block'
        loading='lazy'
      />
      <div className='flex flex-col gap-2'>
        <div className='text-[#1D1D1FE5] font-medium !text-[16px] !leading-[20px] sm:!text-[20px] sm:!leading-[28px]'>
          {title}
        </div>
        <div className='font-normal TextFS text-[#1D1D1FA6] sm:!TextFSLG sm:!w-[90%]'>
          {description}
        </div>
      </div>
    </div>
  );
}
