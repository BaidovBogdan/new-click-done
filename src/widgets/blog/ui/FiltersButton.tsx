'use client';

import FilterButton from '@/shared/ui/Blog/FilterButton';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const filters = [
  'All',
  'Beauty',
  'Kids',
  'Repair',
  'Psychology',
  'Education',
  'School',
  'Career',
  'Holiday',
  'Sport',
  'Health',
  'Money',
  'Technologies',
];

export default function FiltersButton() {
  const [activeFilter, setActiveFilter] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const handleFilterClick = (filter: string) => {
    console.log('Filter clicked:', filter);
    setActiveFilter(filter);
  };

  useEffect(() => {
    console.log('isInView:', isInView);
    console.log('activeFilter:', activeFilter);
  }, [isInView, activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className='flex flex-wrap justify-center items-center gap-3'
      variants={containerVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
    >
      {filters.map(filter => (
        <motion.div key={filter} variants={itemVariants}>
          <FilterButton
            isActive={activeFilter === filter}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </FilterButton>
        </motion.div>
      ))}
    </motion.div>
  );
}
