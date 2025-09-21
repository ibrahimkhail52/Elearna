import React from "react";
import logo from "../../../assets/BlogOne img/navImg/Elearna.svg";

const HomeFooter = () => {
  const footerData = {
    logo: {
      src: logo,
      alt: "Elearna Logo",
      description:
        "Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.",
    },
    sections: [
      {
        title: "Quick links",
        links: ["Home", "Events", "Career", "Instructor"],
      },
      {
        title: "Popular courses",
        links: ["Finance", "Management", "Design", "Web development"],
      },
      {
        title: "Company",
        links: [
          "About",
          "Courses",
          "Blog",
          "Contact",
          "License",
          "Pricing",
          "404",
        ],
      },
      {
        title: "CMS",
        links: ["Course details", "Instructor details", "Blog details"],
      },
    ],
  };

  const { logo: logoData, sections } = footerData;

  return (
    <footer className="bg-[#0f252a] text-white px-6 py-16 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-10">
        <div className="col-span-1 md:col-span-1 pr-0 md:pr-10 text-center md:text-left">
          <img
            src={logoData.src}
            alt={logoData.alt}
            className="mb-6 w-28 mx-auto md:mx-0"
          />
          <p className="text-[#7b7c7d] leading-relaxed max-w-xs text-base mx-auto md:mx-0">
            {logoData.description}
          </p>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className="mt-0 text-center md:text-left">
            <h3 className="font-semibold text-white text-lg mb-6">
              {section.title}
            </h3>
            <ul className="space-y-3 text-[#7b7c7d] text-sm leading-relaxed">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className={`cursor-pointer hover:text-blue-600 transition-colors duration-300 ${
                    section.title === "CMS" ? "font-semibold" : ""
                  }`}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom line and text */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 items-center text-sm text-[#7b7c7d] select-none">
        <span>
          DESIGN BY <strong className="text-white">RADIANT TEMPLATES</strong>
        </span>
        <span>
          POWERED BY <strong className="text-white">WEBFLOW</strong>
        </span>
      </div>
    </footer>
  );
};

export default HomeFooter;
