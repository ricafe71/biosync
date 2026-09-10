import React from "react";
import { Mail } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <BrandLogo compact />

          <div className="flex items-center gap-8 text-sm text-subtle">
            <a href="#plataforma" className="hover:text-foreground transition-colors">Plataforma</a>
            <a href="#tecnologia" className="hover:text-foreground transition-colors">Tecnologia</a>
            <a href="#ciencia" className="hover:text-foreground transition-colors">Ciência</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Lançamento</a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <a href="mailto:contato@biosync.app.br" className="flex items-center gap-1.5 text-sm text-primary-ink hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              contato@biosync.app.br
            </a>
            <p className="text-xs text-subtle">
              © 2026 BioSync. Ainda não aberta ao público.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
