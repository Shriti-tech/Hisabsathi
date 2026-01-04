import { Star } from "lucide-react";
import { useState } from "react";
import useMobile from "@/hooks/useMobile";
const HeroSection = () => {
  const [isFocused, setIsFocused] = useState(false);
  const isMobile = useMobile();
  if (isMobile === null) {
    return null;
  }
  return (
    <div className="flex flex-col  bg-background   mt-20 h-auto justify-center items-center px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="w-full max-w-7xl   ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center   ">
          <div className="flex flex-col gap-6 sm:gap-8 ">
            <div className="space-y-4 sm:space-y-6">
              <h1
                className={`${
                  isMobile
                    ? "text-4xl sm:text-5xl"
                    : "text-6xl lg:text-7xl xl:text-80"
                } font-instrument leading-tight`}
              >
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

              <p
                className={`${
                  isMobile ? "text-base sm:text-lg" : "text-lg lg:text-24 "
                } font-outfit font-light leading-relaxed`}
              >
                Fast, simple, and easy to use — manage your daily billing and
                accounts smoothly with our software in just few seconds.
              </p>
            </div>

            {/* Input and Button */}
            <div className="w-full max-w-xl">
              <div
                className={`flex ${
                  isMobile ? "flex-col gap-1" : "flex-row gap-2"
                } border-2 ${
                  isFocused ? "border-inputBorder" : "border-inputBorder"
                } rounded-lg p-1 shadow transition-colors`}
              >
                <input
                  type="text"
                  placeholder="Enter mobile / email"
                  className={`${
                    isMobile ? "w-full" : "flex-1"
                  } px-3 py-1  bg-transparent text-input placeholder:text-textgray placeholder:font-outfit placeholder:font-light outline-none text-sm sm:text-base`}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <button
                  className={`font-outfit py-2 px-2 bg-primary rounded-md text-white ${
                    isMobile ? "text-sm" : "text-16 "
                  } shadow-md whitespace-nowrap`}
                >
                  Book a demo
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className={`${
                      isMobile ? "w-5 h-5" : "w-6 h-6 lg:w-7 lg:h-7"
                    } fill-star text-star`}
                  />
                ))}
                {/* Half Star */}
                <div className="relative">
                  <Star
                    className={`${
                      isMobile ? "w-5 h-5" : "w-6 h-6 lg:w-7 lg:h-7"
                    } text-star`}
                  />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: "50%" }}
                  >
                    <Star
                      className={`${
                        isMobile ? "w-5 h-5" : "w-6 h-6 lg:w-7 lg:h-7"
                      } fill-star text-star`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`font-outfit font-bold ${
                    isMobile ? "text-lg" : "text-3xl"
                  }`}
                >
                  4.5
                </span>
                <span
                  className={`font-outfit ${isMobile ? "text-sm" : "text-xl"}`}
                >
                  Average user rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center ">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img
                src="/homeImages/hero-image.png"
                alt="Billing software illustration"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
