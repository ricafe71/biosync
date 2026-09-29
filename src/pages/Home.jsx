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
import PageAtmosphere from "../components/biosync/PageAtmosphere";

export default function Home() {
  // A atmosfera fica fora do wrapper: é fixa na viewport e o conteúdo, posicionado,
  // pinta por cima. O hero cobre a sua parte com o próprio fundo escuro.
  return (
    <>
      <PageAtmosphere />
      <div className="relative min-h-screen overflow-x-hidden text-foreground">
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
    </>
  );
}
