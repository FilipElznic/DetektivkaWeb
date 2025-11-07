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
    <div className="flex items-center justify-center p-4 md:p-8 mt-12 md:mt-24">
      <div className="flex flex-wrap gap-8 md:gap-16 justify-center max-w-8xl">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative border-2 md:border-4 border-white"
          >
            {/* Pixelated border frame */}
            <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
              {/* Corner pieces - top left */}

              <div className="absolute -top-3 md:-top-5 -left-3 md:-left-5 w-8 h-8 md:w-12 md:h-12 bg-white"></div>
              <div className="absolute -bottom-2 md:-bottom-3 -left-2 md:-left-3 w-8 h-8 md:w-12 md:h-12 bg-white"></div>
              <div className="absolute -bottom-3 md:-bottom-5 -right-2 md:-right-3 w-8 h-8 md:w-12 md:h-12 bg-white"></div>
              <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 w-8 h-8 md:w-12 md:h-12 bg-white"></div>

              <div className="absolute -top-2 md:-top-3 -left-3 md:-left-5 w-32 md:w-48 h-8 md:h-12 bg-white"></div>
              <div className="absolute -top-2 md:-top-3 -left-1 md:-left-2 w-6 md:w-10 h-32 md:h-48 bg-white"></div>
              <div className="absolute -bottom-2 md:-bottom-3 -right-1 md:-right-2 w-6 md:w-10 h-32 md:h-48 bg-white"></div>
              <div className="absolute -bottom-2 md:-bottom-3 right-3 md:right-5 w-32 md:w-48 h-8 md:h-12 bg-white"></div>
              {/* Inner content area */}
              <div className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-[95%] h-[95%] object-contain p-3 md:p-5 bg-zinc-400"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
