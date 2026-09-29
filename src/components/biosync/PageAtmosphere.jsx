import React from "react";
import DataFlow from "./DataFlow";

// Atmosfera das rotas autenticadas do produto (BioSyncAtmosphere, intensidade
// "workspace", cena clínica, tema claro): os mesmos recortes WebP do hero, fixos
// na viewport e em opacidade baixa, para o conteúdo continuar dominante.
// Estilos em index.css, sob .biosync-page-atmosphere.
export default function PageAtmosphere() {
  return (
    <div className="biosync-page-atmosphere" aria-hidden>
      <div className="biosync-atm-glows" />
      <div className="biosync-atm-clinical-scene">
        <img className="biosync-atm-clinical-raster biosync-atm-clinical-dna" src="/visual-system-v2/biosync-dna-atmosphere-v2.webp" alt="" decoding="async" />
        <img className="biosync-atm-clinical-raster biosync-atm-clinical-molecular" src="/visual-system-v2/biosync-molecular-atmosphere-v2.webp" alt="" decoding="async" />
        <img className="biosync-atm-clinical-raster biosync-atm-clinical-wave" src="/visual-system-v2/biosync-biological-wave-v2.webp" alt="" decoding="async" />
      </div>
      <DataFlow className="biosync-atm-dataflow-clinical" />
      <div className="biosync-atm-particles-clinical" />
      <div className="biosync-atm-noise-clinical" />
    </div>
  );
}
