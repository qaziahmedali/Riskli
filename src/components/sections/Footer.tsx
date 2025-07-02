'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';

const Footer = () => {
  const pathname = usePathname();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (sectionId === '') {
      // For home link, scroll to top and clear hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState({}, '', pathname);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Update URL without page reload
      window.history.pushState({}, '', `${pathname}#${sectionId}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className='bg-white w-full pt-4'>
      {/* Blue line at the top (capsule + thin line, seamless, thin right section) */}
      <div className='w-full flex items-center mb-6'>
        <div className='w-24 h-3 bg-[#4FC3F7] rounded-r-full rounded-l-none'></div>
        <div className='flex-1 h-1 bg-[#4FC3F7] rounded-full -ml-px'></div>
      </div>
      {/* Main Footer Content */}
      <div className='w-full px-4 sm:px-8'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-4 border-b border-gray-200'>
          {/* Logo */}
          <div className='flex justify-center md:justify-start mb-4 md:mb-0'>
            <Logo />
          </div>
          {/* Navigation Links */}
          <div className='flex flex-wrap justify-center gap-8 font-medium'>
            <a
              href='#'
              onClick={(e) => scrollToSection(e, '')}
              className='text-black hover:text-riskliBlue-600 transition-colors cursor-pointer'
            >
              Home
            </a>
            <a
              href='#features'
              onClick={(e) => scrollToSection(e, 'features')}
              className='text-black hover:text-riskliBlue-600 transition-colors cursor-pointer'
            >
              Features
            </a>
            <a
              href='#why-us'
              onClick={(e) => scrollToSection(e, 'why-us')}
              className='text-black hover:text-riskliBlue-600 transition-colors cursor-pointer'
            >
              Why Us
            </a>
            <a
              href='#testimonials'
              onClick={(e) => scrollToSection(e, 'testimonials')}
              className='text-black hover:text-riskliBlue-600 transition-colors cursor-pointer'
            >
              Testimonials
            </a>
          </div>
          {/* Social Icons */}
          <div className='flex justify-center md:justify-end gap-6'>
            <a
              href='#'
              className='text-black hover:text-riskliBlue-600 transition-colors'
            >
              <Image
                src='/icons/instagram.png'
                alt='Instagram'
                width={20}
                height={20}
                className='w-5 h-5 object-contain'
              />
            </a>
            <a
              href='#'
              className='text-black hover:text-riskliBlue-600 transition-colors'
            >
              <Image
                src='/icons/twitter.png'
                alt='Twitter'
                width={18}
                height={18}
                className='w-5 h-5 object-contain'
              />
            </a>
            <a
              href='#'
              className='text-black hover:text-riskliBlue-600 transition-colors'
            >
              <Image
                src='/icons/facebook.png'
                alt='Facebook'
                width={20}
                height={20}
                className='w-5 h-5 object-contain'
              />
            </a>
          </div>
        </div>
        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center py-6 font-[400] w-full'>
          <p className='text-gray-600 text-sm mb-4 md:mb-0'>
            © 2025 Civil Security AI. All rights reserved.
          </p>
          <div className='flex space-x-6'>
            <a
              href='#'
              className='text-gray-500 hover:text-riskliBlue-600 text-sm transition-colors'
            >
              Terms of Services
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-riskliBlue-600 text-sm transition-colors'
            >
              Privacy & Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
