function Explore() {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Background image for desktop only */}
      <img
        src="/door.png"
        alt="door"
        className="hidden lg:block w-2/3 absolute z-10 top-40 right-0"
      />
      <div className="min-h-[80vh] md:min-h-screen flex flex-col container mx-auto text-white z-20 relative px-4 py-8 md:py-0">
        <h1 className="text-4xl md:text-6xl lg:text-9xl py-4 md:py-6">
          Explore the unexplored
        </h1>
        <p className="w-full md:w-2/3 lg:w-1/2 text-base md:text-lg lg:text-xl text-start text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae in
          voluptates saepe magnam culpa! Velit a laudantium laborum earum maxime
          libero aut voluptate, accusamus fugiat, tenetur ipsam adipisci sint
          necessitatibus?
        </p>
        <a
          href="#home"
          className="relative px-8 py-4 md:px-12 md:py-5 mt-6 md:mt-9 bg-gray-200 border-[2px] border-black text-gray-900 font-pixel text-base md:text-xl tracking-wide hover:bg-gray-300 transition-colors w-48 md:w-56 text-center
        "
        >
          {/* Top-left corner */}
          <span className="absolute -top-2 -left-2 w-4 h-4 border-l-4 border-t-4 border-white"></span>
          {/* Top-right corner */}
          <span className="absolute -top-2 -right-2 w-4 h-4 border-r-4 border-t-4 border-white"></span>
          {/* Bottom-left corner */}
          <span className="absolute -bottom-2 -left-2 w-4 h-4 border-l-4 border-b-4 border-white"></span>
          {/* Bottom-right corner */}
          <span className="absolute -bottom-2 -right-2 w-4 h-4 border-r-4 border-b-4 border-white"></span>
          <p>Začít hrát</p>
        </a>

        {/* Normal image for mobile only - displayed below content */}
        <img
          src="/door.png"
          alt="door"
          className="lg:hidden w-full mt-8 object-contain"
        />
      </div>
    </div>
  );
}

export default Explore;
