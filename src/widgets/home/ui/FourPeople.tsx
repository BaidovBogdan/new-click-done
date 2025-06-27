import Image from 'next/image';

export default function FourPeople() {
  return (
    <div className='flex flex-col gap-2 sm:gap-3 xl:gap-6 xl:flex-row-reverse'>
      <Image
        src='/images/home/Mobile4PeopleBlack.webp'
        alt='bg-4-people'
        width={358}
        height={340}
        quality={100}
        className='sm:hidden'
        loading='lazy'
      />
      <Image
        src='/images/home/Mobile4People.webp'
        alt='4-people'
        width={358}
        height={208}
        quality={100}
        className='sm:hidden'
        loading='lazy'
      />
      <Image
        src='/images/home/Tablet4PeopleBlack.webp'
        alt='bg-4-people'
        width={754}
        height={422}
        quality={100}
        className='hidden sm:block xl:hidden'
        loading='lazy'
      />
      <Image
        src='/images/home/Tablet4People.webp'
        alt='4-people'
        width={754}
        height={409}
        quality={100}
        className='hidden sm:block xl:hidden'
        loading='lazy'
      />
      <Image
        src='/images/home/Laptop4PeopleBlack.webp'
        alt='bg-4-people'
        width={383}
        height={520}
        quality={100}
        className='hidden xl:block'
        loading='lazy'
      />
      <Image
        src='/images/home/Laptop4People.webp'
        alt='4-people'
        width={792}
        height={520}
        quality={100}
        className='hidden xl:block'
        loading='lazy'
      />
    </div>
  );
}
