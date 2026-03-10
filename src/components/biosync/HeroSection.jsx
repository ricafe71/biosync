import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

function PlatformMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-teal-200/30 via-transparent to-orange-200/20 blur-3xl rounded-3xl" />
      
      <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
          </div>
          <div className="ml-3 text-[10px] text-gray-400 font-medium tracking-wide">BIOSYNC CLINICAL COPILOT</div>
        </div>

        <div className="p-5 space-y-4">
          {/* Patient header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Caso Clínico</div>
              <div className="text-sm font-semibold text-gray-800 mt-0.5">Paciente #2847 — F, 42 anos</div>
            </div>
            <div className="px-2.5 py-1 bg-teal-50 text-teal-700 text-[10px] font-medium rounded-full">
              Análise completa
            </div>
          </div>

          {/* Omics badges */}
          <div className="flex flex-wrap gap-1.5">
            {["Genômica", "Metabolômica", "Anamnese", "Hemograma"].map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-md font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Recommendation */}
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-4 border border-teal-100">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span className="text-[10px] font-semibold text-teal-700 uppercase tracking-wider">
                Recomendação do Copilot
              </span>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              Suplementação de <span className="font-semibold text-teal-800">Metilfolato 400mcg/dia</span> indicada
              devido ao polimorfismo MTHFR C677T (homozigoto). Associar com B12 metilcobalamina.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[9px] text-gray-400">Referências:</span>
              <span className="px-1.5 py-0.5 bg-orange-50 text-orange-600 text-[9px] rounded font-mono">
                PMID: 32847591
              </span>
              <span className="px-1.5 py-0.5 bg-orange-50 text-orange-600 text-[9px] rounded font-mono">
                PMID: 31458203
              </span>
            </div>
          </div>

          {/* Confidence */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[88%] bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
              </div>
              <span className="text-[10px] text-gray-500">88% confiança</span>
            </div>
            <span className="text-[10px] text-gray-400">3 fontes científicas</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-white" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-gray-900">
              Transforme dados biológicos complexos em{" "}
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                decisões clínicas
              </span>{" "}
              baseadas em evidência
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
              BioSync integra genética, metabolômica, contexto clínico e literatura científica para apoiar
              profissionais de saúde na interpretação de dados multiômicos e na geração de condutas
              nutricionais de precisão.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-7 h-12 text-sm font-medium shadow-lg shadow-teal-600/20"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                Agendar demonstração
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-7 h-12 text-sm font-medium border-gray-200 text-gray-700 hover:bg-gray-50"
                onClick={() => document.getElementById("plataforma")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="w-3.5 h-3.5 mr-2" />
                Explorar plataforma
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-6 text-xs text-gray-400">
              <span>Dados protegidos por criptografia</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>LGPD Compliance</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>PubMed integrado</span>
            </div>
          </motion.div>

          {/* Right — Platform Mock */}
          <div className="lg:pl-8">
            <PlatformMock />
          </div>
        </div>
      </div>
    </section>
  );
}