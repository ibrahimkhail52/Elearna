import React from "react";

const Startjourney = () => {
  return (
    <>
      <div className="bg-[#e5f3f8] py-10">
        <div className="relative">
          <section className="flex justify-center px-6">
            <div
              className="bg-[#FFB800] w-full max-w-4xl py-12 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between
                         rounded-md shadow-lg
                         relative
                         z-20
                         -mb-24"
            >
              <h2 className="text-[24px] sm:text-[28px] leading-snug font-semibold text-[#0A1A1F] mb-6 md:mb-0 text-center md:text-left">
                Are you ready to start <br /> your journey?
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <button className="bg-[#0A1A1F] text-white px-8 py-3 rounded-md font-semibold transition-transform duration-200 ease-in-out hover:scale-90 w-full sm:w-auto text-center">
                  Browse Courses
                </button>

                <button className="border border-[#0A1A1F] text-[#0A1A1F] px-8 py-3 rounded-md font-semibold transition-transform duration-200 ease-in-out hover:scale-90 w-full sm:w-auto text-center">
                  Become A Teacher
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Startjourney;
