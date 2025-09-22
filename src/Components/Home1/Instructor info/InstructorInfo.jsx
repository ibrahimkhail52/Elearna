import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import icon from "../../../assets/Pages componants img/Instructor Info/cammo-icon.svg";

function InstructorInfo() {
  const instructors = [
    {
      text: `“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus
      tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus
      venenatis donec mattis. Morbi placerat eleifend malesuada sed semper
      quis.”`,
      name: "Linda Grady",
      title: "CO-ASSISTANT MANAGER",
    },
    {
      text: `"Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor
      ut nibh montes ante gravida velit. Facilisi posuere in sed mattis
      blandit duis aliquet. Molestie faucibus nibh felis tempor vel
      aliquet cursus placerat duis."`,
      name: "Jim Adams",
      title: "DESIGNER",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (direction) => {
    setFade(false); // start fade out
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return prev === instructors.length - 1 ? 0 : prev + 1;
        } else {
          return prev === 0 ? instructors.length - 1 : prev - 1;
        }
      });
      setFade(true); // fade in
    }, 300);
  };

  const current = instructors[currentIndex];

  return (
    <div className="bg-[#EFF6F8] py-16 px-4 sm:px-8 md:px-12 lg:px-20 flex items-center justify-center">
      <div
        className={`max-w-5xl w-full text-center transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Icon */}
        <img src={icon} alt="" className="mx-auto mb-6 w-10 sm:w-12 md:w-14" />

        {/* Quote */}
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700">
          {current.text}
        </p>

        {/* Name & Title */}
        <h1 className="text-xl sm:text-2xl font-semibold mt-8 text-gray-900">
          {current.name}
        </h1>
        <span className="block mt-2 text-gray-500 text-sm sm:text-base">
          {current.title}
        </span>

        {/* Arrows */}
        <div className="flex gap-6 justify-center mt-10">
          <button
            onClick={() => changeSlide("prev")}
            className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => changeSlide("next")}
            className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstructorInfo;
