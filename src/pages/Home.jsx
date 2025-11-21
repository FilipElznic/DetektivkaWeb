import React from "react";
import LandingPage from "../Components/LandingPage.jsx";
import Intro from "../Components/Intro.jsx";
import Mission from "../Components/Mission.jsx";
import Explore from "../Components/Explore.jsx";

export default function Home() {
  return (
    <div className="bg-black relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/bg.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10">
        <LandingPage />

        <Intro />
        <Mission />

        <Explore />
      </div>
    </div>
  );
}
