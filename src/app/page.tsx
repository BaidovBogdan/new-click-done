import { Hero } from '@/features';
import {
  Girl,
  SubCategory,
  Category,
  HowItWorks,
  Qr,
  Feedback,
  FourPeople,
  Blog,
} from '@/widgets';
import { FooterHome, LoadingWrapper } from '@/shared/ui';

export default function Home() {
  return (
    <LoadingWrapper>
      <div className='mt-10 flex flex-col gap-10'>
        <Hero />
        <Girl />
        <div className='mt-6 flex flex-col items-center gap-1'>
          <SubCategory />
          <Category />
        </div>
        <HowItWorks />
        <div className='mt-8 flex justify-center'>
          <Qr />
        </div>
        <Feedback />
        <div className='mt-16 flex justify-center'>
          <FourPeople />
        </div>
        <Blog />
        <div className='mt-16'>
          <FooterHome />
        </div>
      </div>
    </LoadingWrapper>
  );
}
