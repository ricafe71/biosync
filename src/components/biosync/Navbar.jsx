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
    <header className="sticky top-3 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="flex min-h-[4.75rem] items-center justify-between gap-3 rounded-full border border-border bg-surface/90 px-4 py-3 backdrop-blur-xl sm:px-6">
        <a href="#" className="inline-flex min-w-0 items-center" aria-label={t("nav.home")}>
          <BrandLogo compact />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <div className="hidden lg:block">
            <Button
              className="h-10 rounded-full bg-primary px-5 text-sm font-semibold text-on-primary shadow-none hover:bg-primary-hover"
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
        <div className="mt-2 lg:hidden rounded-[1.5rem] border border-border bg-surface px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full h-10 rounded-full bg-primary text-sm font-semibold text-on-primary hover:bg-primary-hover mt-2"
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
