import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Plataforma", href: "#plataforma" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Ciência", href: "#ciencia" },
    { label: "Aplicações", href: "#aplicacoes" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <BrandLogo />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6 h-10 text-sm font-medium shadow-none"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar demonstração
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full h-10 text-sm font-medium mt-2"
            onClick={() => {
              setMobileOpen(false);
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Solicitar demonstração
          </Button>
        </div>
      )}
    </nav>
  );
}
