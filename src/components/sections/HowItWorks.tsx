import React from "react";
import Image from "next/image";
import { Step, StepCardProps } from "@/interfaces/step.interface";
import { STEPS } from "@/utils/constants";

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => (
  <div className="card-step bg-white text-center p-6 rounded-2xl shadow-lg h-full">
    <div className="flex items-center justify-center mx-auto mb-4">
      <div className="w-8 h-8 text-riskliBlue-500 flex items-center justify-center">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
    </div>
    <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export const HowItWorks = () => {
  return (
    <section
      className="relative overflow-hidden p-0 m-0"
      style={{ background: "none" }}
    >
      {/* Full-section Blue Curve Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ pointerEvents: "none" }}
      >
        <path
          d="M0,0 Q720,80 1440,40 L1440,800 L0,800 Z"
          fill="#4FC3F7"
          fillOpacity="1"
        />
      </svg>
      <div className="relative w-full px-4 sm:px-6 max-w-6xl mx-auto z-10 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-semibold text-black mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
