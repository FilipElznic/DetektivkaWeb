function Footer() {
  return (
    <footer className="h-[35vh] bg-zinc-950 flex flex-col  items-center text-white gap-5 relative">
      <div className="absolute bottom-5 left-10  bg-white">
        <img src="/logo.png" alt="Logo" className="w-16 h-16" />
      </div>
      <div className="absolute bottom-5 right-10 text-white">
        <p> Design by Filip Elznic</p>
      </div>

      <div className="h-1 w-[95%] bg-white my-5 relative">
        <div className="absolute -top-1 left-0 w-3 h-3   bg-white z-10"></div>
        <div className="absolute -top-1 right-0 w-3 h-3   bg-white   z-10"></div>
      </div>
      {/* Navigation */}
      <nav className="mt-6">
        <ul className="flex flex-wrap justify-center gap-8 text-white font-pixel text-4xl ">
          <li>
            <a href="#home" className="hover:text-gray-300 transition-colors">
              Domů
            </a>
          </li>
          <li>
            <a
              href="#creators"
              className="hover:text-gray-300 transition-colors"
            >
              Vývojáři
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300 transition-colors">
              O hře
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="hover:text-gray-300 transition-colors"
            >
              O projektu
            </a>
          </li>
        </ul>
      </nav>

      {/* Spacer to push legal links to bottom */}
      <div className="flex-grow"></div>

      {/* Legal links */}
      <div className="text-white font-pixel text-2xl flex flex-col text-center mb-8 gap-4 ">
        <span>
          <a href="#cookies" className="hover:text-gray-300 transition-colors">
            Cookies
          </a>
          <span className="mx-2">|</span>
          <a href="#terms" className="hover:text-gray-300 transition-colors">
            podmínky
          </a>
          <span className="mx-2">|</span>
          <a href="#privacy" className="hover:text-gray-300 transition-colors">
            ochrana údajů
          </a>
        </span>
        &copy; {new Date().getFullYear()} 2025 SPSUL všechna práva vyhrazena.
      </div>
    </footer>
  );
}

export default Footer;
