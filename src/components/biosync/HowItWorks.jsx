import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Search, Sparkles, FileOutput } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Estruture o caso clínico",
    description: "Paciente, exames multiômicos e anamnese são integrados em um perfil unificado.",
  },
  {
    num: "02",
    icon: Search,
    title: "Descubra evidências científicas",
    description: "Busca inteligente em PubMed com curadoria científica automatizada e validação.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Gere recomendações clínicas",
    description: "O Copilot analisa dados multiômicos e sugere condutas nutricionais baseadas em evidência.",
  },
  {
    num: "04",
    icon: FileOutput,
    title: "Entregue relatórios profissionais",
    description: "Relatórios estruturados prontos para pacientes, pesquisa ou apresentação clínica.",
  },
];

export default function HowItWorks() {
  return (
    <section id="tecnologia" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary-ink">Fluxo clínico</p>
          <h2 className="font-display mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            Como funciona
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-8">
            O fluxo que estamos calibrando nos bastidores — do dado bruto à conduta clínica.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] w-[calc(100%_-_24px)] h-px">
                    <div className="w-full h-px bg-gradient-to-r from-primary/40 to-transparent" />
                  </div>
                )}

                <div className="relative bg-surface rounded-[1.35rem] p-6 border border-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-ink" />
                    </div>
                    <span className="font-mono text-2xl font-semibold text-primary-ink/30">{step.num}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
