import PixelatedFrame from "../Components/PixelatedFrame";

export default function ONas() {
  const teamMembers = [
    {
      id: 1,
      image: "/image0.png",
      alt: "Člen týmu 1",
      name: "John Doe",
    },
    {
      id: 2,
      image: "/image1.png",
      alt: "Člen týmu 2",
      name: "Jane Smith",
    },
    {
      id: 3,
      image: "/image2.png",
      alt: "Člen týmu 3",
      name: "Mike Johnson",
    },
    {
      id: 4,
      image: "/image0.png",
      alt: "Člen týmu 4",
      name: "Sarah Williams",
    },
    {
      id: 5,
      image: "/image1.png",
      alt: "Člen týmu 5",
      name: "Tom Brown",
    },
    {
      id: 6,
      image: "/image2.png",
      alt: "Člen týmu 6",
      name: "Lisa Davis",
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col pt-24">
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-20 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-pixel mb-6 text-center">
            Vývojáři
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-pixel text-center text-gray-300 mb-12">
            Poznejte náš tým
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
            {teamMembers.map((item) => (
              <div key={item.id} className="flex justify-center">
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
      </div>
    </div>
  );
}
