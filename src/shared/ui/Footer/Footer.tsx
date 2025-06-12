export default function Footer() {
  return (
    <footer className="hidden lg:block">
      <div className="flex justify-center items-center gap-5 TextFS">
        <span className="TextFS text-[#1D1D1FA6]">© 2025 ClickDone</span>
        <a
          href="https://clickdone.com/privacy-notice"
          className="text-[#1D1D1FA6] hover:text-gray-700 underline transition-colors cursor-pointer"
        >
          Privacy Notice
        </a>
        <a
          href="https://clickdone.com/terms-of-use"
          className="text-[#1D1D1FA6] hover:text-gray-700 underline transition-colors cursor-pointer"
        >
          Terms of Use
        </a>
        <a
          href="https://clickdone.com/cookie-notice"
          className="text-[#1D1D1FA6] hover:text-gray-700 underline transition-colors cursor-pointer"
        >
          Cookie Notice
        </a>
      </div>
    </footer>
  );
}
