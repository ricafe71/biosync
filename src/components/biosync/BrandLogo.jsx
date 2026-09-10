import React from "react";
import bioSyncLogo from "@/assets/BioSync.png";

export default function BrandLogo({ compact = false, className = "" }) {
  return (
    <img
      src={bioSyncLogo}
      alt="BioSync — Bio Inteligência Clínica de Precisão"
      className={`${compact ? "h-8 md:h-9" : "h-11 md:h-12"} w-auto max-w-full object-contain ${className}`}
    />
  );
}
