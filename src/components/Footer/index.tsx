"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { SOCIAL_LINKS } from "@/utils/constants";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const pathname = usePathname();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (sectionId === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState({}, "", pathname);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      window.history.pushState({}, "", `${pathname}#${sectionId}`);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full bg-white px-6 pt-4 sm:px-12">
      <div className="mb-6 flex w-full items-center">
        <div className="h-3 w-24 rounded-full bg-[#4FC3F7]"></div>
        <div className="-ml-px h-1 flex-1 rounded-full bg-[#4FC3F7]"></div>
      </div>

      <div className="w-full px-4 sm:px-8">
        <div className="flex flex-col gap-8 border-b border-gray-200 pb-4 md:flex-row md:items-center md:justify-between">
          <div className="mb-4 flex justify-center md:mb-0 md:justify-start">
            <Logo />
          </div>

          <FooterLinks scrollToSection={scrollToSection} />

          <div className="flex justify-center gap-6 md:justify-end">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                className="text-black transition-colors hover:text-riskliBlue-600"
              >
                <Image
                  src={link.src}
                  alt={link.alt}
                  width={link.width}
                  height={link.height}
                  className="h-5 w-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between py-6 font-[400] md:flex-row">
          <p className="mb-4 text-sm text-gray-600 md:mb-0">
            © 2025 Civil Security AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-riskliBlue-600"
            >
              Terms of Services
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-riskliBlue-600"
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
