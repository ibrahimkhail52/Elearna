import React from "react";
import home from "../../../assets/Contact img/ContactDetails/Home.svg";
import notebook from "../../../assets/Contact img/ContactDetails/notebook.svg";
import clock from "../../../assets/Contact img/ContactDetails/Clock.svg";

export default function ContactDetails() {
  return (
    <div className="relative bottom-36">
      <p className="text-center mb-5">CONTACT DETAILS</p>
      <h1 className="text-center mb-10 font-semibold text-5xl">
        Find our location
      </h1>
      <div className="flex justify-center gap-32">
        <div className="flex gap-4 w-64 ">
          <img src={home} alt="" className="h-10" />
          <div>
            <h1 className="leading-7 text-1xl font-semibold">Area location</h1>
            <span className="text-gray-400 text-sm">
              410 Sandtown, California 94001, USA
            </span>
          </div>
        </div>
        <div className="border border-r"></div>
        <div className="flex gap-4 w-64 ">
          <img src={notebook} alt="" className="h-10" />
          <div>
            <h1 className="leading-7 text-1xl font-semibold">Area location</h1>
            <span className="text-gray-400 text-sm">
              888-123-4567 info@example.com
            </span>
          </div>
        </div>
        <div className="border border-r"></div>
        <div className="flex gap-4 w-64 ">
          <img src={clock} alt="" className="h-10" />
          <div>
            <h1 className="leading-7 text-1xl font-semibold">Area location</h1>
            <span className="text-gray-400 text-sm">
              410 Sandtown, California 94001, USA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
