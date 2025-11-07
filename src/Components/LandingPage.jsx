import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("/bg.webp")',
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-50">
        <Navbar />
        <div className="container mx-auto px-4 py-44  text-white">
          <h1 className="text-8xl font-pixel mb-6">Detektivka</h1>
          <p className="text-2xl font-pixel mb-12 w-1/3 text-gray-300">
            king it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words,
          </p>
          <a
            href="#about"
            className="inline-block px-8 py-4 bg-gray-200 border-[2px] border-black text-gray-900 font-pixel text-xl tracking-wide hover:bg-gray-300 transition-colors"
          >
            Začít zde
          </a>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
