import { Hero } from '@/features';
import { Girl } from '@/widgets';

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-10 min-h-[calc(100vh-80px)]">
      <Hero />
      <Girl />
    </div>
  );
}
