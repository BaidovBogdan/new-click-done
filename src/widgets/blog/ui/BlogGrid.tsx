import { BlogGridCard, XlBlogGridCard } from '@/shared/ui';

const blogCards = [
  {
    image: '/images/home/Laptop-blog1.webp',
    desc: 'Does avoiding impulse purchases help you save money?',
    date: '12.06.2025',
  },
  {
    image: '/images/home/Laptop-blog2.webp',
    desc: 'Does avoiding impulse purchases help you save money?',
    date: '12.06.2025',
  },
  {
    image: '/images/home/Laptop-blog3.webp',
    desc: 'Does avoiding impulse purchases help you save money?',
    date: '12.06.2025',
  },
];

export default function BlogGrid() {
  const allCards = [...blogCards, ...blogCards];

  const bigCard = {
    image: '/images/blog/tablet-grid.webp',
    desc: 'Does avoiding impulse purchases help you save money?',
    date: '12.06.2025',
  };

  const cardsForMobile = [
    ...blogCards,
    ...blogCards,
    {
      image: '/images/home/Laptop-blog3.webp',
      desc: 'Does avoiding impulse purchases help you save money?',
      date: '12.06.2025',
    },
  ];

  const xlCards = [...blogCards, ...blogCards];

  const xlBigCard = {
    image: '/images/blog/laptop-grid.webp',
    desc: 'Does avoiding impulse purchases help you save money?',
    date: '12.06.2025',
    xlImage: '/images/blog/laptop-grid.webp',
  };

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div className='flex flex-col gap-4 sm:hidden'>
        {cardsForMobile.map((card, index) => (
          <BlogGridCard
            key={index}
            image={card.image}
            mobileImage={card.image}
            desc={card.desc}
            date={card.date}
          />
        ))}
      </div>
      <div className='hidden sm:flex flex-col gap-4 xl:hidden'>
        <div>
          <BlogGridCard
            image={bigCard.image}
            mobileImage={bigCard.image}
            desc={bigCard.desc}
            date={bigCard.date}
            big={true}
          />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {allCards.map((card, index) => (
            <BlogGridCard
              key={index}
              image={card.image}
              mobileImage={card.image}
              desc={card.desc}
              date={card.date}
            />
          ))}
        </div>
      </div>
      <div className='hidden xl:flex flex-col gap-8'>
        <div className='flex gap-6'>
          <XlBlogGridCard
            image={xlBigCard.image}
            desc={xlBigCard.desc}
            date={xlBigCard.date}
            big={true}
          />
          <XlBlogGridCard
            image={xlBigCard.image}
            desc={xlBigCard.desc}
            date={xlBigCard.date}
            big={true}
          />
        </div>
        <div className='grid grid-cols-3 gap-6'>
          {xlCards.map((card, index) => (
            <XlBlogGridCard
              key={index}
              image={card.image}
              desc={card.desc}
              date={card.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
