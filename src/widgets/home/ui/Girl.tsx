import Image from 'next/image';

export default function Girl() {
  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Background Line Images - Full Width */}
      <div className="absolute inset-0 left-[-54vw] right-[-50vw] w-[200vw] flex justify-center items-center overflow-hidden">
        {/* Mobile Line */}
        <div className="block sm:hidden w-full flex justify-center">
          <Image
            src="/images/home/mobileLineGirl.webp"
            alt="girl line"
            width={478}
            height={163}
            className="w-screen max-w-none object-cover"
          />
        </div>
      </div>
      {/* Tablet Line */}
      <div className="absolute inset-0 left-[-16px] right-[-50vw] w-[200vw] flex justify-center items-center overflow-hidden">
        <div className="hidden sm:block lg:hidden w-full flex justify-center">
          <Image
            src="/images/home/tabletLineGirl.webp"
            alt="girl line"
            width={869}
            height={297}
            className="w-screen max-w-none object-cover"
          />
        </div>
      </div>
      {/* Desktop Line */}
      <div className="absolute inset-0 left-[-1.5vw] right-[-50vw] w-[200vw] flex justify-center items-center overflow-hidden 2xl:max-w-[1582px] 2xl:max-h-[600px] 2xl:left-[15.5vw] 2xl:h-[600px] ">
        <div className="hidden lg:block w-full flex justify-center">
          <Image
            src="/images/home/desktopLineGirl.webp"
            alt="girl line"
            width={1582}
            height={541}
            className="w-screen max-w-none object-cover"
          />
        </div>
      </div>

      {/* Foreground Girl Images - Centered */}
      <div className="relative z-10 flex justify-center">
        {/* Mobile Girl */}
        <div className="block sm:hidden">
          <Image
            src="/images/home/mobileGirlHero.webp"
            alt="girl"
            width={340}
            height={240}
          />
        </div>
        {/* Tablet Girl */}
        <div className="hidden sm:block lg:hidden">
          <Image
            src="/images/home/tabletGirlHero.webp"
            alt="girl"
            width={550}
            height={340}
          />
        </div>
        {/* Desktop Girl */}
        <div className="hidden lg:block">
          <Image
            src="/images/home/desktopGirlHero.webp"
            alt="girl"
            width={960}
            height={480}
          />
        </div>
      </div>
    </div>
  );
}
