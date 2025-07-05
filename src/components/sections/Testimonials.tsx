"use client";

import { TESTIMONIALS } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  return (
    <section
      className="py-10 bg-white relative overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Testimonials
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Over 15,000 happy customers.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            {/* Left side - User image with quote icon floating above */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex-shrink-0">
              {/* Quote icon floating above image - Responsive */}
              <div className="absolute -top-10 -left-5 sm:-top-12 sm:-left-8 md:-top-16 md:-left-16 z-20">
                <Image
                  src="/icons/Quote.png"
                  alt="Quote icon"
                  width={100}
                  height={100}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-24"
                />
              </div>
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="relative flex-1">
              {/* Quote and Navigation */}
              <div className="flex gap-3 sm:gap-6 items-start">
                <div className="flex-1">
                  <p className="text-gray-900 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 relative z-10">
                    <span
                      className="block text-xl md:text-2xl font-normal mb-4 sm:mb-6 tracking-widest"
                      style={{ lineHeight: "2.5rem" }}
                    >
                      "{testimonial.text}"
                    </span>
                  </p>

                  {/* Author info */}
                  <div className="flex flex-col md:flex-row md:items-center gap-1 sm:gap-4 mb-4">
                    <span className="font-bold text-lg sm:text-xl text-black">
                      – {testimonial.name}
                    </span>
                    <span className="text-base sm:text-lg text-gray-500">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                {/* Vertical Navigation Arrows - Smaller on mobile */}
                <div className="flex flex-col mt-16 gap-4 sm:gap-8">
                  <button
                    onClick={handlePrev}
                    className="bg-riskliBlue-100 hover:bg-riskliBlue-200 text-riskliBlue-300 rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 transition-colors"
                  >
                    <Image
                      src="/svg/LeftArrow.svg"
                      alt="Previous testimonial"
                      width={15}
                      height={15}
                      className="w-3 h-3"
                    />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-gray-100 hover:bg-gray-300 text-gray-300 rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 transition-colors"
                  >
                    <Image
                      src="/svg/RightArrow.svg"
                      alt="Next testimonial"
                      width={15}
                      height={15}
                      className="w-3 h-3"
                    />
                  </button>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 sm:gap-2 mb-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
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

        {/* Carousel dots for mobile - optional addition */}
        <div className="flex justify-center mt-6 md:hidden">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 mx-1 rounded-full ${
                i === index ? "bg-riskliBlue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
