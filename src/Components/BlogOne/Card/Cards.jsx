import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import career from "../../../assets/BlogOne img/Cards/Career.webp";
import devlopment from "../../../assets/BlogOne img/Cards/devlopment.webp";
import teach from "../../../assets/BlogOne img/Cards/Teaching.webp";
import career2 from "../../../assets/BlogOne img/Cards/Career2.webp";
import devlopment2 from "../../../assets/BlogOne img/Cards/devlopment2.webp";
import teach2 from "../../../assets/BlogOne img/Cards/Teaching2.webp";

function Cards() {
  const cardata = [
    {
      image: career,
      title: "CAREER",
      description: "Improve knowledge retention with visual learning",
      data: "October 4, 2024",
    },
    {
      image: devlopment,
      title: "CAREER",
      description: "Master online learning with proven strategies",
      data: "October 4, 2024",
    },
    {
      image: teach,
      title: "CAREER",
      description: "How to enhance your learning experience today",
      data: "October 3, 2024",
    },
    {
      image: career2,
      title: "CAREER",
      description: "The evolution of teaching tools in the 21st century",
      data: "September 17, 2024",
    },
    {
      image: devlopment2,
      title: "CAREER",
      description: "The role of parental involvement in academic achievement",
      data: "September 16, 2024",
    },
    {
      image: teach2,
      title: "CAREER",
      description: "The role of technology in modern classrooms ",
      data: "September 14, 2024",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 gap-10 px-6 lg:px-12">
      {cardata.map((data, index) => (
        <AnimatedCard key={index} data={data} />
      ))}
    </div>
  );
}

function AnimatedCard({ data }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group rounded-lg border-2 overflow-hidden max-w-full sm:max-w-md mx-auto"
      style={{ aspectRatio: "4 / 5" }}
    >
      <div className="overflow-hidden h-52 sm:h-64 md:h-72 lg:h-80">
        <img
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          src={data.image}
          alt={data.title}
        />
      </div>

      <div className="px-6 py-6">
        <p className="text-lg sm:text-xl font-semibold tracking-widest">
          {data.title}
        </p>
        <h2 className="text-base sm:text-lg font-semibold mt-4">
          {data.description}
        </h2>
        <p className="text-gray-500 font-semibold mt-4 tracking-widest text-sm">
          {data.data}
        </p>
      </div>
    </Motion.div>
  );
}

export default Cards;
