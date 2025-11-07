import PixelatedBoxes from "./PixelatedBoxes";

function Intro() {
  return (
    <div className="min-h-screen text-white p-4 md:p-8 py-8 md:py-0">
      <div className="container mx-auto  ">
        <h2 className="text-4xl md:text-6xl lg:text-9xl">Úvod</h2>
        <p className="w-full md:w-2/3 lg:w-1/2 my-6 md:my-8 text-base md:text-lg lg:text-xl text-gray-300">
          Ponořte se do světa napínavé detektivky, kde každý detail má význam.
          Objevujte stopy, rozluštěte záhady a staňte se mistrem dedukce.
        </p>
      </div>
      <PixelatedBoxes />
      <div className="min-h-[60vh] md:h-screen  mx-auto">
        <Box />
      </div>
    </div>
  );
}
export default Intro;

const Box = () => {
  return (
    <div className="w-full md:w-2/3 h-64 md:h-96 lg:h-3/5 border-4 border-white relative mt-12 md:mt-24 mx-auto">
      {/* Corner pieces - top left */}
      <div className="absolute -top-3 md:-top-5 -left-3 md:-left-5 w-8 h-8 md:w-12 md:h-12 bg-white"></div>
      <div className="absolute -bottom-2 md:-bottom-3 -left-2 md:-left-3 w-8 h-8 md:w-12 md:h-12 bg-white"></div>
      <div className="absolute -bottom-3 md:-bottom-5 -right-2 md:-right-3 w-8 h-8 md:w-12 md:h-12 bg-white"></div>
      <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 w-8 h-8 md:w-12 md:h-12 bg-white"></div>
      <div className="absolute -top-1 md:-top-2 -right-0 w-1/2 md:w-2/3 h-8 md:h-12 bg-white"></div>
      <div className="absolute -bottom-2 md:-bottom-3 -left-1 md:-left-2 w-6 md:w-10 h-1/3 md:h-1/2 bg-white"></div>

      <div className="absolute -top-2 md:-top-3 -right-1 md:-right-2 w-6 md:w-10 h-1/3 md:h-1/2 bg-white"></div>
      <div className="absolute -bottom-1 md:-bottom-2 left-5 w-1/3 md:w-1/2 h-8 md:h-12 bg-white"></div>
      {/* Inner content area */}
      <div className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden">
        <p className="text-black text-2xl md:text-3xl lg:text-4xl">Iframe</p>
      </div>
    </div>
  );
};

export { Box };
