import React from "react";
import CreateAccountForm from "../CreateAccount/CreateAccountForm";
import imageSrc from "../../../assets/Contact img/Contact Us/sign.svg";

export default function ContactUs() {
  return (
      <div className="min-h-screen  flex flex-col lg:flex-row bg-gray-50">
        {/* Left side - image and text */}
        <div className="lg:w-1/2  flex relative bottom-40 flex-col justify-center p-8 sm:p-16">
          <p className="text-sm text-gray-500 uppercase mb-2">Contact Us</p>
          <h2 className="text-4xl font-bold mb-4">
            Are you interested in online learning? Contact us
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id purus suspendisse. Imperdiet nam lorem tempus in. Tristique
            nullam risus semper habitant urna nisl nam elit at.
          </p>
          <div>
            <img
              src={imageSrc}
              alt="Instructor"
              className="w-36 h-10 rounded-full"
            />
            <p className="text-lg font-semibold">Brayden Backham</p>
            <p className="text-gray-500 text-sm">Director</p>
          </div>
        </div>

        {/* Right side - form */}
        <div className=" lg:w-1/2 flex justify-center items-center p-6 sm:p-12">
          <CreateAccountForm />
        </div>
      </div>
  );
}
