import PixelatedBoxes from "./PixelatedBoxes";

function Intro() {
  return (
    <div className=" min-h-screen text-white p-8 ">
      <div className="container mx-auto mt-40">
        <h2 className="text-9xl">Intro</h2>
        <p className="w-1/2 my-8 text-xl text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui
          vitae culpa voluptates laborum! Qui reiciendis, impedit quo eveniet
          tenetur temporibus, doloribus placeat vero consequuntur consequatur
          nisi, accusantium expedita iste.
        </p>
      </div>
      <PixelatedBoxes />
      <div className="h-screen mt-44 mx-auto">
        <Box />
      </div>
    </div>
  );
}
export default Intro;

const Box = () => {
  return (
    <div className="w-2/3 h-3/5 border-4 border-white relative mt-24 mx-auto">
      {/* Corner pieces - top left */}
      <div className="absolute -top-5 -left-5 w-12 h-12 bg-white "></div>
      <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-white "></div>
      <div className="absolute -bottom-5 -right-3 w-12 h-12 bg-white "></div>
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-white "></div>
      <div className="absolute -top-2 -right-0 w-2/3 h-12 bg-white "></div>
      <div className="absolute -bottom-3 -left-2 w-10 h-1/2 bg-white "></div>

      <div className="absolute -top-3 -right-2 w-10 h-1/2 bg-white "></div>
      <div className="absolute -bottom-2 left-5 w-1/2 h-12 bg-white "></div>
      {/* Inner content area */}
      <div className="absolute w-full h-full flex items-center justify-center bg-white  overflow-hidden ">
        <p className="text-black text-4xl">Iframe</p>
      </div>
    </div>
  );
};

export { Box };
