"use client";

import React, { useState } from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";
import Logo from "../ui/Logo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white w-full px-4 sm:px-6 py-16 relative overflow-hidden z-50"
      id="#navbar"
    >
      <svg
        className="absolute top-0 left-1/2 -translate-x-0 w-1/2 h-[250px] z-0 hidden md:flex"
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ pointerEvents: "none" }}
      >
        <path
          d="M0,0 Q900,0 1440,100 Q1440,0 1440,0 L0,0 Z"
          fill="#4FC3F7"
          fillOpacity="1"
        />
      </svg>
      <div className="w-full flex flex-wrap items-center justify-between relative z-10 mt-[-40px]">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-riskliBlue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <DesktopNav />

        <div className="hidden md:block relative">
          <button
            type="button"
            className="bg-white text-riskliBlue-500 hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg relative z-10"
          >
            Try App
          </button>
        </div>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </nav>
  );
};
