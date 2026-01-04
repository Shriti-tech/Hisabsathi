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
    <div className="w-full  py-8 sm:py-12  px-4 bg-background  py-10">
      <div className="mx-auto max-w-7xl w-full ">
        <p className="text-left text-gray-600 text-lg sm:text-xl md:text-2xl mb-4 font-outfit">
          Integrated with Industry Leaders
        </p>
        <div className="group relative  flex  overflow-hidden p-1  ">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row  gap-3"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-14 lg:h-28"
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
