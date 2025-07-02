import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white min-h-screen flex items-center"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black leading-tight">
              Know The <span className="text-riskliBlue-600">Risk</span>
              <br />
              <span className="text-riskliBlue-600">Before</span> You Decide
            </h1>
            <p className="text-base sm:text-lg text-black max-w-md mx-auto lg:mx-0">
              RiskFi helps you analyze the risk of any property before making a
              purchase.
            </p>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Blue glow background */}
            <div
              className="absolute z-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full bg-riskliBlue-500 blur-[80px] sm:blur-[100px] opacity-30"
              style={{
                top: "60%",
                left: "80%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>

            {/* Phone image container */}
            <div className="relative z-10">
              <Image
                src="/img/Rectangle.png"
                alt="Phone Mockup"
                width={200}
                height={416}
                priority
                className="drop-shadow-xl w-[160px] sm:w-[200px] lg:w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
