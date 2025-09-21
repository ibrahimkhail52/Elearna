import React from "react";
import free from "../../../assets/Home1 img/Free courses/Free Course.avif";
import man from "../../../assets/Home1 img/Free courses/Man Image Holding Graph.webp";
import woman from "../../../assets/Home1 img/Free courses/Woman Image Holding Copy.webp";

const LearningSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-16 md:gap-32 p-6 md:p-20 bg-white mt-40 max-w-7xl mx-auto">
      <div className="relative flex gap-6 md:gap-10 order-2 md:order-1">
        <div className="relative z-10 md:-translate-y-12">
          <img
            src={man}
            alt="Man learning online"
            className="w-48 sm:w-64 md:w-72 object-cover rounded-md shadow-md"
          />
        </div>

        <div className="relative w-48 sm:w-64 md:w-72 rounded-md shadow-md overflow-hidden">
          <img
            src={woman}
            alt="Woman learning online"
            className="w-full h-full object-cover"
          />
          <img
            src={free}
            alt="Free courses"
            className="absolute top-4 right-2 sm:top-6 sm:right-6 w-20 sm:w-32"
          />
        </div>
      </div>

      <div className="max-w-lg order-1 md:order-2 text-center md:text-left">
        <h3 className="text-sm text-gray-500 tracking-wide">WHAT WE OFFER</h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mt-2 mb-4">
          Personalized learning for your ambitions
        </h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
          mus. Vitae diam dolor lacus amet integer ut.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-gray-800 mb-10 text-lg leading-8 list-disc list-inside">
          <li>
            <strong>Skill-based instruction</strong>
          </li>
          <li>
            <strong>Global certification</strong>
          </li>
          <li>
            <strong>Analytics and insights</strong>
          </li>
          <li>
            <strong>Customizable courses</strong>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row p-6 bg-gray-100 rounded-lg justify-between items-center gap-6 w-full">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Still have questions?
            </h2>
            <p className="text-sm text-gray-600 mb-0 max-w-xs">
              Lorem ipsum dolor sit amet consectetur blandit etiam aliquam.
            </p>
          </div>
          <button className="bg-black rounded-md text-white py-3 px-5 w-full sm:w-56 font-medium hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
