import React from 'react';
import { NavLink } from './NavLink';

interface DesktopNavProps {
  activeLink: string;
  onNavClick: (link: string) => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ activeLink, onNavClick }) => (
  <div className="hidden md:flex items-center space-x-8">
    <NavLink
      href="#"
      active={activeLink === 'Home'}
      onClick={() => onNavClick('Home')}
    >
      Home
    </NavLink>
    <NavLink
      href="#features"
      active={activeLink === 'Features'}
      onClick={() => onNavClick('Features')}
    >
      Features
    </NavLink>
    <NavLink
      href="#why-us"
      active={activeLink === 'Why Us'}
      onClick={() => onNavClick('Why Us')}
    >
      Why Us
    </NavLink>
    <NavLink
      href="#testimonials"
      active={activeLink === 'Testimonials'}
      onClick={() => onNavClick('Testimonials')}
    >
      Testimonials
    </NavLink>
  </div>
);
