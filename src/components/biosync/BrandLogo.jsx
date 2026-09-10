import React from "react";
import bioSyncLogo from "@/assets/biosync-logo-transparent.png";

export default function BrandLogo({ compact = false, className = "" }) {
  return (
    <img
      src={bioSyncLogo}
      alt="BioSync — Bio Inteligência Clínica de Precisão"
      className={`${compact ? "h-9" : "h-12 md:h-14"} w-auto max-w-full object-contain brightness-110 ${className}`}
    />
  );
}
