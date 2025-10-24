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
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Home button on the left */}
          <a
            href="#home"
            className="relative px-8 py-3 bg-gray-200 text-gray-900 font-mono text-sm uppercase tracking-wide hover:bg-gray-300 transition-colors"
          >
            Domů
          </a>

          {/* Other navigation items on the right */}
          <div className="flex items-center gap-6 flex-wrap">
            {navItems.slice(1).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative px-8 py-3 bg-gray-200  text-gray-900 font-mono text-sm uppercase tracking-wide hover:bg-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
