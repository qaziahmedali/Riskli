"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useActiveLink } from "@/context/useActiveLink";

const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string
) => {
  e.preventDefault();
  if (sectionId === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

interface NavLinkProps {
  href: string;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  mobile = false,
  onClick,
}) => {
  const { activeLink, setActiveLink } = useActiveLink();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState({}, "", pathname);
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.substring(1);
      window.history.pushState({}, "", `${pathname}${href}`);
      scrollToSection(e, sectionId);
    }
    setActiveLink(label);
    if (onClick) onClick();
  };

  const baseClasses = mobile
    ? `text-white font-medium text-xl py-2 ${
        activeLink === label ? "font-bold" : ""
      }`
    : `text-gray-600 font-medium relative pb-1 transition-colors ${
        activeLink === label
          ? 'text-riskliBlue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-riskliBlue-500 after:scale-x-100'
          : "hover:text-riskliBlue-600"
      }`;

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${baseClasses} cursor-pointer`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
