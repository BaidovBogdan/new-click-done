import Image from 'next/image';

export default function Qr() {
  return (
    <div className='w-[358px] h-[558px] sm:w-[754px] sm:h-[381px] xl:w-[1200px] xl:h-[376px]'>
      <Image
        src='/images/home/MobileQr.webp'
        alt='qr'
        width={358}
        height={558}
        className='sm:hidden'
        loading='lazy'
      />
      <Image
        src='/images/home/TabletQr.webp'
        alt='qr'
        width={754}
        height={381}
        className='hidden sm:block xl:hidden'
        loading='lazy'
      />
      <Image
        src='/images/home/LaptopQr.webp'
        alt='qr'
        width={1200}
        height={376}
        className='hidden xl:block'
        loading='lazy'
      />
    </div>
  );
}
