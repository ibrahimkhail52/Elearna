// Components/Hero/Hero.jsx
import React from "react";
import bgImg from "../../../assets/Contact img/ContactNavbar/girl-bg-img.webp";

function ContactHero() {
  return (
    <div
      className="relative h-[40rem] bg-cover bg-center flex items-center px-6 sm:px-12 md:px-20 lg:px-32"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-xl sm:max-w-2xl md:max-w-4xl text-white">
        <h1 className="text-3xl sm:text-4xl md:text-[45px] font-bold leading-snug sm:leading-tight md:leading-tight">
          Contact us
        </h1>
      </div>
    </div>
  );
}

export default ContactHero;
