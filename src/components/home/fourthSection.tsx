import fourthImage from "/fourthSection/fourth-section-illustration.png";

export default function FourthSection() {
  return (
    <div className="bg-background   w-full flex justify-center items-center p-10  ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="flex items-center justify-center">
            <div className="w-full h-auto">
              <img src={fourthImage} alt="Fourth Section Illustration" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-instrument text-56 text-foreground leading-tight">
            Manage customer ledgers and never miss out again
            </h2>

            <p className="font-outfit text-24 font-outfit text-input font-light">
              No loose entries. No missed balances. Every customer record stays clear and organised. This is your smarter Khata Book system.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}
