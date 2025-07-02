import Image from "next/image";
import React from "react";

export const DownloadSection = () => {
  return (
    <section className="py-8 md:py-20 w-full">
      <div className="mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Download The Riskli App
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Available on iOS & Android. Start analyzing property risks in
            seconds.
          </p>
        </div>

        {/* Full Width Image */}
        <div className="relative w-full mb-6 md:mb-8 overflow-hidden">
          <Image
            src="/svg/Mockups.svg"
            alt="Riskli App Screenshot"
            width={1200}
            height={600}
            className="object-contain w-full"
            priority
          />
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6 md:mt-8">
          <a
            href="#"
            className="bg-riskliBlue-500 hover:bg-riskliBlue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center justify-center transition-colors w-full max-w-xs"
          >
            <div className="flex items-center">
              <div className="mr-2 sm:mr-3">
                <Image
                  src="/icons/download.png"
                  alt="Download icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base md:text-lg font-bold">
                  Download Now
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
