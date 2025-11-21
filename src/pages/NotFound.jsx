import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        {/* Pixel corners */}
        <div className="relative inline-block">
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white"></div>

          <div className="border-4 border-white p-8 md:p-16 bg-black">
            <h1 className="text-6xl md:text-9xl font-pixel text-white mb-4">
              404
            </h1>
            <p className="text-xl md:text-3xl font-pixel text-gray-300 mb-8">
              Stránka nenalezena
            </p>
            <p className="text-base md:text-xl font-pixel text-gray-400 mb-12 max-w-md">
              Zdá se, že jste zabloudili. Tato stránka neexistuje nebo byla
              přesunuta.
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white border-2 border-white text-black font-pixel text-base md:text-xl hover:bg-gray-200 transition-all duration-300"
            >
              Zpět domů
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
