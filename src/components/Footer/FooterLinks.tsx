// FooterLinks.tsx
'use client';

import { FOOTER_LINKS } from '@/utils/constants';
import React from 'react';
import { useActiveLink } from '@/context/useActiveLink';

interface FooterLinksProps {
  scrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => void;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ scrollToSection }) => {
  const { activeLink, setActiveLink } = useActiveLink();

  return (
    <div className='flex flex-wrap justify-center gap-8 font-medium'>
      {FOOTER_LINKS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => {
            scrollToSection(e, item.sectionId);
            setActiveLink(item.label);
          }}
          className={`cursor-pointer transition-colors ${
            activeLink === item.label
              ? "text-riskliBlue-600 after:content-[''] after:block after:w-full after:h-0.5 after:bg-riskliBlue-500"
              : 'text-black hover:text-riskliBlue-600'
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
