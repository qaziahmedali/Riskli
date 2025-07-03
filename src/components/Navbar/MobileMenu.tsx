import React from "react";
import { X } from "lucide-react";
import { NavLink } from "./NavLink";

interface MobileMenuProps {
  isOpen: boolean;
  activeLink: string;
  onClose: () => void;
  onNavClick: (link: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeLink,
  onClose,
  onNavClick,
}) => {
  if (!isOpen) return null;

  const handleNavClick = (link: string) => {
    onNavClick(link);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div className="fixed inset-0 bg-riskliBlue-300 z-50 flex flex-col pt-4 px-6">
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-riskliBlue-200 text-white hover:bg-riskliBlue-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col space-y-4">
          <NavLink
            href="#"
            active={activeLink === "Home"}
            onClick={() => handleNavClick("Home")}
            mobile
          >
            Home
          </NavLink>
          <NavLink
            href="#features"
            active={activeLink === "Features"}
            onClick={() => handleNavClick("Features")}
            mobile
          >
            Features
          </NavLink>
          <NavLink
            href="#why-us"
            active={activeLink === "Why Us"}
            onClick={() => handleNavClick("Why Us")}
            mobile
          >
            Why Us
          </NavLink>
          <NavLink
            href="#testimonials"
            active={activeLink === "Testimonials"}
            onClick={() => handleNavClick("Testimonials")}
            mobile
          >
            Testimonials
          </NavLink>
          <button
            type="button"
            className="mt-4 w-full bg-white text-riskliBlue-600 px-4 py-2 rounded-full font-medium text-lg transition-all duration-200 shadow-md hover:bg-gray-100"
            onClick={onClose}
          >
            Try App
          </button>
        </div>
      </div>
    </>
  );
};
