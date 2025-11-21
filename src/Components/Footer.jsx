import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="min-h-[35vh] flex flex-col items-center text-white gap-3 md:gap-5 relative bg-gradient-to-b from-black to-zinc-700 px-4 py-6">
      <div className="absolute bottom-5 left-4 md:left-10 bg-white">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 md:w-16 md:h-16" />
      </div>
      <div className="absolute bottom-5 right-4 md:right-10 text-white text-xs md:text-base">
        <p>Design by Filip Elznic</p>
      </div>

      <div className="h-1 w-[95%] bg-white my-3 md:my-5 relative">
        <div className="absolute -top-1 left-0 w-3 h-3 bg-white z-10"></div>
        <div className="absolute -top-1 right-0 w-3 h-3 bg-white z-10"></div>
      </div>
      {/* Navigation */}
      <nav className="mt-3 md:mt-6">
        <ul className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8 text-white font-pixel text-base md:text-2xl lg:text-4xl">
          <li>
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Domů
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-300 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/vyvoj" className="hover:text-gray-300 transition-colors">
              Vývoj hry
            </Link>
          </li>
          <li>
            <Link to="/onas" className="hover:text-gray-300 transition-colors">
              O nás
            </Link>
          </li>
          <li>
            <Link
              to="/github"
              className="hover:text-gray-300 transition-colors"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </nav>

      {/* Spacer to push legal links to bottom */}
      <div className="flex-grow"></div>

      {/* Legal links */}
      <div className="text-white font-pixel text-sm md:text-xl lg:text-2xl flex flex-col text-center mb-6 md:mb-8 gap-2 md:gap-4">
        <span className="flex flex-wrap justify-center gap-2">
          <Link to="/cookies" className="hover:text-gray-300 transition-colors">
            Cookies
          </Link>
          <span className="mx-1 md:mx-2">|</span>
          <Link
            to="/podminky"
            className="hover:text-gray-300 transition-colors"
          >
            podmínky
          </Link>
          <span className="mx-1 md:mx-2">|</span>
          <Link
            to="/ochrana-udaju"
            className="hover:text-gray-300 transition-colors"
          >
            ochrana údajů
          </Link>
        </span>
        @ {new Date().getFullYear()} SPSUL všechna práva vyhrazena.
      </div>
    </footer>
  );
}

export default Footer;
