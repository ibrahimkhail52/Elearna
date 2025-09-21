import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

function GreaterSuccess() {
  const cards = [
    {
      id: "01",
      title: "Flexibility and convenience",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    },
    {
      id: "02",
      title: "Flexibility and convenience",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    },
    {
      id: "03",
      title: "Flexibility and convenience",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    },
    {
      id: "04",
      title: "Flexibility and convenience",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    },
  ];

  // Track which card is hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9, height: 256 },
    animate: { opacity: 1, scale: 1, height: 256 },
    hover: { scale: 1.05, height: 320 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, pointerEvents: "auto" },
  };

  return (
    <div>
      <div className="text-center mb-12">
        <p>Why we are</p>
        <h1>We believe in our good education and development </h1>
        <h1>system and we know how to work together to reach</h1>
        <h1>greater success</h1>
      </div>
      <div className="flex justify-center items-start gap-10 flex-wrap">
        {cards.map(({ id, title, description }) => (
          <Motion.div
            key={id}
            className="w-80 leading-9 shadow-2xl shadow-gray-300 p-7 relative rounded-lg bg-white cursor-pointer flex flex-col"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.4, ease: "easeOut" }}
            onMouseEnter={() => setHoveredCard(id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <span className="text-blue-800 font-semibold text-2xl">{id}</span>
            <h1 className="font-semibold text-2xl mt-2">{title}</h1>
            <p className="leading-7 text-gray-500 mt-2 flex-grow">
              {description}
            </p>

            <Motion.button
              variants={buttonVariants}
              initial="hidden"
              animate={hoveredCard === id ? "visible" : "hidden"}
              transition={{ duration: 0.3 }}
              className="mt-6 bg-[#0F252A] text-white px-10 py-1 rounded-md self-start"
            >
              GetStart
            </Motion.button>
          </Motion.div>
        ))}
      </div>
    </div>
  );
}

export default GreaterSuccess;
