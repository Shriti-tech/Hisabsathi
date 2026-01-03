import React from "react";

const IndustryLeadersSection: React.FC = () => {
  const logos = [
    { src: "/marqueeImages/bludart.png", alt: "BlueDart" },
    { src: "/marqueeImages/delhivery.png", alt: "Shadowfax" },
    { src: "/marqueeImages/dhl.svg", alt: "DHL" },
    { src: "/marqueeImages/dtdc.svg", alt: "DTDC" },
    { src: "/marqueeImages/ekart.svg", alt: "eKart" },
    { src: "/marqueeImages/fedex.png", alt: "FedEx" },
    { src: "/marqueeImages/movin.png", alt: "Movin" },
    { src: "/marqueeImages/rivigo.svg", alt: "Rivigo" },
    { src: "/marqueeImages/selfEx.svg", alt: "SelfExpress" },
    { src: "/marqueeImages/shreemaruti.svg", alt: "shreeMaruti" },
    { src: "/marqueeImages/xpressbees.svg", alt: "XpressBees" },
  ];

  return (
    <div className=" bg-primaryLight">
      <div className="max-w-7xl mx-auto  overflow-hidden ">
        <p className=" text-left text-gray-600 text-[24px] mb-8 font-outfit">
          Integrated with Industry Leaders
        </p>
        <div className="relative max-w-7xl">
          <div className="flex animate-marquee ">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-10 object-contain"
                />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default IndustryLeadersSection;