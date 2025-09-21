import React, { useEffect, useState } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import management from "../../../assets/Home1 img/CourseCards/Management.webp";
import design from "../../../assets/Home1 img/CourseCards/Design.webp";
import finance from "../../../assets/Home1 img/CourseCards/Finance.webp";
import development from "../../../assets/Home1 img/CourseCards/Development.webp";
import management2 from "../../../assets/Home1 img/CourseCards/Management2.webp";
import development2 from "../../../assets/Home1 img/CourseCards/Development2.webp";

function CourseCards() {
  const [selectedCategory, setSelectedCategory] = useState("All courses");

  const cardata = [
    {
      image: management,
      category: "Management",
      title: "Management",
      description: "Crisis management and problem-solving strategies",
      rating: "4.88 (210)",
      lessons: "6 Lessons",
      enrolled: "8k Enrolled",
      free: true,
    },
    {
      image: design,
      category: "Design",
      title: "Design",
      description: "Advanced photoshop techniques for designers",
      rating: "5.00 (1.2K)",
      lessons: "7 Lessons",
      enrolled: "9k Enrolled",
      free: true,
    },
    {
      image: finance,
      category: "Finance",
      title: "Finance",
      description: "Operations management and process improvement",
      rating: "4.75 (500)",
      lessons: "8 Lessons",
      enrolled: "5k Enrolled",
      free: true,
    },
    {
      image: development,
      category: "Development",
      title: "Development",
      description: "Database integration with MongoDB",
      rating: "4.92 (320)",
      lessons: "7 Lessons",
      enrolled: "9k Enrolled",
      free: true,
    },
    {
      image: management2,
      category: "Management",
      title: "Management",
      description: "Risk management and business continuity",
      rating: "4.95 (1.5K)",
      lessons: "10 Lessons",
      enrolled: "12k Enrolled",
      free: true,
    },
    {
      image: development2,
      category: "Development",
      title: "Development",
      description: "Full-stack development with the MERN stack",
      rating: "4.80 (1.1K)",
      lessons: "5 Lessons",
      enrolled: "6k Enrolled",
      free: true,
    },
  ];

  const categories = [
    "All courses",
    "Design",
    "Development",
    "Management",
    "Finance",
  ];

  const filteredCards =
    selectedCategory === "All courses"
      ? cardata
      : cardata
          .filter((card) => card.category === selectedCategory)
          .slice(0, 3);

  return (
    <div className="px-4 sm:px-8 lg:px-28 py-8 sm:py-12 bg-[#EFF6F8] mt-20 sm:mt-28">
      <h2 className="text-xl sm:text-2xl mb-4 text-center sm:text-left">
        Online learning
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-10">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-0 text-center md:text-left">
          Top online courses
        </h3>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 py-2 font-semibold rounded-md transition-colors duration-300
                ${
                  selectedCategory === cat
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((data, index) => (
          <AnimatedCard key={index} data={data} />
        ))}
      </div>

      <div className="mt-8 sm:mt-10 text-center px-4 sm:px-0">
        <p className="inline-block text-xs sm:text-sm text-white font-medium bg-gray-800 rounded-3xl px-8 sm:px-20 py-3 sm:py-5">
          We assist you in finding the ideal tutor at no cost.
          <span className="underline underline-offset-2 cursor-pointer ml-1">
            Browse All Available Courses
          </span>
        </p>
      </div>
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
      className="relative w-full max-w-[400px] sm:max-w-full h-[420px] sm:h-[450px] bg-white rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:scale-105 hover:shadow-2xl mx-auto"
    >
      <div className="relative">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {data.free && (
          <span className="absolute top-36 sm:top-44 right-2 bg-blue-600 text-white text-xs sm:text-sm px-4 sm:px-6 py-3 sm:py-7 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-105">
            Free
          </span>
        )}
      </div>

      <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 relative">
        <div>
          <p className="text-xs sm:text-sm text-gray-500 uppercase">
            {data.title}
          </p>
          <h2 className="text-lg sm:text-2xl font-bold my-1 sm:my-2">
            {data.description}
          </h2>
          <p className="text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            ⭐⭐⭐⭐⭐ {data.rating}
          </p>
          <hr className="border-t border-gray-300 my-1 sm:my-2" />

          <div className="flex justify-between text-gray-700 font-semibold text-sm sm:text-lg py-2 sm:py-3 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
            <p>{data.lessons}</p>
            <div className="border-l border-gray-300 h-4 sm:h-6 mx-2 sm:mx-4"></div>
            <p>{data.enrolled}</p>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <button className="w-full bg-yellow-500 py-2 sm:py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-yellow-400 transition-colors duration-300">
            See All Courses
          </button>
        </div>
      </div>
    </Motion.div>
  );
}

export default CourseCards;
