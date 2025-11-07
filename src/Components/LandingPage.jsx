import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: 'url("/bg.webp")',
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-50">
        <Navbar />
        <div
          className="container mx-auto px-4 py-20 md:py-44 text-white transition-all duration-300"
          style={{
            opacity: 1 - scrollY / 500,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-pixel mb-6 animate-fade-in">
            Detektivka
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-pixel mb-12 w-full md:w-2/3 lg:w-1/3 text-gray-300 animate-fade-in-delay">
            Tajemná detektivní hra plná záhad a dobrodružství. Vydejte se na
            cestu plnou nečekaných zvratů a odhalte pravdu.
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gray-200 border-[2px] border-black text-gray-900 font-pixel text-base md:text-xl tracking-wide hover:bg-gray-300 transition-all duration-300 hover:scale-105 animate-fade-in-delay-2"
          >
            Začít zde
          </a>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
