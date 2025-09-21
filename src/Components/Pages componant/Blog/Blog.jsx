import React from "react";
import background from "../../assets/footer/blog-bg-img.webp";

function Blog() {
  return (
    <div
      className="relative w-full h-[350px] flex flex-col md:flex-row bg-cover bg-center mt-10 px-6 md:px-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col justify-center md:justify-center md:items-start w-full md:w-1/2">
        <h2 className="text-white text-3xl sm:text-4xl font-bold max-w-md mb-6">
          Are you ready to start your journey?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="border border-white text-xl text-white px-4 py-2 rounded-md transition-transform duration-200 hover:scale-95 active:scale-90 max-w-xs">
            Browse Courses
          </button>
          <button className="bg-[#ffb606] text-xl text-black px-6 py-2 rounded-md transition-transform duration-200 hover:scale-95 active:scale-90 max-w-xs">
            Become an Instructor
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
