import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

export default function Github() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="bg-black bg-opacity-50">
        <Navbar />
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-pixel mb-6 text-center">
            GitHub Repozitář
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-pixel mb-8 text-center text-gray-300">
            Tento repozitář je v současné době soukromý
          </p>
          <div className="text-center">
            <button
              disabled
              className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gray-500 border-[2px] border-black text-gray-300 font-pixel text-base md:text-xl tracking-wide cursor-not-allowed opacity-75"
            >
              🔒 Repozitář uzamčen
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
