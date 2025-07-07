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

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
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
  );
}
