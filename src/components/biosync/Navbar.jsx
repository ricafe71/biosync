import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Plataforma", href: "#plataforma" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Ciência", href: "#ciencia" },
    { label: "Aplicações", href: "#aplicacoes" },
    { label: "Lançamento", href: "#contato" },
  ];

  return (
    <header className="sticky top-3 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="flex min-h-[4.75rem] items-center justify-between gap-4 rounded-full border border-border bg-surface/90 px-5 py-3 backdrop-blur-xl sm:px-6">
        <a href="#" className="inline-flex min-w-0 items-center" aria-label="BioSync — início">
          <BrandLogo compact />
        </a>

        <div className="hidden lg:flex items-center gap-7">
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

        <div className="hidden lg:block">
          <Button
            className="h-10 rounded-full bg-primary px-6 text-sm font-semibold text-on-primary shadow-none hover:bg-primary-hover"
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
          >
            Avisar-me no lançamento
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-muted-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
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
            Avisar-me no lançamento
          </Button>
        </div>
      )}
    </header>
  );
}
