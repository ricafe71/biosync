import React from "react";
import bioSyncLogo from "@/assets/BioSync.png";

export default function BrandLogo({ compact = false, className = "" }) {
  return (
    <img
      src={bioSyncLogo}
      alt="BioSync"
      className={`${compact ? "h-7 md:h-8" : "h-14 md:h-[72px]"} w-auto object-contain ${className}`}
    />
  );
}
