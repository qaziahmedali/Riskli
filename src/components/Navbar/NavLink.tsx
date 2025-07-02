"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

interface NavLinkProps {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  mobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  active,
  onClick,
  children,
  mobile = false,
}) => {
  const baseClasses = mobile
    ? `text-white font-medium text-xl py-2 ${active ? "font-bold" : ""}`
    : `text-gray-600 font-medium relative pb-1 transition-colors ${
        active
          ? 'text-riskliBlue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-riskliBlue-500 after:scale-x-100'
          : "hover:text-riskliBlue-600"
      }`;

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === '#') {
      // For home link, scroll to top and clear hash
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState({}, '', pathname);
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.substring(1);
      // Update URL without page reload
      window.history.pushState({}, '', `${pathname}${href}`);
      scrollToSection(e, sectionId);
    }
    onClick();
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick} 
      className={`${baseClasses} cursor-pointer`}
    >
      {children}
    </Link>
  );
};
