import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white min-h-screen flex items-center"
    >
      <div className="relative w-full px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
          <div className="relative flex justify-center items-center min-h-[380px]">
            {/* Large Outer Blue Circle */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] rounded-full bg-riskliBlue-100 opacity-50 z-0 blur-[2px]"
              style={{
                boxShadow: "0 0 120px 40px #4FC3F722",
              }}
            ></div>
            {/* Inner Blue Circle */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full bg-riskliBlue-200 opacity-60 z-0"
              style={{
                boxShadow: "0 0 80px 20px #4FC3F733",
              }}
            ></div>
            {/* Phone image container (centered above circles) */}
            <div className="relative z-10 flex items-center justify-center">
              <Image
                src="/svg/Rectangle.svg"
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
