/* eslint-disable react/prop-types */
export default function Vyvoj() {
  return (
    <div className="bg-black min-h-screen flex flex-col pt-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 text-white text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-pixel mb-8 animate-fade-in">
          Vývoj hry
        </h1>
        <p className="w-full md:w-2/3 mx-auto text-lg md:text-xl text-gray-400 font-pixel leading-relaxed animate-fade-in-delay">
          Vítejte v Londýně zahaleném hustou, studenou mlhou. Nezačnete jako
          mladý nováček, ale jako ten jediný, na koho se britská metropole
          spoléhá – legendární konzultační detektiv Sherlock Holmes.
        </p>
      </div>

      {/* Roadmap Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-pixel text-white text-center mb-16">
          Plán vývoje
        </h2>
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

          <TimelineItem
            phase="Fáze 1"
            title="Počátek a Vize"
            date="Září 2025"
            description="Položení základů příběhu, definování herních mechanik a první skici viktoriánského Londýna."
            align="left"
          />
          <TimelineItem
            phase="Fáze 2"
            title="Jádro Hry"
            date="Listopad - Prosinec 2025"
            description="Vývoj klíčových systémů vyšetřování, tvorba dialogového stromu a implementace základní umělé inteligence."
            align="right"
          />
          <TimelineItem
            phase="Fáze 3"
            title="Audiovizuální Kabát"
            date="Leden - Únor 2026"
            description="Finalizace pixel-art grafiky, komponování atmosférického soundtracku a zvukových efektů."
            align="left"
          />
          <TimelineItem
            phase="Fáze 4"
            title="Finále a Vydání"
            date="Jaro 2026"
            description="Závěrečné testování, ladění chyb a slavnostní uvedení hry pro veřejnost."
            align="right"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <TechCard name="Unity Engine" icon="🎮" link="https://unity.com/" />
          <TechCard
            name="Aseprite"
            icon="🎨"
            link="https://www.aseprite.org/"
          />
          <TechCard name="FMOD Studio" icon="🎵" link="https://www.fmod.com/" />
          <TechCard name="Blender" icon="🧊" link="https://www.blender.org/" />
          <TechCard
            name="Visual Studio"
            icon="💻"
            link="https://visualstudio.microsoft.com/"
          />
        </div>
      </div>
    </div>
  );
}

const TimelineItem = ({ phase, title, date, description, align }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 md:mb-24 relative group">
      {/* Mobile Layout */}
      <div className="md:hidden w-full pl-8 border-l-2 border-gray-700 ml-4 relative pb-8">
        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white rotate-45"></div>
        <div className="bg-zinc-900 border-2 border-white p-6 relative">
          <span className="text-blue-400 font-pixel text-sm block mb-1">
            {date}
          </span>
          <h3 className="text-xl font-pixel text-white mb-2">{title}</h3>
          <p className="text-gray-400 font-pixel text-sm">{description}</p>
          <span className="absolute -top-3 right-4 bg-black px-2 text-white font-pixel text-xs border border-white">
            {phase}
          </span>
        </div>
      </div>

      {/* Desktop Layout - Left Side */}
      <div
        className={`hidden md:block w-5/12 ${
          align === "left" ? "text-right pr-8" : "invisible"
        }`}
      >
        <div className="bg-zinc-900 border-2 border-white p-6 relative hover:scale-105 transition-transform duration-300">
          {/* Pixel Corners */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-white"></div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></div>

          <span className="text-blue-400 font-pixel text-sm block mb-1">
            {date}
          </span>
          <h3 className="text-2xl font-pixel text-white mb-2">{title}</h3>
          <p className="text-gray-400 font-pixel">{description}</p>
          <span className="absolute -top-3 left-4 bg-black px-2 text-white font-pixel text-xs border border-white">
            {phase}
          </span>
        </div>
      </div>

      {/* Center Marker (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 bg-black border-2 border-white rotate-45 z-10 group-hover:bg-white transition-colors duration-300">
        <div className="w-2 h-2 bg-white group-hover:bg-black"></div>
      </div>

      {/* Desktop Layout - Right Side */}
      <div
        className={`hidden md:block w-5/12 ${
          align === "right" ? "text-left pl-8" : "invisible"
        }`}
      >
        <div className="bg-zinc-900 border-2 border-white p-6 relative hover:scale-105 transition-transform duration-300">
          {/* Pixel Corners */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-white"></div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></div>

          <span className="text-blue-400 font-pixel text-sm block mb-1">
            {date}
          </span>
          <h3 className="text-2xl font-pixel text-white mb-2">{title}</h3>
          <p className="text-gray-400 font-pixel">{description}</p>
          <span className="absolute -top-3 right-4 bg-black px-2 text-white font-pixel text-xs border border-white">
            {phase}
          </span>
        </div>
      </div>
    </div>
  );
};

const TechCard = ({ name, icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-32 h-32 md:w-40 md:h-40 border-2 border-white bg-black flex flex-col items-center justify-center gap-2 hover:bg-zinc-900 transition-colors cursor-pointer relative group"
  >
    <div className="absolute top-1 left-1 w-1 h-1 bg-white"></div>
    <div className="absolute top-1 right-1 w-1 h-1 bg-white"></div>
    <div className="absolute bottom-1 left-1 w-1 h-1 bg-white"></div>
    <div className="absolute bottom-1 right-1 w-1 h-1 bg-white"></div>
    <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform">
      {icon}
    </span>
    <span className="font-pixel text-white text-sm md:text-base">{name}</span>
  </a>
);
