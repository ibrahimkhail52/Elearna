import React from "react";
import girl from "../../../assets/Pages componants img/Instructor/girl-and-boys.webp";
import boyGirl from "../../../assets/Pages componants img/Instructor/Girl-with-yellow-bg.webp";

function Instructor() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-12 lg:gap-32 mt-20 px-6 md:px-12 lg:px-20">
      {/* Left Content */}
      <div className="leading-7 text-center lg:text-right">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Became an instructor
        </h1>
        <p className="mt-4 max-w-md sm:max-w-lg lg:max-w-xl text-gray-600 mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet consectetur. Sed ultricies fames
          scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est
          nec commodo orci dictum in. Lorem consectetur donec purus sagittis.
        </p>
        <div className="mt-6">
          <button className="bg-gray-900 text-white px-6 py-3 w-full sm:w-60 rounded-md hover:bg-gray-800 transition">
            Start teaching today
          </button>
        </div>
      </div>

      {/* Right Images */}
      <div className="relative flex justify-center lg:justify-end">
        <img
          src={girl}
          alt="student"
          className="absolute -top-10 sm:-top-16 lg:top-28 -left-6 sm:-left-10 lg:-left-12 w-28 sm:w-36 lg:w-48 rounded-full shadow-2xl shadow-black"
        />
        <img
          src={boyGirl}
          alt="instructor background"
          className="w-64 sm:w-80 lg:w-96 rounded-lg"
        />
      </div>
    </div>
  );
}

export default Instructor;
