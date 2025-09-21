import React from "react";
import { motion as Motion } from "framer-motion";

import shopia from "../../../assets/BlogOne img/sliderImg/shopia.svg";
import leaf from "../../../assets/BlogOne img/sliderImg/leaf.svg";
import concluas from "../../../assets/BlogOne img/sliderImg/concluas.svg";
import Aeh from "../../../assets/BlogOne img/sliderImg/aeh.svg";
import Blogo from "../../../assets/BlogOne img/sliderImg/B..svg";
import carla from "../../../assets/BlogOne img/sliderImg/Carla.svg";

function Slider2() {
  const sliderImages = [
    { src: concluas, alt: "Concluas" },
    { src: Aeh, alt: "AEH" },
    { src: Blogo, alt: "Blogo" },
    { src: carla, alt: "Carla" },
    { src: shopia, alt: "Shopia" },
    { src: leaf, alt: "Leaf" },
  ];

  const duplicatedImages = [...sliderImages, ...sliderImages];

  return (
    <div className="relative overflow-hidden bg-[#0F252A] py-12">
      <p className="text-center text-[#6C7071] mb-8 px-4 sm:px-0 text-sm sm:text-base font-semibold max-w-xl mx-auto">
        Learn from 350+ leading universities and companies with us
      </p>

      <div className="absolute top-0 left-0 w-16 sm:w-32 h-full z-10 bg-gradient-to-r from-[#10262b] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 sm:w-32 h-full z-10 bg-gradient-to-l from-[#10262b] to-transparent pointer-events-none" />

      <Motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedImages.map((img, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-4 sm:mx-8 opacity-80"
            style={{
              flexShrink: 0,
              width: "6rem",
              height: "3rem",
              sm: { width: "9rem", height: "5rem" },
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Motion.div>
    </div>
  );
}

export default Slider2;
