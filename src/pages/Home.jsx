import React from "react";
import Navbar from "../components/biosync/Navbar";
import HeroSection from "../components/biosync/HeroSection";
import WhatIsBioSync from "../components/biosync/WhatIsBioSync";
import HowItWorks from "../components/biosync/HowItWorks";
import PlatformFeatures from "../components/biosync/PlatformFeatures";
import ScientificDifferentials from "../components/biosync/ScientificDifferentials";
import MediaLibrary from "../components/biosync/MediaLibrary";
import TargetAudience from "../components/biosync/TargetAudience";
import FinalCTA from "../components/biosync/FinalCTA";
import Footer from "../components/biosync/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden text-foreground">
      <Navbar />
      <HeroSection />
      <WhatIsBioSync />
      <HowItWorks />
      <PlatformFeatures />
      <ScientificDifferentials />
      <MediaLibrary />
      <TargetAudience />
      <FinalCTA />
      <Footer />
    </div>
  );
}
