import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, GraduationCap, FlaskConical, Building2, Microscope, HeartPulse } from "lucide-react";
import { useLocale } from "@/lib/i18n";

const audienceIcons = [HeartPulse, Stethoscope, Microscope, FlaskConical, GraduationCap, Building2];

export default function TargetAudience() {
  const { t, copy } = useLocale();
  const items = copy.audience.items;

  return (
    <section id="aplicacoes" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary-ink">{t("audience.kicker")}</p>
          <h2 className="font-display mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t("audience.title")}
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-8">
            {t("audience.body")}
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = audienceIcons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-[1.35rem] border border-border bg-surface"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary-ink" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
