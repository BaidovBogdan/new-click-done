import { BlogGridCard } from '@/shared/ui';

const blogCards = [
  {
    image: '/images/home/Laptop-blog1.webp',
    desc: 'Does avoiding impulse purchases help you save money?',
    date: '12.06.2025',
  },
  {
    image: '/images/home/Laptop-blog2.webp',
    desc: 'Without five minutes: does microlearning work?',
    date: '12.06.2025',
  },
  {
    image: '/images/home/Laptop-blog3.webp',
    desc: 'A small guide to self-checking your bike',
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
      desc: 'A small guide to self-checking your bike',
      date: '12.06.2025',
    },
  ];

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
      <div className='hidden sm:flex flex-col gap-4'>
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
    </div>
  );
}
