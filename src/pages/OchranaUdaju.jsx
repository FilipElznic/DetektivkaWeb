export default function OchranaUdaju() {
  return (
    <div className="bg-black min-h-screen flex flex-col pt-24">
      <div className="flex-grow h-[82vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-pixel mb-12">
            Ochrana údajů
          </h1>
          <div className="border-4 border-white p-8 md:p-12 relative inline-block max-w-3xl">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-black border-l-4 border-t-4 border-white"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-black border-r-4 border-t-4 border-white"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-black border-l-4 border-b-4 border-white"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black border-r-4 border-b-4 border-white"></div>

            <p className="text-xl md:text-2xl lg:text-3xl font-pixel text-gray-300">
              Žádné osobní údaje nesbíráme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
