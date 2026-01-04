const logos = [
  {
    name: "ups",
    url: "/marqueeImages/0.png",
  },
  {
    name: "BlueDart",
    url: "/marqueeImages/1.png",
  },
  {
    name: "delhivery",
    url: "/marqueeImages/2.png",
  },
  {
    name: "DTDC",
    url: "/marqueeImages/3.png",
  },
  {
    name: "eKart",
    url: "/marqueeImages/4.png",
  },
  {
    name: "shadowfax",
    url: "/marqueeImages/5.png",
  },
  {
    name: "shree Maruti",
    url: "/marqueeImages/6.png",
  },
  {
    name: "ExpressBees",
    url: "/marqueeImages/7.png",
  },
  {
    name: "tirupati",
    url: "/marqueeImages/8.png",
  },
  {
    name: "FedEx",
    url: "/marqueeImages/9.png",
  },
  {
    name: "DHL",
    url: "/marqueeImages/10.png",
  },
  {
    name: "Rivigo",
    url: "/marqueeImages/11.png",
  },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-8 sm:py-12  bg-background">
      <div className="mx-auto max-w-7xl w-full px-4 lg:px-0 ">
        <p className="text-left text-gray-600 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-outfit">
          Integrated with Industry Leaders
        </p>
        <div className="group relative mt-4 sm:mt-6 flex gap-4 sm:gap-6 overflow-hidden p-2 ">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-4 sm:gap-6"
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
