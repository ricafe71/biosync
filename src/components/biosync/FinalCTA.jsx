import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import ContactFormModal from "./ContactFormModal";
import { useLocale } from "@/lib/i18n";

export default function FinalCTA() {
  const { t } = useLocale();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState("notify");

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
          className="relative border border-border bg-surface px-8 py-16 lg:px-16 lg:py-24"
        >
          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-soft mb-6 border border-border">
              <Lock className="w-3.5 h-3.5 text-primary-ink" />
              <span className="font-mono text-xs font-medium text-primary-ink">{t("cta.badge")}</span>
            </div>

            <h2 className="font-sans text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              {t("cta.title")}
            </h2>

            <p className="mt-5 text-muted-foreground text-lg leading-8">
              {t("cta.body")}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <Button
                onClick={() => openModal("notify")}
                className="bg-primary hover:bg-primary-hover text-on-primary rounded-md px-7 h-11 text-sm font-semibold shadow-none"
              >
                {t("cta.leaveName")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => openModal("press")}
                variant="outline"
                className="rounded-md px-7 h-11 text-sm font-semibold border-border bg-surface text-foreground hover:bg-surface-strong hover:text-foreground"
              >
                {t("cta.press")}
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
