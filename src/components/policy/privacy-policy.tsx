import { Separator } from "@/components/ui/separator";

 const PrivacyPolicyPage = () => {
  return (
    <div className="w-full flex justify-center mt-20 font-outfit bg-background">
      <div className="w-full max-w-7xl mx-auto py-3 px-4 flex flex-col gap-8 pb-10">
        <div>
          <h1 className="text-3xl md:text-[48px] font-bold">Privacy Policy</h1>
          <p className="text-gray-700 text-sm md:text-lg font-medium mt-4">
            Hisaab Sathi ("we", "our", "us") respects your privacy. This Privacy
            Policy explains how we collect, use, and protect your data when you
            use our platform.
          </p>
          <p className="italic text-gray-500 mt-4">Last updated: 27/01/2025</p>
          <Separator className="bg-gray-200 mt-6" />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Business information such as company name, GST number, and address.</li>
            <li>User account details including name, email, and phone number.</li>
            <li>Customer, order, invoice, and ledger data entered by you.</li>
            <li>Usage and activity data for security and performance monitoring.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>To provide billing, invoicing, and reporting services.</li>
            <li>To maintain platform security and prevent misuse.</li>
            <li>To improve features and user experience.</li>
            <li>To communicate important service updates.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Data Sharing</h2>
          <p className="text-gray-700">We do not sell your data.</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Data may be shared with trusted third-party providers for hosting, email, or payments.</li>
            <li>Data may be disclosed if required by law or government authorities.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Data Security</h2>
          <p className="text-gray-700">
            We use reasonable technical and organizational measures to protect your data.
          </p>
          <p className="text-gray-700">
            However, no system is completely secure, and we cannot guarantee
            absolute data protection.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Your Responsibility</h2>
          <p className="text-gray-700">
            You are responsible for ensuring the accuracy, legality, and compliance of all data uploaded to the platform.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Policy Updates</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Continued use of the platform means you accept the revised policy.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;