import fourthImage from "/fourthSection/fourth-section-illustration.png";

function FourthSection() {
  return (
    <div className="bg-background w-full flex justify-center items-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:p-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="flex items-center justify-center order-1 lg:order-1">
            <div className="w-full h-auto max-w-md lg:max-w-full">
              <img
                src={fourthImage}
                alt="Fourth Section Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-2">
            <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl lg:text-56 text-foreground leading-tight">
              Manage customer ledgers and never miss out again
            </h2>

            <p className="font-outfit text-base sm:text-lg md:text-xl lg:text-24 text-input font-light leading-relaxed">
              No loose entries. No missed balances. Every customer record stays
              clear and organised. This is your smarter Khata Book system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FourthSection;
