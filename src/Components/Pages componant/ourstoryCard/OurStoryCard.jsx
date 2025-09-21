import React from "react";
import { motion as Motion } from "framer-motion";
import circles from "../../../assets/Pages componants img/ourstoryCard/3-circles.svg";
import pen from "../../../assets/Pages componants img/ourstoryCard/Pen.svg";
import mark from "../../../assets/Pages componants img/ourstoryCard/check-mark.svg";
function OurStoryCard() {
  return (
    <Motion.div
      className="flex justify-center my-10 mx-20 rounded-lg text-white gap-40 bg-[#0F252A] py-16"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex gap-6">
        <img src={circles} alt="" />
        <div>
          <h1 className="text-2xl font-semibold">150+ online courses</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="flex gap-6">
        <img src={pen} alt="" />
        <div>
          <h1 className="text-2xl font-semibold">150+ online courses</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="flex gap-6">
        <img src={mark} alt="" />
        <div>
          <h1 className="text-2xl font-semibold">150+ online courses</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </Motion.div>
  );
}

export default OurStoryCard;
