import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

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
    <div className="bg-black min-h-screen flex flex-col">
      <div className="bg-black bg-opacity-50">
        <Navbar />
      </div>

      <div className="flex-grow">
        <div className="container mx-auto px-4 py-20 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-pixel mb-6 text-center">
            O nás
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-pixel text-center text-gray-300 mb-12">
            Poznejte náš tým
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
            {teamMembers.map((item) => (
              <div
                key={item.id}
                className="relative border-2 md:border-4 border-white flex justify-center"
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
      </div>

      <Footer />
    </div>
  );
}
