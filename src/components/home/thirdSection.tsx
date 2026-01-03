import React from "react";
import thirdImage from "/thirdSection/third-section-illustration.png";

export default function CourierPartnersSection() {
  return (
    <div className="bg-white py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="font-instrument text-4xl lg:text-5xl text-foreground leading-tight">
              Get all Courier Partners in one place
            </h2>
            
            <p className="font-outfit text-base lg:text-lg text-textgray leading-relaxed">
              Switching between courier portals, rate sheets, and random files will waste time and hinder your workflow. One place for every order keeps your entire operation clean and predictable.
            </p>
          </div>

          {/* Right Side - Placeholder for your image */}
          <div className="flex items-center justify-center">
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <img src={thirdImage} alt="Third Section Illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}