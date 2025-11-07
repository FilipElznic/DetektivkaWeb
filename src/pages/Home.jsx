import React from "react";
import LandingPage from "../Components/LandingPage.jsx";
import Intro from "../Components/Intro.jsx";
import Mission from "../Components/Mission.jsx";
import Footer from "../Components/Footer.jsx";
import Explore from "../Components/Explore.jsx";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <div className="h-full w-full bg-gradient-to-b from-zinc-700 via-zinc-800 to-black">
        <Intro />
        <Mission />
      </div>

      <Explore />
      <Footer />
    </div>
  );
}
