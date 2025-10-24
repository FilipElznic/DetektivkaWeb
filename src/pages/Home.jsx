import React from "react";
import Navbar from "../Components/Navbar.jsx";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("/bg.webp")',
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-50">
        {" "}
        {/* Dark overlay */}
        <Navbar />
      </div>
    </div>
  );
}
