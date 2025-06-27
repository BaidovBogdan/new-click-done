export default function FooterHome() {
  return (
    <footer className='flex flex-col bg-white rounded-t-3xl -mx-4 p-4 xl:-mx-0 sm:p-6 xl:p-8'>
      <div className='flex flex-col xl:flex-row justify-between gap-8 xl:gap-0 relative'>
        {/* Логотип и описание */}
        <div className='flex flex-col gap-4 xl:max-w-[400px]'>
          <div className='flex items-end gap-1'>
            <div className='mb-1'>
              <img src='/images/svgIcons/logo.svg' alt='logo icon' />
            </div>
            <span className='text-2xl font-medium'>ClickDone</span>
          </div>
          <div className='w-[344px] font-normal text-[#1D1D1FA6] TextFS'>
            A platform uniting people with problems and specialists to get the
            work done.
          </div>

          {/* Социальные сети для мобильной версии */}
          <div className='flex gap-3 sm:absolute sm:top-0 sm:right-0 xl:static xl:flex xl:gap-3 xl:mt-4'>
            <img
              src='/images/svgIcons/SvgFacebookFooter.svg'
              alt='facebook icon'
            />

            <img
              src='/images/svgIcons/SvgInstagramFooter.svg'
              alt='instagram icon'
            />

            <img src='/images/svgIcons/SvgXFooter.svg' alt='x icon' />
          </div>
        </div>

        {/* Навигационные ссылки */}
        <div className='flex flex-col sm:flex-row xl:flex-row gap-8 sm:justify-between sm:pr-16 xl:gap-24 xl:pr-24'>
          {/* For Customers */}
          <div className='flex flex-col gap-3'>
            <h3 className='TextFSLG font-medium text-[#1D1D1FE5]'>
              For Customers
            </h3>
            <div className='flex flex-col gap-2'>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Find a Specialist
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                How it works
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Login
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Mobile App
              </a>
            </div>
          </div>

          {/* For Professionals */}
          <div className='flex flex-col gap-3'>
            <h3 className='TextFSLG font-medium text-[#1D1D1FE5]'>
              For Professionals
            </h3>
            <div className='flex flex-col gap-2'>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                How it works
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Pricing
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Join as a Specialist
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Help center
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Mobile App
              </a>
            </div>
          </div>

          {/* About */}
          <div className='flex flex-col gap-3'>
            <h3 className='TextFSLG font-medium text-[#1D1D1FE5]'>About</h3>
            <div className='flex flex-col gap-2'>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                About us
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Careers
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Affiliates
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Blog
              </a>
              <a
                href='#'
                className='TextFS font-normal text-[#1D1D1FA6] hover:text-[#1A1A1A] transition-colors'
              >
                Press
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8 pt-6 border-t border-[#F5F5F5]'>
        <span className='TextFS text-[#1D1D1F73]'>© 2025 ClickDone.com</span>

        <a
          href='#'
          className='TextFS text-[#1D1D1F73] hover:text-[#1A1A1A] transition-colors'
        >
          Privacy Policy
        </a>
        <a
          href='#'
          className='TextFS text-[#1D1D1F73] hover:text-[#1A1A1A] transition-colors'
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}
