import React from "react";
import CountUp from "react-countup";
import { motion as Motion } from "framer-motion";
import girlboy from "../../../assets/Pages componants img/HeroSection/Girl-boy-study.webp";
import enroll from "../../../assets/Pages componants img/HeroSection/Enrolled-students.avif";
import { useInView } from "react-intersection-observer";

export default function OurStory() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative text-white overflow-visible">
      <div className="relative container mx-auto px-40 lg:flex lg:items-center lg:gap-20 bottom-20">
        {/* Left Image */}
        <div className="relative lg:w-1/2 flex justify-center">
          {/* Girlboy image animation */}
          <Motion.img
            src={girlboy}
            alt="Main"
            className="rounded-sm shadow-slate-600 shadow-2xl h-full relative z-10"
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Small badge animation */}
          <Motion.div
            className="absolute -bottom-16 left-72 z-20"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <img src={enroll} alt="Student" className="w-56 h-36 rounded-3xl" />
          </Motion.div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 lg:mt-0 text-left leading-7 -my-36">
          <p className="uppercase text-sm tracking-wider text-gray-800">
            Our Story
          </p>
          <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Limitless learning and get more possibilities
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in
            maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula
            eget malesuada ullamcorper nibh. Etiam suspendisse pretium est
            elementum elementum rhoncus.
          </p>

          {/* Counters */}
          <div
            ref={ref}
            className="mt-8 flex flex-wrap gap-2 divide-x divide-gray-300 text-center lg:text-left"
          >
            <div className="px-2">
              <p className="text-5xl font-bold text-gray-900">
                {inView && <CountUp end={1.5} decimals={1} duration={2} />}K
              </p>
              <p className="text-gray-500 text-sm">Finish Seasons</p>
            </div>
            <div className="px-2">
              <p className="text-5xl font-bold text-gray-900">
                {inView && <CountUp end={7.8} decimals={1} duration={2} />}K
              </p>
              <p className="text-gray-500 text-sm">Enrolled</p>
            </div>
            <div className="px-2">
              <p className="text-5xl font-bold text-gray-900">
                {inView && <CountUp end={100} duration={2} />}%
              </p>
              <p className="text-gray-500 text-sm">Job Placement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
