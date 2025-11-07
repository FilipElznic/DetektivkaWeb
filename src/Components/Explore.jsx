function Explore() {
  return (
    <div className="relative bg-black">
      <img
        src="/door.png"
        alt="door"
        className="w-2/3 absolute z-10 top-0 right-0"
      />
      <div className="h-screen  flex flex-col container mx-auto text-white  z-20 relative">
        <h1 className="text-9xl py-6">Explore the unexplored</h1>
        <p className="w-1/2 text-xl text-start text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae in
          voluptates saepe magnam culpa! Velit a laudantium laborum earum maxime
          libero aut voluptate, accusamus fugiat, tenetur ipsam adipisci sint
          necessitatibus?
        </p>
        <a
          href="#home"
          className="relative px-12  py-5 mt-9 bg-gray-200 border-[2px] border-black text-gray-900 font-pixel text-xl tracking-wide hover:bg-gray-300 transition-colors w-56 text-center
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
      </div>
    </div>
  );
}

export default Explore;
