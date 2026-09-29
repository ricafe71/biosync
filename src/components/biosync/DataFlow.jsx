import React from "react";

// Trajetórias orbitais de BioSyncAtmosphere (DataFlow), iguais às do produto.
// A cor vem de `currentColor`; opacidade e recorte ficam no CSS de quem usa.
export default function DataFlow({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 1600 900" fill="none" preserveAspectRatio="none" aria-hidden>
      <path d="M-100 520C260 250 610 245 910 430C1190 604 1410 520 1710 215" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.8" />
      <path d="M-70 690C300 425 640 450 935 625C1190 775 1435 680 1680 405" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.35" strokeDasharray="5 12" />
      <path d="M80 390C390 190 675 210 980 350C1240 470 1450 370 1600 205" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.3" />
      {[[285, 370], [500, 318], [795, 372], [1080, 516], [1320, 526], [1460, 435]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4.2 : 2.8} fill="currentColor" fillOpacity="0.7" />
      ))}
    </svg>
  );
}
