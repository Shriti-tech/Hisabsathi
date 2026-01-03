import React from "react";
import laptopImage from "/homeImages/picture1.svg";
import { Star } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className=" w-full h-full bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row min-h-[96vh]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl font-ins text-gray-900 mb-6 font-instrument leading-tight">
                Making billing{" "}
                <span className="relative inline-block italic">
                  easier
                  <img
                    src="/homeImages/underline.svg"
                    alt=""
                    className="absolute -bottom-2 left-0 w-full h-auto"
                  />
                </span>
              </h1>

              <p className="text-[24px] font-outfit font-light ">
                Fast, simple, and easy to use — manage your daily billing and
                accounts smoothly with our software in just few seconds.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-[10px] border border-gray-200 p-2">
              <input
                type="text"
                placeholder="Enter mobile / email"
                className="flex-1 px-6 py-4 text-gray-400 bg-transparent focus:outline-none focus:border-blue-500"
              />
              <button className="px-8 py-4 text-white bg-blue-600 rounded-[10px] hover:bg-blue-700 font-medium">
                Book a demo
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 fill-yellow-400 text-yellow-400"
                  />
                ))}
                {/* Half Star */}
                <div className="relative">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: "50%" }}
                  >
                    <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
              <span className="text-2xl font-bold font-outfit">4.5</span>
              <span className=" font-outfit">Average user rating</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={laptopImage}
              alt="Billing software illustration"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
