import React from "react";

export default function PixelatedBoxes() {
  const items = [
    {
      id: 1,
      image: "/image0.png",
      alt: "Pearl Crown",
    },
    {
      id: 2,
      image: "/image1.png",
      alt: "Sapphire Bracelet",
    },
    {
      id: 3,
      image: "/image2.png",
      alt: "Royal Tiara",
    },
  ];

  return (
    <div className="  flex items-center justify-center p-8 mt-24">
      <div className="flex flex-wrap gap-16 justify-center max-w-8xl">
        {items.map((item) => (
          <div key={item.id} className="relative  border-4 border-white">
            {/* Pixelated border frame */}
            <div className="relative w-96 h-96">
              {/* Corner pieces - top left */}

              <div className="absolute -top-5 -left-5 w-12 h-12 bg-white "></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-white "></div>
              <div className="absolute -bottom-5 -right-3 w-12 h-12 bg-white "></div>
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-white "></div>

              <div className="absolute -top-3 -left-5 w-48 h-12 bg-white "></div>
              <div className="absolute -top-3 -left-2 w-10 h-48 bg-white "></div>
              <div className="absolute -bottom-3 -right-2 w-10 h-48 bg-white  "></div>
              <div className="absolute -bottom-3 right-5 w-48 h-12 bg-white "></div>
              {/* Inner content area */}
              <div className="absolute w-full h-full flex items-center justify-center bg-white  overflow-hidden ">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-[95%] h-[95%] object-contain p-5 bg-zinc-400"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
