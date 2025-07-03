"use client";

import { FOOTER_LINKS } from "@/utils/constants";
import React from "react";

interface FooterLinksProps {
  scrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => void;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ scrollToSection }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 font-medium">
      {FOOTER_LINKS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => scrollToSection(e, item.sectionId)}
          className="cursor-pointer text-black transition-colors hover:text-riskliBlue-600"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
