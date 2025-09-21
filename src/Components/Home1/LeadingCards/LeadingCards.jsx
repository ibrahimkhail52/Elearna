import React from "react";
import cardBg from "../../../assets/Home1 img/LeadingCards/first-card-bg.webp";
import cardVideo from "../../../assets/Home1 img/LeadingCards/second-card-bg-video.mp4";
import callIcon from "../../../assets/Home1 img/LeadingCards/Video-call.svg";

function LeadingCards() {
  return (
    <div className="flex flex-col mt-20 md:flex-row gap-6 p-6 justify-center max-w-7xl mx-auto">
      <div
        className="relative w-full md:w-5/12 h-64 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg p-6 flex flex-col justify-center"
        style={{ backgroundImage: `url(${cardBg})` }}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg leading-tight text-black">
          <span className="block">Quick access to the</span>
          <span className="block">popular courses</span>
        </h1>
        <button
          className="bg-[#FFB606] py-3 px-6 w-36 font-thin rounded-md
          transition-transform duration-200 hover:scale-95 active:scale-90"
        >
          View Courses
        </button>
      </div>

      <div className="w-full md:w-5/12 h-64 bg-[#F0F0E8] rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-1 flex flex-col justify-center text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-2xl font-bold mb-2">
            Develop your skills online!
          </h1>
          <button
            className="bg-[#0F252A] text-white py-3 px-6 w-36 font-thin
            rounded-md transition-transform duration-200 hover:scale-95 active:scale-90 mx-auto sm:mx-0"
          >
            Apply Now
          </button>
        </div>
        <div className="relative w-full sm:w-80 h-48 rounded-lg overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            src={cardVideo}
            type="video/mp4"
          />

          <div className="absolute bottom-2 left-2 flex justify-center items-center w-full">
            <img
              src={callIcon}
              alt="Call"
              className="w-36 h-8 p-1 rounded-full shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadingCards;
