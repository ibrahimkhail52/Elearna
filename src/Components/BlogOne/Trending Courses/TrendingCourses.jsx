import React from "react";
import st1 from "../../../assets/BlogOne img/Trending Courses/development.webp";
import st2 from "../../../assets/BlogOne img/Trending Courses/developmen2.webp";
import st3 from "../../../assets/BlogOne img/Trending Courses/managment.webp";
import st4 from "../../../assets/BlogOne img/Trending Courses/development3.webp";
import {
  FaStar,
  FaPencilAlt,
  FaCalculator,
  FaLaptopCode,
  FaBullhorn,
} from "react-icons/fa";


export default function TrendingCourses() {

  const courses = [
    {
      name: "Management",
      image: st1,
      desc: "Crisis management and problem-solving strategies",
      review: "4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enroll: "8k Enrolled",
      price: "free",
      hoverTitle: "Building single page applications with angular",
      hoverLessons: "6 Lessons",
      hoverEnrolled: "12k Enrolled",
      hoverDesc:
        "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
    },
    {
      name: "Design",
      image: st2,
      desc: "Advanced Photoshop techniques for designers",
      review: "5.00",
      reviews: "1.2k",
      lessons: "8 Lessons",
      enroll: "25k Enrolled",
      price: "$200",
      hoverTitle: "Building single page applications with angular",
      hoverLessons: "6 Lessons",
      hoverEnrolled: "12k Enrolled",
      hoverDesc:
        "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
    },
    {
      name: "Finance",
      image: st3,
      desc: "Operations management and process improvement",
      review: "5.00",
      reviews: "812",
      lessons: "12 Lessons",
      enroll: "28k Enrolled",
      price: "$140",
      hoverTitle: "Building single page applications with angular",
      hoverLessons: "6 Lessons",
      hoverEnrolled: "12k Enrolled",
      hoverDesc:
        "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
    },
    {
      name: "Coding",
      image: st4,
      desc: "Full-stack web development fundamentals",
      review: "4.92",
      reviews: "930",
      lessons: "10 Lessons",
      enroll: "18k Enrolled",
      price: "$320",
      hoverTitle: "Building single page applications with angular",
      hoverLessons: "6 Lessons",
      hoverEnrolled: "12k Enrolled",
      hoverDesc:
        "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
    },
  ];

  return (
    <div className="w-full flex flex-col p-4 md:p-8 bg-[#e5f3f8]">
      <div className="w-full text-center mb-8 md:mb-10">
        <h1 className="text-sm text-gray-600">TRENDING COURSES</h1>
        <p className="text-xl md:text-2xl font-bold mt-1">
          Explore our top programs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative bg-white w-full rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-40 sm:h-52 object-cover"
              />
              <span className="w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center absolute top-2 right-2 sm:top-4 sm:right-4 bg-blue-600 text-white text-xs sm:text-base font-bold px-1 sm:px-3 py-1 rounded-full">
                {course.price}
              </span>
            </div>

            <div className="p-4 sm:p-5">
              <p className="text-xs sm:text-sm text-gray-500 font-medium mb-1 uppercase">
                {course.name}
              </p>
              <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {course.desc}
              </h2>
              <div className="flex items-center gap-1 sm:gap-2 text-yellow-500 text-xs sm:text-sm">
                <FaStar className="text-xs sm:text-sm" />
                <span className="text-gray-700 font-medium">
                  {course.review}
                </span>
                <span className="text-gray-400">({course.reviews})</span>
              </div>
            </div>


            <div className="absolute left-14 inset-0 bg-white p-4 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold mb-2">{course.hoverTitle}</h3>
              <p className="text-sm mb-3">{course.desc}</p>
              <p className="text-xs">
                {course.hoverLessons} • {course.hoverEnrolled}
              </p>
              <button className="mt-10 px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition">
                View Details
              </button>
              <button className="mt-4 px-4 py-2 bg-black text-gray-300 font-semibold rounded transition">
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
