import React from "react";
import { useLocale } from "@/lib/i18n";

function FlagBR({ className = "h-3.5 w-5" }) {
  return (
    <svg viewBox="0 0 20 14" className={`${className} overflow-hidden`} aria-hidden>
      <rect width="20" height="14" fill="#009b3a" />
      <polygon points="10,1.6 18.2,7 10,12.4 1.8,7" fill="#fedd00" />
      <circle cx="10" cy="7" r="2.7" fill="#002776" />
    </svg>
  );
}

function FlagUS({ className = "h-3.5 w-5" }) {
  return (
    <svg viewBox="0 0 20 14" className={`${className} overflow-hidden`} aria-hidden>
      <rect width="20" height="14" fill="#bf0a30" />
      {[2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y} width="20" height="1" fill="#fff" />
      ))}
      <rect width="8.5" height="7.5" fill="#002868" />
    </svg>
  );
}

export default function LanguageToggle({ className = "" }) {
  const { locale, setLocale } = useLocale();

  const optionClass = (code) =>
    `inline-flex items-center gap-1.5 px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.12em] transition-colors ${
      locale === code
        ? "bg-primary text-on-primary"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <div
      className={`inline-flex items-center overflow-hidden border border-border bg-surface ${className}`}
      role="group"
      aria-label="Language"
    >
      <button type="button" className={optionClass("pt")} onClick={() => setLocale("pt")} aria-pressed={locale === "pt"} aria-label="Português">
        <FlagBR />
        PT
      </button>
      <button type="button" className={optionClass("en")} onClick={() => setLocale("en")} aria-pressed={locale === "en"} aria-label="English">
        <FlagUS />
        EN
      </button>
    </div>
  );
}
