import fifthImage from "/fifthSection/fifth-section-illustration.png";

export default function FifthSection() {
  return (
    <div className="bg-background  h-auto  w-full flex justify-center items-center p-10  ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-instrument text-56 text-foreground leading-tight">
              Create customer invoices in seconds
            </h2>

            <p className="font-outfit text-24 font-outfit text-input font-light">
              Forget Excel templates. Your invoices are created automatically
              and always stay organised. You can set auto reminders and mail
              invoices directly.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-auto">
              <img src={fifthImage} alt="Fifth Section Illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
