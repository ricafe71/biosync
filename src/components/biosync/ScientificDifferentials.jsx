import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLocale } from "@/lib/i18n";

export default function ScientificDifferentials() {
  const { t, copy } = useLocale();
  const items = copy.science.items;

  return (
    <section id="ciencia" className="py-24 lg:py-32 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary-ink">{t("science.kicker")}</p>
            <h2 className="font-display mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              {t("science.title")}
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-8">
              {t("science.body")}
            </p>

            <div className="mt-10 space-y-4">
              {items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-ink" />
                  </div>
                  <span className="text-foreground/90 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full border border-primary/25 animate-[spin_60s_linear_infinite]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border border-accent/25 animate-[spin_45s_linear_infinite_reverse]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-soft to-accent/20" />
              </div>

              <div className="absolute top-12 right-8 bg-surface rounded-xl border border-border px-3 py-2">
                <div className="font-mono text-[10px] text-primary-ink uppercase tracking-[0.16em]">{t("science.genomics")}</div>
                <div className="text-xs font-semibold text-foreground mt-0.5">MTHFR · COMT · VDR</div>
              </div>

              <div className="absolute bottom-16 left-4 bg-surface rounded-xl border border-border px-3 py-2">
                <div className="font-mono text-[10px] text-accent uppercase tracking-[0.16em]">{t("science.metabolomics")}</div>
                <div className="text-xs font-semibold text-foreground mt-0.5">Homocisteína · B12 · Folato</div>
              </div>

              <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-surface rounded-xl border border-border px-3 py-2">
                <div className="font-mono text-[10px] text-subtle uppercase tracking-[0.16em]">PubMed</div>
                <div className="text-xs font-semibold text-foreground mt-0.5">{t("science.indexed")}</div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-panel">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-on-primary" fill="none" stroke="currentColor" strokeWidth="2">
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
