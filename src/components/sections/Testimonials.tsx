"use client";
import Image from "next/image";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-gray-500 text-lg">Over 15,000 happy customers.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left side - User image */}
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
              <Image
                src="/img/testimonials.jpg"
                alt="Zara M."
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="">
              {/* Large quotation mark */}
              <div className="absolute -left-16 -top-20 text-riskliBlue-500">
                <Image
                  src="/icons/Quote.png"
                  alt="Quote icon"
                  width={120}
                  height={120}
                  className="w-26 h-26"
                />
              </div>

              {/* Quote and Navigation */}
              <div className="flex gap-6 items-start">
                <div className="flex-1">
                  <p className="text-gray-900 text-lg sm:text-xl leading-relaxed tracking-normal mb-6 relative z-10">
                    "Before Riskli, I Almost Signed A Lease On A Commercial
                    Space That Had A History Of Business Closures In The Area.
                    Riskli's AI Flagged It Instantly, And I Chose A Better
                    Location. It Saved Me Thousands."
                  </p>

                  {/* Author info */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <p className="font-semibold text-gray-900">Zara M.,</p>
                    <p className="text-gray-600">Small Business Owner</p>
                  </div>
                </div>

                {/* Vertical Navigation Arrows */}
                <div className="flex flex-col gap-2">
                  <button
                    className="bg-riskliBlue-100 hover:bg-riskliBlue-400 text-white rounded-full p-2 transition-colors w-10 h-10 flex items-center justify-center" // Added width, height, and centering
                    aria-label="Previous testimonial"
                  >
                    <span className="text-riskliBlue-500 text-xl">→</span>
                  </button>
                  <button
                    className="bg-gray-100 hover:bg-gray-400 text-white rounded-full p-2 transition-colors w-10 h-10 flex items-center justify-center" // Matched styling with the first button
                    aria-label="Next testimonial"
                  >
                    <span className="text-white text-xl">←</span>
                  </button>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
