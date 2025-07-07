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
import { LazyFooterHome } from '@/widgets/home/ui/LazyComponents';
import { LazySection } from '@/shared/ui';

export default function Home() {
  return (
    <div className='mt-10 flex flex-col gap-10'>
      <Hero />
      <Girl />
      <div className='mt-6 flex flex-col items-center gap-1'>
        <SubCategory />
        <LazyCategory />
      </div>

      <LazySection>
        <LazyHowItWorks />
      </LazySection>

      <div className='mt-8 flex justify-center'>
        <LazySection>
          <LazyQr />
        </LazySection>
      </div>

      <LazySection>
        <LazyFeedback />
      </LazySection>

      <div className='mt-16 flex justify-center'>
        <LazySection>
          <LazyFourPeople />
        </LazySection>
      </div>

      <LazySection>
        <LazyBlog />
      </LazySection>

      <div className='mt-16'>
        <LazySection>
          <LazyFooterHome />
        </LazySection>
      </div>
    </div>
  );
}
