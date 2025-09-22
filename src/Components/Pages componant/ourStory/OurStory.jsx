import React from "react";
import CountUp from "react-countup";
import { motion as Motion } from "framer-motion";
import girlboy from "../../../assets/Pages componants img/HeroSection/Girl-boy-study.webp";
import enroll from "../../../assets/Pages componants img/HeroSection/Enrolled-students.avif";
import { useInView } from "react-intersection-observer";

export default function OurStory() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative text-white overflow-visible py-12 lg:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28 flex flex-col lg:flex-row items-center lg:gap-16">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          {/* Girlboy image animation */}
          <Motion.img
            src={girlboy}
            alt="Main"
            className="rounded-sm shadow-slate-600 shadow-2xl w-full max-w-md lg:max-w-none h-auto relative z-10"
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Small badge animation */}
          <Motion.div
            className="absolute -bottom-10 sm:-bottom-14 md:-bottom-16 right-4 sm:right-12 md:right-20 lg:-bottom-16 lg:left-72 z-20"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <img
              src={enroll}
              alt="Student"
              className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 rounded-3xl"
            />
          </Motion.div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-left leading-7">
          <p className="uppercase text-sm tracking-wider text-gray-800">
            Our Story
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 lg:text-5xl">
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
            className="mt-8 flex flex-wrap gap-6 sm:gap-10 divide-x divide-gray-300 text-center lg:text-left"
          >
            <div className="px-2">
              <p className="text-4xl sm:text-5xl font-bold text-gray-900">
                {inView && <CountUp end={1.5} decimals={1} duration={2} />}K
              </p>
              <p className="text-gray-500 text-sm">Finish Seasons</p>
            </div>
            <div className="px-2">
              <p className="text-4xl sm:text-5xl font-bold text-gray-900">
                {inView && <CountUp end={7.8} decimals={1} duration={2} />}K
              </p>
              <p className="text-gray-500 text-sm">Enrolled</p>
            </div>
            <div className="px-2">
              <p className="text-4xl sm:text-5xl font-bold text-gray-900">
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
