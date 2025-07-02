import { FEATURES } from "@/utils/constants";
import Image from "next/image";
import React from "react";

export const Features = () => {
  return (
    <section id="features" className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Features
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <div className="flex flex-col items-center">
            {FEATURES.map((feature, index) => (
              <div key={index} className="relative flex items-center w-full">
                {/* Feature Image */}
                <div className="relative z-10 mx-auto">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-32 md:h-32 object-contain"
                  />
                </div>

                {/* Content positioning */}
                <div className="w-full flex absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
                  {feature.textPosition === "left" ? (
                    <>
                      {/* Left content */}
                      <div className="w-1/2 pr-10 flex justify-end">
                        <div style={{ width: feature.width }}>
                          <h3 className="text-sm md:text-lg font-semibold mb-2 text-gray-900 bg-gray-100 px-3 md:px-4 py-1 rounded-full inline-block">
                            {feature.title}
                          </h3>
                          <p
                            className="text-xs pl-5 text-gray-600 leading-relaxed"
                            style={{ width: `calc(${feature.width} - 40px)` }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      {/* Right spacer */}
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      {/* Left spacer */}
                      <div className="w-1/2"></div>
                      {/* Right content */}
                      <div className="w-1/2 pl-12 flex flex-col items-start">
                        <div style={{ width: feature.width }}>
                          <h3 className="text-sm md:text-lg font-semibold mb-2 text-gray-900 bg-gray-100 px-3 md:px-4 py-1 rounded-full inline-block">
                            {feature.title}
                          </h3>
                          <p
                            className="text-xs pl-5 text-gray-600 leading-relaxed text-left"
                            style={{ width: `calc(${feature.width} - 40px)` }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Simple vertical cards */}
        <div className="md:hidden space-y-4">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold mb-1 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
