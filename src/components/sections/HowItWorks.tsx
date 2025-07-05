import React from "react";
import Image from "next/image";
import { Step, StepCardProps } from "@/interfaces/step.interface";
import { STEPS } from "@/utils/constants";

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => (
  <div className="card-step bg-white text-center p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg h-full">
    <div className="flex items-center justify-center mx-auto mb-3 sm:mb-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-riskliBlue-500 flex items-center justify-center">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={56}
          height={56}
          className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
      </div>
    </div>
    <h3 className="text-xl sm:text-xl md:text-2xl font-display font-bold text-gray-900 mb-2 sm:mb-3">
      {title}
    </h3>
    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export const HowItWorks = () => {
  return (
    <section
      className="relative overflow-hidden p-0 m-0"
      style={{ background: "none" }}
    >
      {/* Full-section Blue Curve Background - Adjusted for mobile */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        viewBox="0 0 1440 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ pointerEvents: "none" }}
      >
        <path
          d="M0,0 Q720,220 1440,200 L1440,1000 L0,1000 Z"
          fill="#4FC3F7"
          fillOpacity="1"
        />
      </svg>
      <div className="relative w-full px-4 sm:px-6 max-w-6xl mx-auto z-10 py-16 pb-5  md:py-16 pt-36 md:pt-40">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-display font-semibold text-black mb-2 sm:mb-4 mt-5">
            How It Works
          </h2>
        </div>

        {/* Grid with 1 column on mobile, 3 on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {STEPS.map((step: Step) => (
            <StepCard
              key={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
