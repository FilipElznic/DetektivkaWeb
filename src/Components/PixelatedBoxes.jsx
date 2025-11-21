import PixelatedFrame from "./PixelatedFrame";

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
            <PixelatedFrame size="large">
              <img
                src={item.image}
                alt={item.alt}
                className="w-[95%] h-[95%] object-contain p-3 md:p-5 bg-zinc-400"
              />
            </PixelatedFrame>
          </div>
        ))}
      </div>
    </div>
  );
}
