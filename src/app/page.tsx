import { Hero } from '@/features';
import {
  Girl,
  SubCategory,
  LazyCategory,
  LazyHowItWorks,
  LazyQr,
  LazyFeedback,
  LazyFourPeople,
  LazyBlog,
} from '@/widgets';
import { FooterHome, LoadingWrapper } from '@/shared/ui';

export default function Home() {
  return (
    <LoadingWrapper>
      <div className='mt-10 flex flex-col gap-10'>
        {/* Критически важные компоненты - загружаются сразу */}
        <Hero />
        <Girl />
        <div className='mt-6 flex flex-col items-center gap-1'>
          <SubCategory />
          {/* Остальные компоненты загружаются лениво с next/dynamic */}
          <LazyCategory />
        </div>

        <LazyHowItWorks />

        <div className='mt-8 flex justify-center'>
          <LazyQr />
        </div>

        <LazyFeedback />

        <div className='mt-16 flex justify-center'>
          <LazyFourPeople />
        </div>

        <LazyBlog />

        <div className='mt-16'>
          <FooterHome />
        </div>
      </div>
    </LoadingWrapper>
  );
}
