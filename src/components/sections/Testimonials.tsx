'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    image: "/img/testimonials.jpg",
    name: "Zara M.",
    role: "Small Business Owner",
    text: "Before Riskli, I Almost Signed A Lease On A Commercial Space That Had A History Of Business Closures In The Area. Riskli's AI Flagged It Instantly, And I Chose A Better Location. It Saved Me Thousands.",
    stars: 5,
  },
  {
    image: "/img/ali.jpg",
    name: "Ali R.",
    role: "Real Estate Investor",
    text: "Riskli's insights helped me avoid a high-risk property. The analysis was spot on and saved me a lot of trouble!",
    stars: 5,
  },
  {
    image: "/img/sara.jpg",
    name: "Sara K.",
    role: "Home Buyer",
    text: "I felt confident buying my first home after using Riskli. The risk report was easy to understand and very helpful.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  return (
    <section
      className='py-20 bg-white relative overflow-hidden'
      id='testimonials'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Testimonials
          </h2>
          <p className='text-gray-500 text-lg'>Over 15,000 happy customers.</p>
        </div>

        <div className='relative max-w-5xl mx-auto'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            {/* Left side - User image with quote icon floating above */}
            <div className='relative w-72 h-72 flex-shrink-0'>
              {/* Quote icon floating above image */}
              <div className='absolute -top-16 -left-16 z-20'>
                <Image
                  src='/icons/Quote.png'
                  alt='Quote icon'
                  width={100}
                  height={100}
                  className='w-24 h-24'
                />
              </div>
              <div className='w-72 h-72 rounded-2xl overflow-hidden shadow-lg'>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={288}
                  height={288}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className='relative flex-1'>
              {/* Quote and Navigation */}
              <div className='flex gap-6 items-start'>
                <div className='flex-1'>
                  <p className='text-gray-900 text-lg sm:text-xl leading-relaxed tracking-normal mb-6 relative z-10'>
                    <span className='block text-2xl sm:text-3xl font-normal mb-6'>
                      “{testimonial.text}”
                    </span>
                  </p>

                  {/* Author info */}
                  <div className='flex flex-col md:flex-row md:items-center gap-4 mb-4'>
                    <span className='font-bold text-xl text-black'>
                      – {testimonial.name}
                    </span>
                    <span className='text-lg text-gray-500'>
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                {/* Vertical Navigation Arrows */}
                <div className='flex flex-col gap-4'>
                  <button
                    onClick={handlePrev}
                    className='bg-riskliBlue-100 hover:bg-riskliBlue-200 text-riskliBlue-500 rounded-full flex items-center justify-center w-12 h-12 transition-colors'
                    aria-label='Previous testimonial'
                  >
                    <svg
                      className='w-6 h-6 mx-auto my-auto'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 19l-7-7 7-7'
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className='bg-gray-100 hover:bg-gray-300 text-gray-500 rounded-full flex items-center justify-center w-12 h-12 transition-colors'
                    aria-label='Next testimonial'
                  >
                    <svg
                      className='w-6 h-6 mx-auto my-auto'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Stars */}
              <div className='flex gap-2 mb-2'>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg
                    key={i}
                    className='w-5 h-5 text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
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
