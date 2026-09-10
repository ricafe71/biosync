import React from "react";
import { motion } from "framer-motion";
import { Microscope, BookOpen, ShieldAlert, FlaskConical, Cloud, Workflow } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Interpretação clínica",
    description: "Converte dados multiômicos em recomendações nutricionais acionáveis e personalizadas.",
  },
  {
    icon: BookOpen,
    title: "Explicabilidade científica",
    description: "Cada recomendação é rastreável por PMID com referências científicas verificáveis.",
  },
  {
    icon: ShieldAlert,
    title: "Guardrails clínicos",
    description: "Sistema de segurança inteligente para evitar recomendações inadequadas ou conflitantes.",
  },
  {
    icon: FlaskConical,
    title: "Curadoria científica",
    description: "Gestão de evidência com staging, validação e controle de qualidade integrados.",
  },
  {
    icon: Cloud,
    title: "Arquitetura SaaS",
    description: "Multi-profissionais, multi-pacientes e versionamento completo de relatórios.",
  },
  {
    icon: Workflow,
    title: "Fluxo clínico integrado",
    description: "Paciente, evidência e análise em um único ambiente — sem fragmentação de dados.",
  },
];

export default function PlatformFeatures() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary-ink">Bastidores</p>
          <h2 className="font-display mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            Recursos da plataforma
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-8">
            Ferramentas avançadas para profissionais que exigem precisão, rastreabilidade e escalabilidade.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative p-6 rounded-[1.35rem] border border-border bg-surface hover:bg-surface-strong transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary-ink" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
