import React from "react";
import girl from "../../../assets/Pages componants img/Instructor/girl-and-boys.webp";
import boyGirl from "../../../assets/Pages componants img/Instructor/Girl-with-yellow-bg.webp";

function Instructor() {
  return (
    <div className="flex justify-center items-center gap-32  mt-20 ">
      <div className="leading-7">
        <h1 className="text-5xl font-semibold text-right ">
          Became an instructor
        </h1>
        <p className=" w-[40rem] text-right text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Sed ultricies fames
          scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est
          nec commodo orci dictum in. Lorem consectetur donec purus sagittis.
        </p>
        <div className="text-right mt-5">
          <button className="bg-gray-900 text-white px-5 py-3  w-52 rounded-md hover:bg-gray-800">
            Start teaching today
          </button>
        </div>
      </div>
      <div className="">
        <img
          src={girl}
          alt=""
          className="relative top-44 shadow-2xl shadow-black right-10 rounded-full w-48"
        />
        <img src={boyGirl} alt="" className="w-96" />
      </div>
    </div>
  );
}

export default Instructor;
