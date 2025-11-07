import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Domů", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Vývoj hry", href: "/vyvoj" },
    { label: "O nás", href: "/onas" },
    { label: "GitHub repo", href: "/github" },
  ];

  return (
    <nav className="w-full py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Home button on the left */}
          <Link
            to="/"
            className="relative px-6 py-3 md:px-12 md:py-5 bg-gray-200 border-[2px] border-black text-gray-900 font-pixel text-sm md:text-xl tracking-wide hover:bg-gray-300 transition-colors"
          >
            {/* Top-left corner */}
            <span className="absolute -top-2 -left-2 w-4 h-4 border-l-4 border-t-4 border-white"></span>
            {/* Top-right corner */}
            <span className="absolute -top-2 -right-2 w-4 h-4 border-r-4 border-t-4 border-white"></span>
            {/* Bottom-left corner */}
            <span className="absolute -bottom-2 -left-2 w-4 h-4 border-l-4 border-b-4 border-white"></span>
            {/* Bottom-right corner */}
            <span className="absolute -bottom-2 -right-2 w-4 h-4 border-r-4 border-b-4 border-white"></span>
            Domu
          </Link>

          {/* Burger menu button for mobile and tablet */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative px-4 py-3 bg-gray-200 border-[2px] border-black text-gray-900 font-pixel text-xl hover:bg-gray-300 transition-colors z-50"
            aria-label="Toggle menu"
          >
            <span className="absolute -top-2 -left-2 w-4 h-4 border-l-4 border-t-4 border-white"></span>
            <span className="absolute -top-2 -right-2 w-4 h-4 border-r-4 border-t-4 border-white"></span>
            <span className="absolute -bottom-2 -left-2 w-4 h-4 border-l-4 border-b-4 border-white"></span>
            <span className="absolute -bottom-2 -right-2 w-4 h-4 border-r-4 border-b-4 border-white"></span>
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop navigation items on the right */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.slice(1).map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="relative px-6 py-3 xl:px-12 xl:py-5 bg-gray-200 border-[2px] border-black text-gray-900 font-pixel text-base xl:text-xl tracking-wide hover:bg-gray-300 transition-colors whitespace-nowrap"
              >
                {/* Top-left corner */}
                <span className="absolute -top-2 -left-2 w-4 h-4 border-l-4 border-t-4 border-white"></span>
                {/* Top-right corner */}
                <span className="absolute -top-2 -right-2 w-4 h-4 border-r-4 border-t-4 border-white"></span>
                {/* Bottom-left corner */}
                <span className="absolute -bottom-2 -left-2 w-4 h-4 border-l-4 border-b-4 border-white"></span>
                {/* Bottom-right corner */}
                <span className="absolute -bottom-2 -right-2 w-4 h-4 border-r-4 border-b-4 border-white"></span>

                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-3 bg-black bg-opacity-80 p-4 rounded">
            {navItems.slice(1).map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="relative px-6 py-3 bg-gray-200 border-[2px] border-black text-gray-900 font-pixel text-sm tracking-wide hover:bg-gray-300 transition-colors text-center"
              >
                <span className="absolute -top-2 -left-2 w-4 h-4 border-l-4 border-t-4 border-white"></span>
                <span className="absolute -top-2 -right-2 w-4 h-4 border-r-4 border-t-4 border-white"></span>
                <span className="absolute -bottom-2 -left-2 w-4 h-4 border-l-4 border-b-4 border-white"></span>
                <span className="absolute -bottom-2 -right-2 w-4 h-4 border-r-4 border-b-4 border-white"></span>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
