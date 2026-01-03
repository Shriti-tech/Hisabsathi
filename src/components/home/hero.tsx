import { Star } from "lucide-react";
import IndustryLeadersSection from "./marquee";

const HeroSection = () => {
  return (
    <div className="flex flex-col bg-background min-h-screen  justify-center items-center ">
      <div className="  px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8  ">
              {/* Heading */}
              <div className="space-y-5 ">
                <h1 className="text-84   mb-4 font-instrument leading-tight">
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

                <p className=" text-24 font-outfit font-light leading-relaxed pt-2">
                  Fast, simple, and easy to use — manage your daily billing and
                  accounts smoothly with our software in just few seconds.
                </p>
              </div>

              {/* Input and Button */}
              <div className="max-w-xl ">
                <div className="flex flex-col sm:flex-row gap-2 p-2 border-2 border-inputBorder rounded-lg bg-white">
                  <input
                    type="text"
                    placeholder="Enter mobile / email"
                    className="flex-1 px-4 py-3 bg-transparent text-input font-outfit focus:outline-none placeholder:text-textgray"
                  />
                  <button className="font-outfit px-6 py-3 bg-primary rounded-md text-white hover:bg-opacity-90 transition-all whitespace-nowrap shadow-sm">
                    Book a demo
                  </button>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-3 flex-wrap ">
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 sm:w-7 sm:h-7 fill-star text-star"
                    />
                  ))}
                  {/* Half Star */}
                  <div className="relative">
                    <Star className="w-6 h-6 sm:w-7 sm:h-7 text-star" />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: "50%" }}
                    >
                      <Star className="w-6 h-6 sm:w-7 sm:h-7 fill-star text-star" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2  justify-center items-center">
                  <span className=" font-outfit font-bold text-lg ">4.5</span>
                  <span className="font-outfit">Average user rating</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl">
                <img
                  src="/homeImages/hero-image.png"
                  alt="Billing software illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Leaders Section */}
      <div className="mt-7">
        <div className="max-w-7xl mx-auto">
          <IndustryLeadersSection />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
