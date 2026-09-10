import React from "react";
import Navbar from "../components/biosync/Navbar";
import HeroSection from "../components/biosync/HeroSection";
import WhatIsBioSync from "../components/biosync/WhatIsBioSync";
import HowItWorks from "../components/biosync/HowItWorks";
import PlatformFeatures from "../components/biosync/PlatformFeatures";
import ScientificDifferentials from "../components/biosync/ScientificDifferentials";
import TargetAudience from "../components/biosync/TargetAudience";
import FinalCTA from "../components/biosync/FinalCTA";
import Footer from "../components/biosync/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="lab-grid pointer-events-none fixed inset-0" />
      <div className="relative">
        <Navbar />
        <HeroSection />
        <WhatIsBioSync />
        <HowItWorks />
        <PlatformFeatures />
        <ScientificDifferentials />
        <TargetAudience />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
