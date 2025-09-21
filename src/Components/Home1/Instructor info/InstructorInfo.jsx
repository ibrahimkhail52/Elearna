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
    <div>
      <div className="bg-[#EFF6F8] h-[37rem] text-center">
        <div
          className={`w-[74rem] relative left-[13rem] top-40 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={icon} alt="" className="relative left-[31rem] bottom-10" />
          <p className="text-2xl ">{current.text}</p>
          <h1 className="text-2xl mt-10">{current.name}</h1>
          <span className="leading-10 text-gray-400">{current.title}</span>

          {/* Arrows */}
          <div className="flex gap-6 justify-center mt-10">
            <button
              onClick={() => changeSlide("prev")}
              className="bg-white p-3 rounded-full shadow hover:bg-gray-100"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={() => changeSlide("next")}
              className="bg-white p-3 rounded-full shadow hover:bg-gray-100"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorInfo;
