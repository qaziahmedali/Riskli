import React from "react";
import { HeroSection, HowItWorks, Features } from "@/components/sections";
import { Navbar } from "@/components/Navbar";
import WhyUs from "@/components/sections/WhyUs";
import TestimonialsSection from "@/components/sections/Testimonials";
import { Download } from "lucide-react";
import DownloadSection from "@/components/sections/DownloadSection";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <WhyUs />
      <DownloadSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
