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
    <div className="min-h-screen bg-white antialiased">
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
  );
}