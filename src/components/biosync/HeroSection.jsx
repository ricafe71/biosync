import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { useLocale } from "@/lib/i18n";

function ScienceBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-navy-deep" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_30%,rgba(62,126,190,0.38),transparent_52%),radial-gradient(ellipse_at_18%_78%,rgba(228,87,46,0.28),transparent_46%),radial-gradient(ellipse_at_8%_20%,rgba(43,181,170,0.16),transparent_42%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="helixL" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e4572e" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#e4572e" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="helixR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2bb5aa" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2bb5aa" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <g opacity="0.35" fill="none" strokeWidth="1.2">
          {Array.from({ length: 18 }).map((_, i) => (
            <circle key={i} cx="1180" cy="220" r={40 + i * 28} stroke="#3e7ebe" strokeOpacity={0.18 - i * 0.008} />
          ))}
        </g>
        <path d="M980 40 C 920 140, 1280 220, 1100 340 C 920 460, 1280 540, 1180 640" stroke="url(#helixL)" strokeWidth="4" fill="none" />
        <path d="M1180 40 C 1280 140, 920 220, 1100 340 C 1280 460, 920 540, 1020 640" stroke="url(#helixR)" strokeWidth="4" fill="none" />
        {Array.from({ length: 9 }).map((_, i) => {
          const y = 80 + i * 60;
          return <line key={`rung-${i}`} x1={1000 + (i % 2) * 40} y1={y} x2={1160 - (i % 2) * 40} y2={y} stroke={i % 2 === 0 ? "#e4572e" : "#2bb5aa"} strokeOpacity="0.45" strokeWidth="1.6" />;
        })}
        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={120 + (i * 97) % 900}
            cy={40 + ((i * 53) % 560)}
            r={i % 5 === 0 ? 2.4 : 1.2}
            fill="#ffffff"
            opacity={0.12 + (i % 4) * 0.04}
          />
        ))}
      </svg>
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
      <div className="relative bg-white border border-white/20 shadow-panel overflow-hidden rounded-md">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-soft">
          <div className="font-mono text-[10px] text-subtle tracking-[0.16em]">BIOSYNC CLINICAL COPILOT</div>
          <div className="ml-auto bg-navy px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-white">
            {mock.soon}
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] text-primary uppercase tracking-[0.18em]">{mock.case}</div>
              <div className="text-sm font-semibold text-navy mt-0.5">{mock.patient}</div>
            </div>
            <div className="px-2 py-0.5 bg-primary-soft text-navy font-mono text-[10px] font-medium">
              {mock.preview}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {mock.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-surface-soft text-subtle font-mono text-[10px] border border-border">
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-primary-soft/80 p-4 border border-primary/20">
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
              <span className="px-1.5 py-0.5 border border-ember/40 bg-ember-soft text-ember font-mono text-[9px]">
                PMID: 32847591
              </span>
              <span className="px-1.5 py-0.5 border border-ember/40 bg-ember-soft text-ember font-mono text-[9px]">
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
            <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-primary">
              {t("hero.kicker")}
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] tracking-[-0.03em] font-semibold text-white">
              Bio<span className="text-ember">/</span>Sync
            </h1>

            <div className="flex w-fit items-center gap-2 mt-5 border border-white/25 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
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
                className="bg-primary hover:bg-primary-hover text-white rounded-md px-6 h-11 text-sm font-semibold shadow-none"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("hero.notify")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="rounded-md px-6 h-11 text-sm font-semibold border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                onClick={() => document.getElementById("plataforma")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Eye className="w-3.5 h-3.5 mr-2" />
                {t("hero.peek")}
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/55">
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
