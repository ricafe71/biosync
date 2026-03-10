import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState("Agendar demonstração");

  const openModal = (subject) => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 px-8 py-16 lg:px-16 lg:py-24"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
              <Zap className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-xs font-medium text-teal-300">Acesso antecipado disponível</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              A próxima geração da nutrição baseada em evidência
            </h2>

            <p className="mt-5 text-gray-400 text-lg leading-relaxed">
              BioSync conecta ciência, inteligência artificial e dados biológicos para apoiar
              decisões clínicas mais precisas, rastreáveis e escaláveis.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <Button
                onClick={() => openModal("Agendar demonstração")}
                className="bg-teal-500 hover:bg-teal-400 text-white rounded-full px-7 h-12 text-sm font-medium shadow-lg shadow-teal-500/20"
              >
                Agendar demonstração
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => openModal("Solicitar acesso antecipado")}
                variant="outline"
                className="rounded-full px-7 h-12 text-sm font-medium border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Solicitar acesso antecipado
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        subject={modalSubject}
      />
    </section>
  );
}