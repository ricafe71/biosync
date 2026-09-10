import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "./BrandLogo";
import LanguageToggle from "./LanguageToggle";
import { useLocale } from "@/lib/i18n";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLocale();

  const links = [
    { label: t("nav.platform"), href: "#plataforma" },
    { label: t("nav.technology"), href: "#tecnologia" },
    { label: t("nav.science"), href: "#ciencia" },
    { label: t("nav.applications"), href: "#aplicacoes" },
    { label: t("nav.launch"), href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <nav className="mx-auto flex min-h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex min-w-0 items-center" aria-label={t("nav.home")}>
          <BrandLogo compact />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <div className="hidden lg:block">
            <Button
              className="h-9 rounded-md bg-primary px-4 text-xs font-semibold uppercase tracking-[0.08em] text-on-primary shadow-none hover:bg-primary-hover"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("nav.notify")}
            </Button>
          </div>
          <button
            className="lg:hidden p-2 text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t("nav.menu")}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-surface px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full h-10 rounded-md bg-primary text-xs font-semibold uppercase tracking-[0.08em] text-on-primary hover:bg-primary-hover mt-2"
            onClick={() => {
              setMobileOpen(false);
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("nav.notify")}
          </Button>
        </div>
      )}
    </header>
  );
}
