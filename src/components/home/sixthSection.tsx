import React from "react";

interface Testimonial {
  name: string;
  image: string;
  title: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Suman Mondal",
    image: "/sixthSection/person-1.png",
    title: "DTDC Franchise owner, Shapoorji",
    quote:
      "We are addicted to Hisaab Sathi and use it everyday. It makes our job so easy!",
  },
  {
    name: "Rahul Saha",
    image: "/sixthSection/person-2.jpg",
    title: "Delhivery Channel Partner, New Town",
    quote:
      "Billing is no longer a headache. Orders go in and invoices come out. Simple and reliable.",
  },
  {
    name: "Priya Sharma",
    image: "/sixthSection/person-3.jpg",
    title: "Blue Dart Franchise owner, Kolkata",
    quote:
      "Customer ledgers are always organized. No more missed payments or confusion.",
  },
  {
    name: "Amit Kumar",
    image: "/sixthSection/person-4.jpg",
    title: "Ecom Express Partner, Mumbai",
    quote:
      "The best software for courier business. Everything is automated and error-free.",
  },
];

const TestimonialMarquee: React.FC = () => {
  return (
    <div className="w-full bg-background py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 font-outfit">
      <div className="max-w-7xl mx-auto md:px-8 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
        <h2 className="font-instrument text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-80 text-foreground mb-1.5 xs:mb-2 sm:mb-3 leading-tight">
          Stories from the businesses we support
        </h2>
        <p className="font-outfit text-sm xs:text-base sm:text-lg md:text-xl lg:text-24 text-input font-light">
          Trusted by businesses that actually move shipments
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgb(250 251 255) 0%, transparent 5%, transparent 95%, rgb(250 251 255) 100%)",
          }}
        />

        <div className="flex group">
          <div className="flex animate-[scroll_35s_linear_infinite] sm:animate-[scroll_40s_linear_infinite] group-hover:[animation-play-state:paused]">
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="w-64 xs:w-72 sm:w-80 md:w-[360px] lg:w-[399px] h-96 xs:h-[420px] sm:h-[450px] md:h-[480px] lg:h-[498px] flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden mx-1.5 xs:mx-2 sm:mx-3 relative group"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-100"
                  style={{
                    background:
                      "linear-gradient(180.69deg, rgba(0, 0, 0, 0) 61.15%, #000000 92.47%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4 sm:p-5 md:p-6 text-white">
                  <h3 className="font-outfit font-semibold text-base xs:text-lg sm:text-xl md:text-2xl mb-0.5 xs:mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="font-outfit text-16 xs:text-xs sm:text-sm md:text-base text-gray-200 mb-1.5 xs:mb-2 sm:mb-3">
                    {testimonial.title}
                  </p>
                  <p className="font-outfit text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex animate-[scroll_35s_linear_infinite] sm:animate-[scroll_40s_linear_infinite] group-hover:[animation-play-state:paused]">
            {testimonials.map((testimonial, index) => (
              <div
                key={`second-${index}`}
                className="w-64 xs:w-72 sm:w-80 md:w-[360px] lg:w-[399px] h-96 xs:h-[420px] sm:h-[450px] md:h-[480px] lg:h-[498px] flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden mx-1.5 xs:mx-2 sm:mx-3 relative group"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-100"
                  style={{
                    background:
                      "linear-gradient(180.69deg, rgba(0, 0, 0, 0) 61.15%, #000000 92.47%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4 sm:p-5 md:p-6 text-white">
                  <h3 className="font-outfit font-semibold text-base xs:text-lg sm:text-xl md:text-2xl mb-0.5 xs:mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="font-outfit text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-200 mb-1.5 xs:mb-2 sm:mb-3">
                    {testimonial.title}
                  </p>
                  <p className="font-outfit text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialMarquee;
