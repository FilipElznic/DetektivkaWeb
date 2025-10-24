export default function Navbar() {
  const navItems = [
    { label: "Domů", href: "#home" },
    { label: "Blog", href: "#blog" },
    { label: "Vývoj hry", href: "#game-dev" },
    { label: "O nás", href: "#about" },
    { label: "GitHub repo", href: "#github" },
  ];

  return (
    <nav className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between ">
          {/* Home button on the left */}
          <a
            href="#home"
            className="relative px-12 py-5 bg-gray-200 border-[2px] border-black text-gray-900 font-mono text-xl tracking-wide hover:bg-gray-300 transition-colors"
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
          </a>

          {/* Other navigation items on the right */}
          <div className="flex items-center gap-6 flex-wrap">
            {navItems.slice(1).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative px-12 py-5 bg-gray-200 border-[2px] border-black text-gray-900 font-mono text-xl tracking-wide hover:bg-gray-300 transition-colors"
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
