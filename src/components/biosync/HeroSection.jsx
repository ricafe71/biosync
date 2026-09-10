import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { useLocale } from "@/lib/i18n";

function PlatformMock() {
  const { copy } = useLocale();
  const mock = copy.mock;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className="relative bg-surface border border-border shadow-panel overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-soft">
          <div className="font-mono text-[10px] text-subtle tracking-[0.16em]">BIOSYNC CLINICAL COPILOT</div>
          <div className="ml-auto border border-foreground bg-foreground px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-background">
            {mock.soon}
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] text-primary-ink uppercase tracking-[0.18em]">{mock.case}</div>
              <div className="text-sm font-semibold text-foreground mt-0.5">{mock.patient}</div>
            </div>
            <div className="px-2 py-0.5 bg-primary-soft text-primary-ink font-mono text-[10px] font-medium">
              {mock.preview}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {mock.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-surface-soft text-muted-foreground font-mono text-[10px] border border-border">
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-primary-soft/70 p-4 border border-border">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="font-mono text-[10px] font-semibold text-primary-ink uppercase tracking-[0.16em]">
                {mock.recLabel}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {mock.recBodyBefore}<span className="font-semibold text-foreground">{mock.recHighlight}</span>{mock.recBodyAfter}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="font-mono text-[9px] text-subtle">{mock.refs}</span>
              <span className="px-1.5 py-0.5 border border-border bg-surface text-primary-ink font-mono text-[9px]">
                PMID: 32847591
              </span>
              <span className="px-1.5 py-0.5 border border-border bg-surface text-primary-ink font-mono text-[9px]">
                PMID: 31458203
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <div className="h-1 w-24 bg-surface-strong overflow-hidden">
                <div className="h-full w-[88%] bg-primary" />
              </div>
              <span className="font-mono text-[10px] text-subtle">{mock.confidence}</span>
            </div>
            <span className="font-mono text-[10px] text-subtle">{mock.sources}</span>
          </div>

          <p className="pt-1 font-mono text-[10px] text-subtle tracking-wide">
            {mock.footnote}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative pt-16 lg:pt-24 pb-20 lg:pb-28">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-primary-ink">
              {t("hero.kicker")}
            </p>

            <div className="mt-5 w-fit border border-border bg-surface px-5 py-4 shadow-panel">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle">INSTRUMENT / CLINICAL</p>
              <h1 className="mt-1 text-[2.6rem] leading-[0.95] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.75rem] font-semibold">
                Bio<span className="text-subtle">/</span>Sync
              </h1>
            </div>

            <div className="flex w-fit items-center gap-2 mt-5 border border-border bg-surface px-3 py-1.5">
              <span className="h-1.5 w-1.5 bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-wide text-primary-ink">
                {t("hero.badge")}
              </span>
            </div>

            <p className="mt-6 text-lg text-muted-foreground leading-8 max-w-xl">
              {t("hero.body")}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button
                className="bg-primary hover:bg-primary-hover text-on-primary rounded-md px-6 h-11 text-sm font-semibold shadow-none"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("hero.notify")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="rounded-md px-6 h-11 text-sm font-semibold border-border bg-surface text-foreground hover:bg-surface-strong hover:text-foreground"
                onClick={() => document.getElementById("plataforma")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Eye className="w-3.5 h-3.5 mr-2" />
                {t("hero.peek")}
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
              <span>{t("hero.trustEncrypt")}</span>
              <span className="hidden sm:inline text-border">/</span>
              <span>{t("hero.trustLgpd")}</span>
              <span className="hidden sm:inline text-border">/</span>
              <span>{t("hero.trustPubmed")}</span>
            </div>
          </motion.div>

          <div className="lg:pl-8">
            <PlatformMock />
          </div>
        </div>
      </div>
    </section>
  );
}
