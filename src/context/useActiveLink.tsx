"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ActiveLinkContextType {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const ActiveLinkContext = createContext<ActiveLinkContextType | undefined>(
  undefined
);

export const ActiveLinkProvider = ({ children }: { children: ReactNode }) => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export const useActiveLink = () => {
  const context = useContext(ActiveLinkContext);
  if (!context) {
    throw new Error("useActiveLink must be used within an ActiveLinkProvider");
  }
  return context;
};
