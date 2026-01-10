import React from "react";
import { Check } from "lucide-react";
import FAQAccordion from "../home/faqSection";
import Cta from "../home/cta";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

const PricingPage: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: 499,
      period: "per month",
      description: "Great for trying out Hisaab Sathi features",
      features: [
        { text: "900 orders creation", included: true },
        { text: "Single user login", included: true },
        { text: "5GB Database", included: true },
        { text: "Automated payment due reminders", included: false },
        { text: "Monthly business summary report", included: false },
      ],
    },
    {
      name: "Professional",
      price: 999,
      period: "per month",
      description: "Best for small business owners",
      highlighted: true,
      features: [
        { text: "2500 orders creation", included: true },
        { text: "3 users login", included: true },
        { text: "10GB Database", included: true },
        { text: "Automated payment due reminders", included: true },
        { text: "Monthly business summary report", included: true },
      ],
    },
    {
      name: "Enterprise",
      price: 1999,
      period: "per month",
      description: "Best for growing large business owners",
      features: [
        { text: "6000+ orders creation", included: true },
        { text: "Unlimited users login", included: true },
        { text: "10GB Database", included: true },
        { text: "Automated payment due reminders", included: true },
        { text: "Monthly business summary report", included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background mt-20  font-outfit py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-instrument text-center  mb-16">
          Flexible plans for every business.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-sm border ${
                plan.highlighted
                  ? "border-primary shadow bg-gradient-to-b from-white to-[#F0F2FF]"
                  : "border-inputBorder bg-white"
              } overflow-hidden flex flex-col`}
            >
              <div className="p-6 pb-4">
                <h2
                  className={`text-lg font-light mb-4 ${
                    plan.highlighted
                      ? "text-primary font-semibold"
                      : "text-input"
                  }`}
                >
                  {plan.name}
                </h2>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="ml-2 text-input font-light text-sm">
                    /{plan.period}
                  </span>
                </div>
                <p className="text-sm text-input font-light mb-6">
                  {plan.description}
                </p>

                <button
                  className={`w-full py-3 px-4 rounded-[10px] font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-white"
                      : "bg-black  text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>

              <div className="px-6 pb-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 mr-3 flex-shrink-0">
                        {feature.included && (
                          <div className="w-full h-full rounded-2xl p-px bg-gradient-to-b from-[#F4F4F5] to-[#C8D6E5]">
                            <Check className="w-full h-full bg-white p-0.5 rounded-2xl text-success" />
                          </div>
                        )}
                      </div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQAccordion />
      <Cta />
    </div>
  );
};

export default PricingPage;
