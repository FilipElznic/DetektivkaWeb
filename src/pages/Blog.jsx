export default function Blog() {
  return (
    <div className="bg-black min-h-screen flex flex-col pt-24">
      <div className="flex items-center justify-center">
        <div className="container mx-auto px-4 pt-20 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-pixel mb-6 text-center">
            Blog
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-pixel text-center text-gray-300 w-1/2 mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* Blog updates */}
      <div className="container mx-auto px-4 pb-20 ">
        <BlogContent
          title="12.9. - Zahájení projektu a první kroky"
          points={[
            "Start projektu: Založení GitHub repozitáře a příprava Figma projektu pro UI modely.",
            "Core mechaniky: LB začal pracovat na základních skriptech pro běh hry.",
            "Movement: MČ a LB společně implementovali první verzi pohybu postavy.",
            "Design: Návrh Landing page a první koncepty vizuálu.",
          ]}
        />

        <BlogContent
          title="7.11. - Styl 'Louvre', Inventář a Zvuky"
          points={[
            "Web Design: Kompletní předělání vizuálu webu – transformace detektivky do stylu 'Louvre'.",
            "Interakce: MČ dokončil mechaniky pro používání a sbírání itemů.",
            "Systémy: ŠR naimplementoval Inventář a společně s MČ rozjeli Dialogový systém.",
            "Audio: LK se pustil do tvorby a integrace zvuků do hry.",
          ]}
        />

        <BlogContent
          title="21.11. - Příběh, Questy a Programování webu"
          points={[
            "Storytelling: Dnes jsme se zaměřili na hloubku příběhu a narativní design hry.",
            "Gameplay: LB pracuje na Quest systému a nápovědě pro hráče, MČ řeší přepínání scén.",
            "Web Development: Začalo ostré programování webu. Máme hotový hosting, navbar a footer.",
            "UI/UX: Finalizace designu ostatních stránek webu a ladění základních komponent.",
          ]}
        />
      </div>
    </div>
  );
}

const BlogContent = ({ title, points }) => {
  return (
    <div className="min-h-[60vh] w-full py-8">
      <div className="w-full md:w-2/3 border-4 border-white bg-white relative mt-12 md:mt-24 mx-auto p-6 md:p-12">
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
        <div className="relative w-full bg-white text-black p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-pixel mb-6">
            {title}
          </h2>
          <ul className="space-y-4 text-base md:text-lg lg:text-xl">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-2xl mr-3">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
