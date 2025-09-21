import React from "react";
import bgImage from "../../../assets/Home1 img/Hero2 img/bg-img.avif";

function AboutHero() {
  return (
    <div
      className="relative min-h-[70rem] md:min-h-[37rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#0f252a]/90 z-0"></div>

      <div className="relative top-40 text-center md:items-start justify-center md:justify-center px-6 md:px-20 py-20 gap-10 md:gap-16">
        <p className="text-white font-bold text-xl ">About us</p>
        <h1 className="text-white font-bold text-6xl">You're sincerely</h1>
        <h1 className="text-white font-bold text-6xl">determined to grow</h1>
      </div>
    </div>
  );
}

export default AboutHero;
