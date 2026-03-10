import React from "react";
import { motion } from "framer-motion";
import { Dna, BrainCircuit, ShieldCheck, FileText } from "lucide-react";

const pillars = [
  {
    icon: Dna,
    title: "Integração multiômica",
    description: "Genômica, metabolômica e dados clínicos conectados em uma única plataforma.",
    color: "teal",
  },
  {
    icon: BrainCircuit,
    title: "Clinical Copilot",
    description: "Inteligência artificial que analisa dados e sugere condutas baseadas em evidência.",
    color: "orange",
  },
  {
    icon: ShieldCheck,
    title: "Governança científica",
    description: "Sistema de curadoria e validação de evidências com rastreabilidade completa.",
    color: "teal",
  },
  {
    icon: FileText,
    title: "Relatórios institucionais",
    description: "Documentos profissionais estruturados para pacientes e pesquisa clínica.",
    color: "orange",
  },
];

export default function WhatIsBioSync() {
  return (
    <section id="plataforma" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold text-teal-600 tracking-wide uppercase">A plataforma</p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            O que é BioSync
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            Uma infraestrutura clínica que conecta dados multiômicos, anamnese, exames laboratoriais,
            evidência científica e inteligência artificial para apoiar{" "}
            <span className="text-gray-700 font-medium">decisões clínicas complexas</span> com
            rastreabilidade e precisão.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isTeal = pillar.color === "teal";
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isTeal ? "bg-teal-50" : "bg-orange-50"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isTeal ? "text-teal-600" : "text-orange-500"}`} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}