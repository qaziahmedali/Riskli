'use client';
import react, { useState } from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileMenu } from './MobileMenu';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav
      className='bg-white shadow-sm px-4 py-4 relative overflow-hidden'
      id='#navbar'
    >
      {/* Top Curved Blue Background */}
      <svg
        className='absolute top-0 left-0 w-full h-full z-0'
        viewBox='0 0 1440 180'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        style={{ pointerEvents: 'none' }}
      >
        <path
          d='M0,0 Q900,0 1440,80 Q1440,0 1440,0 L0,0 Z'
          fill='#4FC3F7'
          fillOpacity='1'
        />
      </svg>
      <div className='max-w-8xl mx-auto flex items-center justify-between relative z-10'>
        <div className='flex items-center space-x-2'>
          <Image
            src='/img/Group1.png'
            alt='RiskFi Logo'
            width={60}
            height={60}
            priority
          />
        </div>

        <div className='md:hidden'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-gray-600 hover:text-riskliBlue-600 focus:outline-none'
            aria-label='Toggle menu'
          >
            <Menu className='w-6 h-6' />
          </button>
        </div>

        <DesktopNav activeLink={activeLink} onNavClick={handleNavClick} />

        <div className='hidden md:block relative'>
          <button
            type='button'
            className='bg-white text-riskliBlue-500 hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg relative z-10'
          >
            Try App
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          activeLink={activeLink}
          onClose={() => setIsMenuOpen(false)}
          onNavClick={handleNavClick}
        />
      </div>
    </nav>
  );
};
