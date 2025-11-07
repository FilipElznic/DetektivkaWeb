import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

export default function ONas() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="bg-black bg-opacity-50">
        <Navbar />
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-pixel mb-6 text-center">
            O nás
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-pixel text-center text-gray-300">
            About us content coming soon...
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
