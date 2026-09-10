import React from "react";
import { motion } from "framer-motion";
import { Dna, BrainCircuit, ShieldCheck, FileText } from "lucide-react";

const pillars = [
  {
    icon: Dna,
    title: "Integração multiômica",
    description: "Genômica, metabolômica e dados clínicos conectados em uma única plataforma.",
    tone: "primary",
  },
  {
    icon: BrainCircuit,
    title: "Clinical Copilot",
    description: "Inteligência artificial que analisa dados e sugere condutas baseadas em evidência.",
    tone: "accent",
  },
  {
    icon: ShieldCheck,
    title: "Governança científica",
    description: "Sistema de curadoria e validação de evidências com rastreabilidade completa.",
    tone: "primary",
  },
  {
    icon: FileText,
    title: "Relatórios institucionais",
    description: "Documentos profissionais estruturados para pacientes e pesquisa clínica.",
    tone: "accent",
  },
];

export default function WhatIsBioSync() {
  return (
    <section id="plataforma" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary-ink">O que está por vir</p>
          <h2 className="font-display mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            O que é BioSync
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-8">
            Uma infraestrutura clínica que conecta dados multiômicos, anamnese, exames laboratoriais,
            evidência científica e inteligência artificial para apoiar{" "}
            <span className="text-foreground font-medium">decisões clínicas complexas</span> com
            rastreabilidade e precisão.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isPrimary = pillar.tone === "primary";
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative p-6 rounded-[1.35rem] border border-border bg-surface hover:border-primary/30 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isPrimary ? "bg-primary-soft" : "bg-accent/15"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isPrimary ? "text-primary-ink" : "text-accent"}`} />
                </div>
                <h3 className="font-display mt-4 text-base font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
