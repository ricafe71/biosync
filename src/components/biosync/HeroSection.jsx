import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

function PlatformMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-accent/15 blur-3xl rounded-3xl" />

      <div className="absolute -top-3 right-6 z-10 rotate-3">
        <div className="px-3 py-1 rounded-full bg-foreground text-background text-[10px] font-semibold tracking-[0.22em] uppercase">
          Em breve
        </div>
      </div>

      <div className="relative bg-surface rounded-[2rem] shadow-panel border border-border overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-soft/80">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-accent/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-ink/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          </div>
          <div className="ml-3 font-mono text-[10px] text-subtle tracking-wide">BIOSYNC CLINICAL COPILOT</div>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] text-primary-ink uppercase tracking-[0.18em]">Caso Clínico</div>
              <div className="text-sm font-semibold text-foreground mt-0.5">Paciente #2847 — F, 42 anos</div>
            </div>
            <div className="px-2.5 py-1 bg-primary-soft text-primary-ink text-[10px] font-medium rounded-full">
              Prévia ilustrativa
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {["Genômica", "Metabolômica", "Anamnese", "Hemograma"].map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-surface-soft text-muted-foreground text-[10px] rounded-md font-medium border border-border">
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-primary-soft/60 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[10px] font-semibold text-primary-ink uppercase tracking-[0.16em]">
                Recomendação do Copilot
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Suplementação de <span className="font-semibold text-primary-ink">Metilfolato 400mcg/dia</span> indicada
              devido ao polimorfismo MTHFR C677T (homozigoto). Associar com B12 metilcobalamina.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[9px] text-subtle">Referências:</span>
              <span className="px-1.5 py-0.5 bg-accent/15 text-accent text-[9px] rounded font-mono">
                PMID: 32847591
              </span>
              <span className="px-1.5 py-0.5 bg-accent/15 text-accent text-[9px] rounded font-mono">
                PMID: 31458203
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-24 bg-surface-soft rounded-full overflow-hidden">
                <div className="h-full w-[88%] bg-gradient-to-r from-primary to-primary-ink rounded-full" />
              </div>
              <span className="text-[10px] text-subtle">88% confiança</span>
            </div>
            <span className="font-mono text-[10px] text-subtle">3 fontes científicas</span>
          </div>

          <p className="pt-1 text-[10px] text-subtle tracking-wide">
            Isto é só um vislumbre. A plataforma ainda não está no ar.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative pt-16 lg:pt-20 pb-20 lg:pb-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary-ink">
              Bio Inteligência Clínica de Precisão
            </p>

            <h1 className="font-display mt-4 text-[3.2rem] leading-[0.92] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[4.6rem]">
              Bio<span className="text-muted-foreground">/</span>
              <span className="text-primary-ink">Sync</span>
            </h1>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-primary-soft/70 mt-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold tracking-wide text-primary-ink">
                Em breve · ainda não aberto ao público
              </span>
            </div>

            <p className="mt-6 text-lg text-muted-foreground leading-8 max-w-xl">
              A BioSync está saindo do silêncio. Integra genética, metabolômica, contexto clínico e
              literatura científica — mas a plataforma ainda não está no ar. Não há acesso, demonstração
              nem fila para entrar. Quando entrar, quem deixar o nome aqui fica sabendo primeiro.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button
                className="bg-primary hover:bg-primary-hover text-on-primary rounded-full px-7 h-12 text-sm font-semibold shadow-none"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                Avisar-me no lançamento
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-7 h-12 text-sm font-semibold border-border bg-transparent text-foreground hover:bg-surface hover:text-foreground"
                onClick={() => document.getElementById("plataforma")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Eye className="w-3.5 h-3.5 mr-2" />
                Ver o que está por vir
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 text-xs text-subtle">
              <span>Dados protegidos por criptografia</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>LGPD Compliance</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>PubMed integrado</span>
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
