import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Domů", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "V\u00fdvoj hry", href: "/vyvoj" },
      { label: "O n\u00e1s", href: "/onas" },
      { label: "GitHub repo", href: "/github" },
    ],
    []
  );

  return (
    <nav className="w-full py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Home button on the left */}
          <Link to="/">
            <NavButton className="text-sm md:text-xl md:px-12 md:py-5 tracking-wide">
              Domů
            </NavButton>
          </Link>

          {/* Burger menu button for mobile and tablet */}
          <NavButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden px-4 py-3 text-xl z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "\u2715" : "\u2630"}
          </NavButton>

          {/* Desktop navigation items on the right */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.slice(1).map((item, index) => (
              <Link key={index} to={item.href}>
                <NavButton className="text-base xl:text-xl xl:px-12 xl:py-5 tracking-wide whitespace-nowrap">
                  {item.label}
                </NavButton>
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
              >
                <NavButton className="w-full text-sm tracking-wide text-center">
                  {item.label}
                </NavButton>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
