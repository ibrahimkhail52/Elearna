import React, { useState, useEffect } from "react";
import image1 from "../../../assets/BlogOne img/Testimonial/testimonial-man.avif";
import image2 from "../../../assets/BlogOne img/Testimonial/testimonial-women.avif";

export default function Testimonial() {
  const testimonials = [
    {
      image: image1,
      text: `"Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus
        tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus
        venenatis donec mattis. Morbi placerat eleifend malesuada sed semper
        quis."`,
      name: "Linda Grady",
      position: "Co-assistant manager",
    },
    {
      image: image2,
      text: `"I had an excellent experience. The teaching methods are modern and effective. Highly recommend to anyone looking to upgrade their career."`,
      name: "James Brown",
      position: "Tech Consultant",
    },
  ];

  const [index, setIndex] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 300);
  };

  const formatCompact = (value, type = "M") => {
    const rounded =
      type === "M" ? Math.floor(value / 1_000_000) : Math.floor(value / 1_000);
    return `${rounded}${type}`;
  };

  useEffect(() => {
    const studentTarget = 70_000_000;
    const jobTarget = 25_000;
    const studentStep = 10_000_000;
    const jobStep = 10_000;

    const interval = setInterval(() => {
      setStudentsCount((prev) => {
        const next = prev + studentStep;
        return next >= studentTarget ? studentTarget : next;
      });
      setJobsCount((prev) => {
        const next = prev + jobStep;
        return next >= jobTarget ? jobTarget : next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <div className="w-full bg-[#171f17] px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <h3 className="text-sm md:text-base font-semibold text-white">
            Our Testimonials
          </h3>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 leading-snug">
            Trusted by our
            <br className="hidden sm:block" />
            successful students
          </h1>
        </div>
      </div>

      <div
        className={`mt-12 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 max-w-7xl mx-auto transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
          <img
            src={current.image}
            alt="Testimonial"
            className="w-full h-full rounded-lg object-cover shadow-lg"
          />
        </div>

        <div className="w-full lg:w-[30rem] text-white px-2 sm:px-6 lg:px-0">
          <div className="flex flex-col sm:flex-row gap-6 mb-6 justify-start text-white">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold">
                {formatCompact(studentsCount, "M")}
              </h2>
              <div className="border-l-2 h-10 border-gray-600 mx-2" />
              <div className="text-xs sm:text-sm text-gray-400 leading-tight">
                <p>SUCCESSFUL</p>
                <p>STUDENTS</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold">
                {formatCompact(jobsCount, "K")}
              </h2>
              <div className="border-l-2 h-10 border-gray-600 mx-2" />
              <div className="text-xs sm:text-sm text-gray-400 leading-tight">
                <p>GLOBAL JOB</p>
                <p>PLACEMENTS</p>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {current.text}
          </p>

          <h3 className="mt-6 text-lg font-semibold">{current.name}</h3>
          <p className="text-sm text-gray-400">{current.position}</p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-white rounded-full hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-white rounded-full hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
