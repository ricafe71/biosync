import React from "react";
import { Mail } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <BrandLogo compact />

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-gray-400">
            <a href="#plataforma" className="hover:text-gray-600 transition-colors">Plataforma</a>
            <a href="#tecnologia" className="hover:text-gray-600 transition-colors">Tecnologia</a>
            <a href="#ciencia" className="hover:text-gray-600 transition-colors">Ciência</a>
            <a href="#contato" className="hover:text-gray-600 transition-colors">Contato</a>
          </div>

          {/* Email & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <a href="mailto:contato@biosync.app.br" className="flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-500 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              contato@biosync.app.br
            </a>
            <p className="text-xs text-gray-400">
              © 2026 BioSync. Bio-Inteligência Clínica de Precisão.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
