import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const differentials = [
  "Integração genética + metabolômica em um único pipeline",
  "Evidência PubMed integrada com busca inteligente",
  "Sistema de governança científica com validação em etapas",
  "Explicabilidade completa de cada recomendação (PMID)",
  "Arquitetura projetada para pesquisa clínica e publicação",
];

export default function ScientificDifferentials() {
  return (
    <section id="ciencia" className="py-24 lg:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Diferenciais</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Diferenciais científicos
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              BioSync não é um chatbot genérico. É uma infraestrutura científica projetada para profissionais
              que precisam de rastreabilidade, governança e precisão clínica.
            </p>

            <div className="mt-10 space-y-4">
              {differentials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full border border-teal-100 animate-[spin_60s_linear_infinite]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border border-orange-100 animate-[spin_45s_linear_infinite_reverse]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-teal-50 to-orange-50" />
              </div>

              {/* Floating badges */}
              <div className="absolute top-12 right-8 bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 px-3 py-2">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Genômica</div>
                <div className="text-xs font-semibold text-teal-700 mt-0.5">MTHFR · COMT · VDR</div>
              </div>

              <div className="absolute bottom-16 left-4 bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 px-3 py-2">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Metabolômica</div>
                <div className="text-xs font-semibold text-orange-600 mt-0.5">Homocisteína · B12 · Folato</div>
              </div>

              <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 px-3 py-2">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">PubMed</div>
                <div className="text-xs font-semibold text-gray-700 mt-0.5">2,847 artigos indexados</div>
              </div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 3v18M15 3v18M9 9h6M9 15h6" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}