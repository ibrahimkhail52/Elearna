import React from "react";
import webDesign from "../../../assets/Home1 img/Leading/Creative-web-design.svg";
import finance from "../../../assets/Home1 img/Leading/Finance-accounting.svg";
import it from "../../../assets/Home1 img/Leading/IT-and-software.svg";
import digital from "../../../assets/Home1 img/Leading/Digital-marketing.svg";
import webDev from "../../../assets/Home1 img/Leading/Web-development.svg";
import content from "../../../assets/Home1 img/Leading/Content-writing.svg";

function Leading() {
  const categories = [
    {
      img: webDesign,
      title: "Creative web design",
      courses: "8 Courses",
    },
    {
      img: finance,
      title: "Finance accounting",
      courses: "10 Courses",
    },
    { img: it, title: "IT and software", courses: "5 Courses" },
    { img: digital, title: "Digital marketing", courses: "4 Courses" },
    { img: webDev, title: "Web development", courses: "8 Courses" },
    { img: content, title: "Content writing", courses: "3 Courses" },
  ];

  return (
    <div className="text-center mt-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <p className="text-gray-700 font-bold">Top Categories</p>
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
        Discover leading categories to
      </h1>
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-12">
        elevate your journey
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 justify-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="h-56 p-6 flex flex-col justify-center items-center text-center border-2 border-gray-200 rounded-md transition-all duration-300 hover:border-transparent hover:rounded-none custom-shadow"
          >
            <img
              src={item.img}
              alt={item.title}
              className="mx-auto bg-[#EFF6F8] p-5 rounded-full"
            />
            <h1 className="text-lg font-bold mt-2">{item.title}</h1>
            <span className="text-sm text-gray-500">{item.courses}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leading;
