import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState("Avisar no lançamento");

  const openModal = (subject) => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  return (
    <section id="contato" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-8 py-16 lg:px-16 lg:py-24"
        >
          <div className="pointer-events-none absolute inset-0 theme-ambient" />

          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-soft rounded-full mb-6 border border-primary/20">
              <Lock className="w-3.5 h-3.5 text-primary-ink" />
              <span className="font-mono text-xs font-medium text-primary-ink">Ainda em silêncio clínico</span>
            </div>

            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              A BioSync entra no ar em breve
            </h2>

            <p className="mt-5 text-muted-foreground text-lg leading-8">
              Não há portas abertas, demonstrações nem acesso antecipado — o público ainda não
              foi chamado. Quando a plataforma sair dos bastidores, quem deixar o nome aqui
              será avisado. Até lá, o resto continua confidencial.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <Button
                onClick={() => openModal("Avisar no lançamento")}
                className="bg-primary hover:bg-primary-hover text-on-primary rounded-full px-7 h-12 text-sm font-semibold shadow-none"
              >
                Deixar meu nome
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => openModal("Parceria ou imprensa")}
                variant="outline"
                className="rounded-full px-7 h-12 text-sm font-semibold border-border bg-transparent text-foreground hover:bg-surface-strong hover:text-foreground"
              >
                Parceria ou imprensa
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
