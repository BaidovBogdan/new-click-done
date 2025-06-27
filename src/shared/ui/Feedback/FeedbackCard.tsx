import { FeedbackCardProps } from '@/shared/model/types/feedback';
import { StarFilled } from '@ant-design/icons';
import Image from 'next/image';

const svgComment = (
  <svg
    width='18'
    height='16'
    viewBox='0 0 18 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 1C0 0.447715 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V7.79082C8 7.92878 7.97145 8.06525 7.91616 8.19164L4.76214 15.4008C4.6029 15.7648 4.24328 16 3.84598 16H1.36019C0.685551 16 0.204483 15.3457 0.405711 14.7017L2.29714 8.64914C2.39776 8.32717 2.15722 8 1.8199 8H1C0.447715 8 0 7.55228 0 7V1Z'
      fill='black'
      fillOpacity='0.15'
    />
    <path
      d='M10 1C10 0.447715 10.4477 0 11 0H17C17.5523 0 18 0.447715 18 1V7.79082C18 7.92878 17.9715 8.06525 17.9162 8.19164L14.7621 15.4008C14.6029 15.7648 14.2433 16 13.846 16H11.3602C10.6856 16 10.2045 15.3457 10.4057 14.7017L12.2971 8.64914C12.3978 8.32717 12.1572 8 11.8199 8H11C10.4477 8 10 7.55228 10 7V1Z'
      fill='black'
      fillOpacity='0.15'
    />
  </svg>
);

export default function FeedbackCard({
  spec,
  time,
  stars,
  name,
  description,
  spec2,
  image,
}: FeedbackCardProps) {
  const starsArray = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div className='w-full h-[364px] bg-white rounded-3xl flex flex-col gap-4 py-4 px-3 sm:py-6 sm:px-5 sm:gap-10'>
      <div className='flex justify-between px-1 sm:px-2'>
        <span className='px-2 py-1 bg-[#F7F7F7] rounded-lg font-normal TextFS text-[#1D1D1FA6]'>
          {spec}
        </span>
        <span className='font-normal TextFS text-[#1D1D1FA6] flex items-center'>
          {time}
        </span>
      </div>
      <div className='flex flex-col gap-3 px-1 sm:px-2'>
        <div className='flex gap-1'>
          {starsArray.map(star => (
            <StarFilled className='!text-[#FFC107]' key={star} />
          ))}
          <span className='font-medium TextFS'>{stars}</span>
        </div>
        <div>
          <span className='font-normal TextFS text-[#1D1D1FE5]'>
            {description}
          </span>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              loading='lazy'
            />
            <div className='flex flex-col'>
              <span className='font-medium TextFSLG'>{name}</span>
              <span className='font-normal TextFSSM text-[#1D1D1FA6]'>
                {spec2}
              </span>
            </div>
          </div>
          <div className='flex items-start'>{svgComment}</div>
        </div>
      </div>
    </div>
  );
}
