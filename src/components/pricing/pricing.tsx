import React from 'react';
import { Check, X } from 'lucide-react';

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
      name: 'Free',
      price: 499,
      period: 'per month',
      description: 'Great for trying out Hisaab Sathi features',
      features: [
        { text: '900 orders creation', included: true },
        { text: 'Single user login', included: true },
        { text: '5GB Database', included: true },
        { text: 'Automated payment due reminders', included: false },
        { text: 'Monthly business summary report', included: false },
      ],
    },
    {
      name: 'Professional',
      price: 999,
      period: 'per month',
      description: 'Best for small business owners',
      highlighted: true,
      features: [
        { text: '2500 orders creation', included: true },
        { text: '3 users login', included: true },
        { text: '10GB Database', included: true },
        { text: 'Automated payment due reminders', included: true },
        { text: 'Monthly business summary report', included: true },
      ],
    },
    {
      name: 'Enterprise',
      price: 1999,
      period: 'per month',
      description: 'Best for growing large business owners',
      features: [
        { text: '6000+ orders creation', included: true },
        { text: 'Unlimited users login', included: true },
        { text: '10GB Database', included: true },
        { text: 'Automated payment due reminders', included: true },
        { text: 'Monthly business summary report', included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background mt-20 border-8 font-outfit border-red-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-instrument text-center  mb-16">
          Flexible plans for every business.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-sm border ${
                plan.highlighted ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'
              } overflow-hidden flex flex-col`}
            >
              <div className="p-6 pb-4">
                <h2
                  className={`text-lg font-medium mb-4 ${
                    plan.highlighted ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {plan.name}
                </h2>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                  <span className="ml-2 text-gray-500 text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">{plan.description}</p>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-black hover:bg-gray-800 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>

              <div className="px-6 pb-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-gray-700' : 'text-gray-400'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;