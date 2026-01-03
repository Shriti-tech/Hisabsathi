const logos = [
  {
    name: "BlueDart",
    url: "/marqueeImages/bludart.png",
  },
  {
    name: "Delhivery",
    url: "/marqueeImages/delhivery.png",
  },
  {
    name: "DHL",
    url: "/marqueeImages/dhl.svg",
  },
  {
    name: "DTDC",
    url: "/marqueeImages/dtdc.svg",
  },
  {
    name: "eKart",
    url: "/marqueeImages/ekart.svg",
  },
  {
    name: "FedEx",
    url: "/marqueeImages/fedex.png",
  },
  {
    name: "Movin",
    url: "/marqueeImages/movin.png",
  },
  {
    name: "Rivigo",
    url: "/marqueeImages/rivigo.svg",
  },
  {
    name: "SelfExpress",
    url: "/marqueeImages/selfEx.svg",
  },
  {
    name: "shreeMaruti",
    url: "/marqueeImages/shreemaruti.svg",
  },
  {
    name: "XpressBees",
    url: "/marqueeImages/xpressbees.svg",
  },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-12 bg-background ">
      <div className="mx-auto max-w-7xl w-full  md:px-8">
        <p className=" text-left text-gray-600 text-[24px] mb-8 font-outfit">
          Integrated with Industry Leaders
        </p>
        <div className="group relative mt-6 flex gap-6 overflow-hidden p-2 ">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-12  px-5 "
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
