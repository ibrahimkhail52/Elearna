import React from "react";
import logo from "../../../assets/BlogOne img/navImg/Elearna.svg"

const Footer = () => {
  const footerData = {
    logo: {
      src: logo,
      alt: "Logo",
      description:
        "Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras..",
    },
    sections: [
      {
        title: "Popular Courses",
        links: ["Finance", "Management", "Design", "Web development"],
      },
      {
        title: "Company",
        links: ["About", "Courses", "Blog", "Contact", "License", "Pricing"],
      },
      {
        title: "CMS",
        links: ["Course details", "Instructor details", "Blog details"],
      },
      {
        title: "Need help?",
        links: [
          { label: "Call us", value: "(888) 123 4567" },
          { label: "Need support?", value: "info@example.com" },
        ],
      },
    ],
  };

  const { logo: logoData, sections } = footerData;

  return (
    <footer className="bg-[#0f252a] text-white px-6 py-16 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="md:col-span-1">
          <img src={logoData.src} alt={logoData.alt} className="mb-6" />
          <p className="text-[#7b7c7d] leading-relaxed max-w-xs">
            {logoData.description}
          </p>
        </div>

        {sections.map((section, index) => (
          <div key={index} className="mt-8 md:mt-0">
            <h3 className="font-semibold mb-4 text-xl">{section.title}</h3>
            <ul className="space-y-3 text-[#7b7c7d] text-sm leading-relaxed">
              {section.links.map((link, i) => (
                <li key={i}>
                  {typeof link === "string" ? (
                    <span className="hover:text-white cursor-pointer">
                      {link}
                    </span>
                  ) : (
                    <>
                      <p>{link.label}</p>
                      <p className="text-white font-medium">{link.value}</p>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-16 border-t border-white/20 pt-8 text-[#7b7c7d] text-sm">
        <p>
          DESIGN BY:
          <span className="text-white font-semibold">Radiant Template</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
