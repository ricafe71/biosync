import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Search, Sparkles, FileOutput } from "lucide-react";
import { useLocale } from "@/lib/i18n";

const stepIcons = [ClipboardList, Search, Sparkles, FileOutput];
const stepNums = ["01", "02", "03", "04"];

export default function HowItWorks() {
  const { t, copy } = useLocale();
  const steps = copy.how.steps;

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
          <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ember">{t("how.kicker")}</p>
          <h2 className="font-sans mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t("how.title")}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-14 bg-ember" />
          <p className="mt-5 text-muted-foreground text-lg leading-8">
            {t("how.body")}
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={stepNums[i]}
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

                <div className="relative bg-surface rounded-md p-6 border border-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-md bg-primary-soft flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-ink" />
                    </div>
                    <span className="font-mono text-2xl font-semibold text-primary-ink/30">{stepNums[i]}</span>
                  </div>
                  <h3 className="font-sans text-base font-semibold text-foreground">{step.title}</h3>
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
