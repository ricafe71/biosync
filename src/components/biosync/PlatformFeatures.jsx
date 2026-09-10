import React from "react";
import { motion } from "framer-motion";
import { Microscope, BookOpen, ShieldAlert, FlaskConical, Cloud, Workflow } from "lucide-react";
import { useLocale } from "@/lib/i18n";

const featureIcons = [Microscope, BookOpen, ShieldAlert, FlaskConical, Cloud, Workflow];

export default function PlatformFeatures() {
  const { t, copy } = useLocale();
  const features = copy.features.items;

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
          <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ember">{t("features.kicker")}</p>
          <h2 className="font-sans mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t("features.title")}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-14 bg-ember" />
          <p className="mt-5 text-muted-foreground text-lg leading-8">
            {t("features.body")}
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative p-6 rounded-md border border-border bg-surface hover:bg-surface-strong transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-md bg-primary-soft flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary-ink" />
                </div>
                <h3 className="font-sans text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
