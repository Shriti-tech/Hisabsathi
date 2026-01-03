import { Star } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="flex flex-col  bg-background min-h-screen justify-center items-center ">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h1 className="text-80 font-instrument leading-tight">
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

              <p className="text-24 font-outfit font-light leading-relaxed">
                Fast, simple, and easy to use — manage your daily billing and
                accounts smoothly with our software in just few seconds.
              </p>
            </div>

            {/* Input and Button */}
            <div className="w-full max-w-xl">
              <div className="flex flex-row gap-2 border-2 border-inputBorder rounded-lg p-1 shadow">
                <input
                  type="text"
                  placeholder="Enter mobile / email"
                  className="flex-1 px-3 bg-transparent text-input placeholder:text-textgray placeholder:font-outfit placeholder:font-light"
                />
                <button className="font-outfit px-4 py-2 bg-primary rounded-md text-white text-base shadow-md whitespace-nowrap">
                  Book a demo
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-star text-star" />
                ))}
                {/* Half Star */}
                <div className="relative">
                  <Star className="w-7 h-7 text-star" />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: "50%" }}
                  >
                    <Star className="w-7 h-7 fill-star text-star" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-outfit font-bold text-xl">4.5</span>
                <span className="font-outfit text-base">
                  Average user rating
                </span>
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
  );
};

export default HeroSection;
