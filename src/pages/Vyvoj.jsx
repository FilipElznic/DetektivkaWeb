import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

export default function Vyvoj() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="bg-black bg-opacity-50">
        <Navbar />
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-pixel mb-6 text-center">
            Vývoj hry
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}
