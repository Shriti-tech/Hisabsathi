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
    image: "sixthSection/person-1.png",
    title: "DTDC Franchise owner, Shapoorji",
    quote:
      "We are addicted to Hisaab Sathi and use it everyday. It makes our job so easy!",
  },
  {
    name: "Rahul Saha",
    image: "sixthSection/person-2.jpg",
    title: "Delhivery Channel Partner, New Town",
    quote:
      "Billing is no longer a headache. Orders go in and invoices come out. Simple and reliable.",
  },
  {
    name: "Priya Sharma",
    image: "sixthSection/person-3.jpg",
    title: "Blue Dart Franchise owner, Kolkata",
    quote:
      "Customer ledgers are always organized. No more missed payments or confusion.",
  },
  {
    name: "Amit Kumar",
    image: "sixthSection/person-4.jpg",
    title: "Ecom Express Partner, Mumbai",
    quote:
      "The best software for courier business. Everything is automated and error-free.",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="font-outfit w-[280px] xs:w-[300px] md:w-[360px] lg:w-[400px] h-[380px] xs:h-[420px] md:h-[480px] lg:h-[500px] flex-shrink-0 rounded-xl overflow-hidden relative group mx-2 md:mx-3">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-full h-full object-cover"
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%)",
      }}
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
      <h3 className="font-light text-sm md:text-base mb-1">
        {testimonial.name}
      </h3>
      <p className="font-light text-xs md:text-sm mb-2 md:mb-3">
        {testimonial.title}
      </p>
      <p className="text-sm md:text-base lg:text-lg  opacity-90">
        {testimonial.quote}
      </p>
    </div>
  </div>
);

const TestimonialMarquee: React.FC = () => {
  return (
    <div className="w-full  py-12 md:py-16 px-4 min-h-[80vh] bg-background ">
      <div className="max-w-7xl mx-auto mb-10 md:mb-12  ">
        <h2 className="font-instrument  text-3xl sm:text-4xl md:text-5xl lg:text-80  mb-2 sm:mb-3 leading-tight">
          Stories from the businesses we support
        </h2>
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl font-outfit text-input font-light">
          Trusted by businesses that actually move shipments
        </p>
      </div>

      <div className="relative w-full overflow-hidden ">
        <div className="flex animate-logo-cloud">
          {Array(10)
            .fill(null)
            .map((_, groupIndex) => (
              <div key={groupIndex} className="flex shrink-0">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`${groupIndex}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialMarquee;
