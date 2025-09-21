import React from "react";
import book from "../../../assets/BlogOne img/Professionaljourney/Book.svg";
import save from "../../../assets/BlogOne img/Professionaljourney/Saving.svg";
import flexible from "../../../assets/BlogOne img/Professionaljourney/Flexible-course.svg";
import certificate from "../../../assets/BlogOne img/Professionaljourney/certificate.svg";

function Professionaljourney() {
  return (
    <div className="px-6 sm:px-12 lg:px-24 py-12 bg-[#e5f3f8]">
      <div className="text-center max-w-3xl mx-auto leading-relaxed space-y-2">
        <p className="text-gray-800 font-medium text-lg">Why we are</p>
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Elevate your professional journey
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
          mus. Vitae diam dolor lacus amet integer ut.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {[
          { img: book, title: "Learn anything" },
          { img: save, title: "Save time" },
          { img: flexible, title: "Flexible courses" },
          { img: certificate, title: "Earn certificates" },
        ].map(({ img, title }, idx) => (
          <div key={idx} className="flex flex-col items-center px-4">
            <img
              src={img}
              alt={title}
              className="mb-4 w-20 h-20 sm:w-24 sm:h-24"
            />
            <h2 className="text-lg font-semibold leading-snug mb-2">{title}</h2>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Lorem ipsum dolor sit amet conse non quis id viverra id proin.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Professionaljourney;
