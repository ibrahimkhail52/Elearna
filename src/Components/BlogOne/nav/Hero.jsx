// Components/Hero/Hero.jsx
import React from "react";
import bgImage from "../../../assets/BlogOne img/navImg/bg-img.webp";

function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center px-6 sm:px-12 md:px-20 lg:px-32"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-xl sm:max-w-2xl md:max-w-4xl text-white">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-widest mb-2">
          NEWS AND JOURNALS
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-[45px] font-bold leading-snug sm:leading-tight md:leading-tight">
          Planning to transition to a new career?
        </h1>
      </div>
    </div>
  );
}

export default Hero;
