import React, { useState } from "react";
import { Phone, Mail, Star } from "lucide-react";
import { personImages } from "@/constants/person";

interface FormData {
  name: string;
  phone: string;
  email: string;
  selectedOptions: string[];
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    selectedOptions: [],
    message: "",
  });

  const messageOptions = [
    "I want to schedule a demo",
    "I want to know more about Swipe",
    "Help me with pricing details",
    "I have a question about a feature",
    "know more about a feature",
  ];

  const handleOptionClick = (option: string) => {
  setFormData((prev) => ({
    ...prev,
    selectedOptions: prev.selectedOptions.includes(option)
      ? prev.selectedOptions.filter((opt) => opt !== option)
      : [...prev.selectedOptions, option],
    message: prev.selectedOptions.includes(option)
      ? prev.message.replace(option, "").replace(/\n\n+/g, "\n").trim()
      : prev.message + (prev.message ? "\n" : "") + option,
  }));
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };


  return (
    <div className="bg-background w-full  flex items-center justify-center px-4 p-3 mt-20">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
         
          <div className="w-full lg:w-1/2 bg-background">
            <div className="flex flex-col space-y-8 md:space-y-10 lg:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <h1 className="font-instrument text-4xl sm:text-5xl lg:text-[56px] leading-tight">
                  Get in touch
                  <br />
                  with us
                </h1>

                <p className="font-outfit text-input text-base sm:text-lg max-w-md">
                  Get help with pricing plans, schedule a demo, explore use-cases
                  for your business, and more.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h2 className="font-outfit font-semibold text-input text-lg sm:text-xl">
                  Contact Information
                </h2>
                <p className="font-outfit text-sm sm:text-base text-gray-600">
                  Reach out to sales. We respond fast!
                </p>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <span className="text-base sm:text-lg font-medium font-outfit text-gray-700">
                      +91 XXXXX XXXXX
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <span className="text-base sm:text-lg font-outfit font-medium text-gray-700">
                      contact@example.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Section */}
              <div className="space-y-3 md:space-y-4 pt-4 md:pt-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex -space-x-2">
                    {personImages.slice(0, 5).map((person, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white overflow-hidden"
                      >
                        <img
                          src={person.url}
                          alt={person.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 font-outfit text-sm sm:text-base font-medium">
                  Trusted by 20,00,000+ businesses
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-1/2 font-outfit">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-6 p-6 sm:p-8 md:p-10 bg-white border-2 rounded-lg border-inputBorder"
            >
              {/* Name Input */}
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-900 mb-2">
                  Your Name or Company Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  required
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-900 mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                />
              </div>

              {/* Message Options */}
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-900 mb-3">
                  Your message to us!
                </label>
                <div className="flex flex-wrap gap-2">
                  {messageOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleOptionClick(option)}
                      className={`px-3 sm:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                        formData.selectedOptions.includes(option)
                          ? "bg-amber-100 text-amber-800 border-2 border-amber-300"
                          : "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm md:text-base"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary  text-white font-semibold py-3 md:py-4 rounded-md"
              >
                Contact Us
              </button>

              {/* Privacy Note */}
              <p className="text-xs md:text-sm text-gray-500 text-center leading-relaxed pt-2">
                You'll hear from us within 2 hours (during business hours). Your
                info is safe and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;