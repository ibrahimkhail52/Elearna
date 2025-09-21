import React from "react";
import girlImg from "../../../assets/Pages componants img/PersonalizedLearning/girl-img.webp";
import videoSrc from "../../../assets/Pages componants img/PersonalizedLearning/card-video.mp4"; 
import circle from "../../../assets/Pages componants img/PersonalizedLearning/Blank-cercle.svg"

export default function PersonalizedLearning() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center mt-20 gap-24 px-6 lg:px-20 py-12 bg-white">
      {/* Left Side */}
      <div className="relative flex items-center gap-6">
        {/* Yellow Shape */}
        <div className="absolute -top-10 left-14 w-40 h-40 bg-yellow-500 rounded-full z-0"></div>

        {/* Circle Shape Behind Video */}
        <img
          src={circle}
          alt=""
          className="absolute -bottom-6 left-10 w-64 z-0"
        />

        {/* Video */}
        <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-48 h-60 object-cover"
          ></video>
        </div>

        {/* Image */}
        <div className=" rounded-sm overflow-hidden shadow-lg z-10">
          <img
            src={girlImg}
            alt="Learning"
            className="w-72 h-[24rem] object-cover"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 max-w-lg">
        <p className="text-sm font-semibold text-gray-500 tracking-wide">
          WHAT WE OFFER
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
          Personalized learning for your ambitions
        </h2>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
          mus. Vitae diam dolor lacus amet integer ut.
        </p>

        <div className="grid grid-cols-2 gap-y-2 mt-6 text-gray-900 font-medium">
          <p>• Skill-based instruction</p>
          <p>• Analytics and insights</p>
          <p>• Global certification</p>
          <p>• Customizable courses</p>
        </div>

        <div className="mt-8 bg-[#EFF6F8] p-5 rounded-lg flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">Still have questions?</p>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet conse
            </p>
            <p className="text-gray-500 text-sm">
              ipsum blandit etiam aliquam.
            </p>
          </div>
          <button className="bg-gray-900 text-white px-5 py-3  w-40 rounded-md hover:bg-gray-800">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
