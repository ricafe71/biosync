import React from "react";
import { motion } from "framer-motion";
import { Dna, BrainCircuit, ShieldCheck, FileText } from "lucide-react";
import { useLocale } from "@/lib/i18n";

const pillarIcons = [Dna, BrainCircuit, ShieldCheck, FileText];
const pillarTones = ["primary", "accent", "primary", "accent"];

export default function WhatIsBioSync() {
  const { t, copy } = useLocale();
  const pillars = copy.what.pillars;

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
          <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-primary-ink">{t("what.kicker")}</p>
          <h2 className="font-sans mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t("what.title")}
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-8">
            {t("what.bodyBefore")}
            <span className="text-foreground font-medium">{t("what.bodyHighlight")}</span>
            {t("what.bodyAfter")}
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            const isPrimary = pillarTones[i] === "primary";
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative p-6 rounded-md border border-border bg-surface hover:border-primary/40 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-md flex items-center justify-center ${
                    isPrimary ? "bg-primary-soft" : "bg-surface-strong"
                  }`}
                >
                  <Icon className="w-5 h-5 text-primary-ink" />
                </div>
                <h3 className="font-sans mt-4 text-base font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
