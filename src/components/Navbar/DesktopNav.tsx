"use client";

import React from "react";
import { NAV_LINKS } from "@/utils/constants";
import { NavLink } from "./NavLink";

export const DesktopNav: React.FC = () => {
  return (
    <div className="hidden md:flex space-x-8">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.label} href={link.href} label={link.label} />
      ))}
    </div>
  );
};
