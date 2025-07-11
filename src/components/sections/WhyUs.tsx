"use client";

import Image from "next/image";
import { WHY_US_DATA } from "@/utils/constants";

const WhyUsCard = ({
  icon,
  title,
  description,
  colorBorder,
  backgroundImage,
}: {
  icon: string;
  title: string;
  description: string;
  colorBorder: string;
  backgroundImage: string;
}) => {
  const colorStyles = {
    "border-red-500": {
      borderColor: "#EF2326",
      shadowColor: "rgba(255, 58, 58, 0.1)",
      bgColor: "rgba(255, 58, 58, 0.05)",
    },
    "border-purple-500": {
      borderColor: "#9723ef",
      shadowColor: "rgba(168, 85, 247, 0.1)",
      bgColor: "rgba(168, 85, 247, 0.05)",
    },
    "border-yellow-500": {
      borderColor: "#Efc723",
      shadowColor: "rgba(234, 179, 8, 0.1)",
      bgColor: "rgba(234, 179, 8, 0.05)",
    },
  };

  const colors = colorStyles[colorBorder as keyof typeof colorStyles];

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Main container with adjusted sizes */}
      <div className="relative w-[180px] h-[220px] sm:w-[200px] sm:h-[240px] md:w-[210px] md:h-[250px] lg:w-[220px] lg:h-[260px] xl:w-[274px] xl:h-[307px]">
        {/* Border box with consistent visibility */}
        <div
          className="absolute w-full h-full border-4"
          style={{
            borderColor: colors.borderColor,
            transform: "translate(18px, 18px)",
            boxShadow: `0 8px 16px ${colors.shadowColor}, 0 4px 8px ${colors.shadowColor}`,
            borderRadius: "20px",
          }}
        ></div>

        {/* White card with adjusted positioning */}
        <div
          className="absolute -top-4 -left-3.5 w-[205px] h-[250px] sm:-top-4 sm:-left-4 sm:w-[230px] sm:h-[270px] md:-top-5 md:-left-4 md:w-[240px] md:h-[280px] lg:-top-5 lg:-left-5 lg:w-[250px] lg:h-[290px] xl:-top-7 xl:-left-7 xl:w-[315px] xl:h-[345px] 2xl:-top-8 2xl:-left-8 2xl:w-[320px] 2xl:h-[350px]  z-10"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: "110% 110%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Card content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 sm:p-3 md:p-4 lg:p-6 space-y-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 mb-1 sm:mb-2 md:mb-3 lg:mb-4 relative">
              <Image
                src={icon}
                alt={title}
                fill
                className="object-contain text-riskliBlue-500"
              />
            </div>

            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-riskliBlue-500 mb-1 sm:mb-2">
              {title}
            </h3>

            <p className="text-black max-w-[100px] lg:max-w-[200px] text-[10px] sm:text-xs md:text-sm lg:text-base font-[450] leading-tight sm:leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16" id="why-us">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-8">
        <div className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-12">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-5">
            Why Use Riskli?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-12">
          {WHY_US_DATA.map((item) => (
            <div className="mb-8 sm:mb-10 md:mb-0" key={item.id}>
              <WhyUsCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                colorBorder={item.colorBorder}
                backgroundImage={item.backgroundImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
