import React from "react";
import { motion as Motion } from "framer-motion";
import bgImage from "../../../assets/Home1 img/Hero2 img/bg-img.avif";
import girl from "../../../assets/Home1 img/Hero2 img/bg-girl.webp";
import message from "../../../assets/Home1 img/Hero2 img/message.webp";
import student from "../../../assets/Home1 img/Hero2 img/enrolled-students.avif";

function Hero() {
  const Hero2Data = [
    {
      msgImg: message,
      stdImg: student,
    },
  ];

  return (
    <div
      className="relative min-h-[70rem] md:min-h-[50rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#00272F]/90 z-0"></div>

      <div className="relative z-10 h-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center px-6 md:px-20 py-20 gap-10 md:gap-16">
        <Motion.img
          src={girl}
          alt="Girl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md md:max-w-xl object-contain"
        />

        <Motion.div
          className="text-white max-w-xl space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-lg font-medium tracking-widest text-gray-100">
            ONLINE LEARNING
          </h4>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            More than <span className="text-yellow-400">25000+</span> <br />
            education courses online
          </h1>
          <p className="text-lg text-white max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus
            sollicitudin mauris tincidunt commodo ornare.
          </p>
          <button className="font-bold tracking-widest text-gray-100 bg-[#0F252A] border-2 border-gray-600 px-7 py-3 rounded hover:bg-gray-800 transition">
            Get Started
          </button>
        </Motion.div>
      </div>

      {Hero2Data.map(({ msgImg, stdImg }, i) => (
        <div key={i} className="relative w-full h-0">
          <img
            src={msgImg}
            alt=""
            className="absolute bottom-[14rem] left-4 h-16 sm:h-20 md:h-24 z-10"
          />
          <img
            src={stdImg}
            alt=""
            className="absolute bottom-[7rem] left-40 sm:left-60 md:left-72 h-32 sm:h-40 md:h-48 z-10"
          />
        </div>
      ))}
    </div>
  );
}

export default Hero;
