import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* Background Icons */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute right-[11%] top-[15%] w-4 h-4 sm:w-6 sm:h-6 border-2 border-gray-200 rounded-full opacity-60"></div>

        <div className="absolute left-[6%] top-[30%] w-4 h-4 sm:w-6 sm:h-6 border-2 border-gray-200 rounded-full opacity-60"></div>

        <div className="absolute left-[28%] top-[15%] opacity-30">
          <Image
            src="/icons/Privacy.png"
            width={28}
            height={28}
            className="text-gray-200 opacity-30 w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]"
            alt="Privacy"
          />
        </div>

        <div className="absolute left-[15%] top-[30%] opacity-30">
          <Image
            src="/icons/RightLock.png"
            width={30}
            height={30}
            className="text-gray-200 opacity-30 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
            alt="Lock"
          />
        </div>

        <div className="absolute right-[25%] bottom-[25%] hidden sm:block">
          <Image
            src="/icons/Lock.png"
            width={24}
            className="text-gray-200 opacity-30"
            height={24}
            alt="Lock"
          />
        </div>

        <div className="absolute left-[8%] bottom-[20%] opacity-30 hidden sm:block">
          <Image
            src="/icons/Privacy.png"
            width={45}
            height={45}
            className="text-gray-200 opacity-30 w-[30px] h-[30px] md:w-[45px] md:h-[45px]"
            alt="Privacy"
          />
        </div>

        <div className="absolute left-[2%] bottom-[45%] opacity-30 hidden md:block">
          <Image
            src="/icons/Lock.png"
            width={35}
            className="text-gray-200 opacity-30"
            height={35}
            alt="Lock"
          />
        </div>

        <div className="absolute right-[15%] bottom-[15%] opacity-30 hidden md:block">
          <Image
            src="/icons/Lock.png"
            width={30}
            className="text-gray-200 opacity-30"
            height={30}
            alt="Lock"
          />
        </div>

        <div className="absolute right-[20%] bottom-[10%] opacity-30 hidden md:block">
          <Image
            src="/icons/Lock.png"
            width={24}
            className="text-gray-200 opacity-30"
            height={24}
            alt="Lock"
          />
        </div>

        <div className="absolute left-[40%] bottom-[45%] opacity-30 hidden md:block">
          <Image
            src="/icons/RightLock.png"
            width={35}
            className="text-gray-200 opacity-30"
            height={35}
            alt="Lock"
          />
        </div>

        <div className="absolute left-[28%] bottom-[30%] opacity-40 hidden md:block">
          <Image
            src="/icons/Wave.png"
            width={80}
            className="text-gray-200 opacity-30"
            height={80}
            alt="Wave"
          />
        </div>

        <div className="absolute left-[18%] bottom-[40%] w-6 h-6 border-2 border-gray-200 rounded-full opacity-60 hidden lg:block"></div>

        <div className="absolute right-[37%] bottom-[50%] w-6 h-6 border-2 border-gray-200 rounded-full opacity-60 hidden lg:block"></div>

        <div className="absolute left-[45%] bottom-[12%] opacity-30 hidden lg:block">
          <Image
            src="/icons/Privacy.png"
            width={45}
            className="text-gray-200 opacity-30"
            height={45}
            alt="Privacy"
          />
        </div>

        <div className="absolute right-[45%] top-[58%] opacity-30 hidden lg:block">
          <Image
            src="/icons/HalfCircle.png"
            width={50}
            className="text-gray-200 opacity-30"
            height={50}
            alt="HalfCircle"
          />
        </div>

        <div className="absolute right-[50%] top-[10%] opacity-30">
          <Image
            src="/icons/Security.png"
            width={45}
            height={45}
            className="text-gray-200 opacity-30 w-[25px] h-[25px] md:w-[45px] md:h-[45px]"
            alt="Security"
          />
        </div>
      </div>

      <div className="relative w-full px-4 sm:px-6 py-0 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left lg:pl-24 md:pl-16 pl-8 relative">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black leading-tight relative">
              Know The <span className="text-riskliBlue-600">Risk</span> <br />
              <span className="text-riskliBlue-600 relative">
                Before
                {/* Horizontal line below "Before" */}
                <div className="absolute bottom-0 left-18 w-24 h-0.5 bg-gray-200"></div>
              </span>{" "}
              You Decide
            </h1>
            <p className="text-base sm:text-lg text-black max-w-md mx-auto lg:mx-0">
              Riskli helps you analyze the risk of any property before making a
              purchase.
            </p>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center items-center min-h-[380px]">
            {/* Large Outer Blue Circle - Reduced size */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full bg-riskliBlue-50 opacity-50 z-0 blur-[2px]"></div>

            {/* Inner Blue Circle - Increased size */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full bg-riskliBlue-100 opacity-80 z-0"></div>

            {/* Horizontal line to the left of phone */}
            <div className="absolute right-[65%] bottom-[8%] lg:w-24 w-16 h-0.5 bg-gray-200"></div>

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
