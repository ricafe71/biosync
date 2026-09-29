import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { useLocale } from "@/lib/i18n";

// Atmosfera do produto (BioSyncAtmosphere, intensidade "hero", variante "default",
// tema escuro). Mesmos recortes WebP e trajetórias; estilos em index.css.
function ScienceBackdrop() {
  return (
    <div className="biosync-hero-atmosphere absolute inset-0 overflow-hidden" aria-hidden>
      <div className="biosync-atm-glows" />
      <div className="biosync-atm-volumetric">
        <img className="biosync-atm-raster biosync-atm-raster-dna" src="/visual-system-v2/biosync-dna-atmosphere-v2.webp" alt="" decoding="async" />
        <img className="biosync-atm-raster biosync-atm-raster-molecular" src="/visual-system-v2/biosync-molecular-atmosphere-v2.webp" alt="" decoding="async" />
        <img className="biosync-atm-raster biosync-atm-raster-wave" src="/visual-system-v2/biosync-biological-wave-v2.webp" alt="" decoding="async" />
      </div>
      <svg className="biosync-atm-dataflow" viewBox="0 0 1600 900" fill="none" preserveAspectRatio="none">
        <path d="M-100 520C260 250 610 245 910 430C1190 604 1410 520 1710 215" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.8" />
        <path d="M-70 690C300 425 640 450 935 625C1190 775 1435 680 1680 405" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.35" strokeDasharray="5 12" />
        <path d="M80 390C390 190 675 210 980 350C1240 470 1450 370 1600 205" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.3" />
        {[[285, 370], [500, 318], [795, 372], [1080, 516], [1320, 526], [1460, 435]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4.2 : 2.8} fill="currentColor" fillOpacity="0.7" />
        ))}
      </svg>
      <div className="biosync-atm-particles" />
      <div className="biosync-atm-bokeh" />
      <div className="biosync-atm-noise" />
      <div className="biosync-atm-foreground-light" />
    </div>
  );
}

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
      <div className="relative bg-white border border-white/20 shadow-panel overflow-hidden rounded-[24px]">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-soft">
          <div className="font-mono text-[10px] text-subtle tracking-[0.16em]">BIOSYNC CLINICAL COPILOT</div>
          <div className="ml-auto rounded-full bg-navy px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-white">
            {mock.soon}
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] text-primary uppercase tracking-[0.18em]">{mock.case}</div>
              <div className="text-sm font-semibold text-navy mt-0.5">{mock.patient}</div>
            </div>
            <div className="rounded-full px-2.5 py-0.5 bg-primary-soft text-navy font-mono text-[10px] font-medium">
              {mock.preview}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {mock.tags.map((tag) => (
              <span key={tag} className="rounded-full px-2.5 py-0.5 bg-surface-soft text-subtle font-mono text-[10px] border border-border">
                {tag}
              </span>
            ))}
          </div>

          <div className="rounded-2xl bg-primary-soft/80 p-4 border border-primary/20">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="font-mono text-[10px] font-semibold text-navy uppercase tracking-[0.16em]">
                {mock.recLabel}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {mock.recBodyBefore}<span className="font-semibold text-navy">{mock.recHighlight}</span>{mock.recBodyAfter}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="font-mono text-[9px] text-subtle">{mock.refs}</span>
              <span className="rounded-full px-2 py-0.5 border border-ember/40 bg-ember-soft text-ember-ink font-mono text-[9px]">
                PMID: 32847591
              </span>
              <span className="rounded-full px-2 py-0.5 border border-ember/40 bg-ember-soft text-ember-ink font-mono text-[9px]">
                PMID: 31458203
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <div className="h-1 w-24 bg-surface-strong overflow-hidden">
                <div className="h-full w-[88%] bg-gradient-to-r from-primary to-ember" />
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
    <section className="relative min-h-[34rem] lg:min-h-[36rem] overflow-hidden">
      <ScienceBackdrop />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-primary-ink-dark">
              {t("hero.kicker")}
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] tracking-[-0.03em] font-semibold text-white">
              Bio<span className="text-ember">/</span>Sync
            </h1>

            <div className="flex w-fit items-center gap-2 mt-5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 bg-ember" />
              <span className="font-mono text-[11px] font-medium tracking-wide text-white/90">
                {t("hero.badge")}
              </span>
            </div>

            <p className="mt-6 text-lg text-white/80 leading-8 max-w-xl">
              {t("hero.body")}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button
                className="bg-primary hover:bg-primary-hover text-white rounded-full px-6 h-11 text-sm font-semibold shadow-none"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("hero.notify")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 h-11 text-sm font-semibold border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                onClick={() => document.getElementById("plataforma")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Eye className="w-3.5 h-3.5 mr-2" />
                {t("hero.peek")}
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white">
              <span>{t("hero.trustEncrypt")}</span>
              <span className="hidden sm:inline text-white/25">/</span>
              <span>{t("hero.trustLgpd")}</span>
              <span className="hidden sm:inline text-white/25">/</span>
              <span>{t("hero.trustPubmed")}</span>
            </div>
          </motion.div>

          <div className="lg:pl-4">
            <PlatformMock />
          </div>
        </div>
      </div>
    </section>
  );
}
