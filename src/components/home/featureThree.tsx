import fifthImage from "/feature-three/feature-three-illustration.png";

function FeatureThree() {
  return (
    <div className="bg-background  w-full flex justify-center items-center py-8 lg:py-16 px-4 min-h-[80vh]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1">
            <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl lg:text-56 text-foreground leading-tight">
              Create customer invoices in seconds
            </h2>

            <p className="font-outfit text-base sm:text-lg md:text-xl lg:text-xl  text-input font-light leading-relaxed">
              Switching between courier portals, rate sheets, and random files
              only wastes time and breaks your workflow. One place for every
              order keeps your entire operation clean and predictable.
            </p>
          </div>
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="w-full h-auto max-w-md lg:max-w-full">
              <img
                src={fifthImage}
                alt="Fifth Section Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeatureThree;
