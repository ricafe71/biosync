import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export const LOCALES = {
  pt: { code: "pt", html: "pt-BR", label: "PT", title: "Português" },
  en: { code: "en", html: "en", label: "EN", title: "English" },
};

const STORAGE_KEY = "biosync_locale";

const copy = {
  pt: {
    meta: { title: "BioSync — em breve" },
    nav: {
      home: "BioSync — início",
      platform: "Plataforma",
      technology: "Tecnologia",
      science: "Ciência",
      applications: "Aplicações",
      launch: "Lançamento",
      notify: "Avisar-me no lançamento",
      menu: "Abrir menu",
    },
    hero: {
      kicker: "Bio Inteligência Clínica de Precisão",
      badge: "Em breve · ainda não aberto ao público",
      body: "A BioSync está saindo do silêncio. Integra genética, metabolômica, contexto clínico e literatura científica — mas a plataforma ainda não está no ar. Não há acesso, demonstração nem fila para entrar. Quando entrar, quem deixar o nome aqui fica sabendo primeiro.",
      notify: "Avisar-me no lançamento",
      peek: "Ver o que está por vir",
      trustEncrypt: "Dados protegidos por criptografia",
      trustLgpd: "Conformidade com a LGPD",
      trustPubmed: "PubMed integrado",
    },
    mock: {
      soon: "Em breve",
      case: "Caso clínico",
      patient: "Paciente #2847 — F, 42 anos",
      preview: "Prévia ilustrativa",
      tags: ["Genômica", "Metabolômica", "Anamnese", "Hemograma"],
      recLabel: "Recomendação do Copilot",
      recBodyBefore: "Suplementação de ",
      recHighlight: "Metilfolato 400mcg/dia",
      recBodyAfter: " indicada devido ao polimorfismo MTHFR C677T (homozigoto). Associar com B12 metilcobalamina.",
      refs: "Referências:",
      confidence: "88% confiança",
      sources: "3 fontes científicas",
      footnote: "Isto é só um vislumbre. A plataforma ainda não está no ar.",
    },
    what: {
      kicker: "O que está por vir",
      title: "O que é BioSync",
      bodyBefore: "Uma infraestrutura clínica que conecta dados multiômicos, anamnese, exames laboratoriais, evidência científica e inteligência artificial para apoiar ",
      bodyHighlight: "decisões clínicas complexas",
      bodyAfter: " com rastreabilidade e precisão.",
      pillars: [
        { title: "Integração multiômica", description: "Genômica, metabolômica e dados clínicos conectados em uma única plataforma." },
        { title: "Clinical Copilot", description: "Inteligência artificial que analisa dados e sugere condutas baseadas em evidência." },
        { title: "Governança científica", description: "Sistema de curadoria e validação de evidências com rastreabilidade completa." },
        { title: "Relatórios institucionais", description: "Documentos profissionais estruturados para pacientes e pesquisa clínica." },
      ],
    },
    how: {
      kicker: "Fluxo clínico",
      title: "Como funciona",
      body: "O fluxo que estamos calibrando nos bastidores — do dado bruto à conduta clínica.",
      steps: [
        { title: "Estruture o caso clínico", description: "Paciente, exames multiômicos e anamnese são integrados em um perfil unificado." },
        { title: "Descubra evidências científicas", description: "Busca inteligente em PubMed com curadoria científica automatizada e validação." },
        { title: "Gere recomendações clínicas", description: "O Copilot analisa dados multiômicos e sugere condutas nutricionais baseadas em evidência." },
        { title: "Entregue relatórios profissionais", description: "Relatórios estruturados prontos para pacientes, pesquisa ou apresentação clínica." },
      ],
    },
    features: {
      kicker: "Bastidores",
      title: "Recursos da plataforma",
      body: "Ferramentas avançadas para profissionais que exigem precisão, rastreabilidade e escalabilidade.",
      items: [
        { title: "Interpretação clínica", description: "Converte dados multiômicos em recomendações nutricionais acionáveis e personalizadas." },
        { title: "Explicabilidade científica", description: "Cada recomendação é rastreável por PMID com referências científicas verificáveis." },
        { title: "Guardrails clínicos", description: "Sistema de segurança inteligente para evitar recomendações inadequadas ou conflitantes." },
        { title: "Curadoria científica", description: "Gestão de evidência com staging, validação e controle de qualidade integrados." },
        { title: "Arquitetura SaaS", description: "Multi-profissionais, multi-pacientes e versionamento completo de relatórios." },
        { title: "Fluxo clínico integrado", description: "Paciente, evidência e análise em um único ambiente — sem fragmentação de dados." },
      ],
    },
    science: {
      kicker: "Diferenciais",
      title: "Diferenciais científicos",
      body: "BioSync não é um chatbot genérico. É uma infraestrutura científica projetada para profissionais que precisam de rastreabilidade, governança e precisão clínica.",
      items: [
        "Integração genética + metabolômica em um único pipeline",
        "Evidência PubMed integrada com busca inteligente",
        "Sistema de governança científica com validação em etapas",
        "Explicabilidade completa de cada recomendação (PMID)",
        "Arquitetura projetada para pesquisa clínica e publicação",
      ],
      genomics: "Genômica",
      metabolomics: "Metabolômica",
      indexed: "2.847 artigos indexados",
    },
    audience: {
      kicker: "Para quem",
      title: "Projetado para quem exige precisão",
      body: "BioSync foi construído para profissionais e instituições que trabalham na fronteira da nutrição baseada em evidência.",
      items: [
        { title: "Nutricionistas clínicos", description: "Condutas nutricionais de precisão com base em dados multiômicos." },
        { title: "Médicos integrativos", description: "Apoio à decisão clínica com evidência científica rastreável." },
        { title: "Pesquisadores", description: "Infraestrutura para pesquisa clínica com dados estruturados." },
        { title: "Laboratórios de diagnóstico", description: "Interpretação clínica avançada de resultados laboratoriais." },
        { title: "Universidades", description: "Plataforma para ensino e pesquisa em nutrição de precisão." },
        { title: "Clínicas de medicina personalizada", description: "Escalabilidade para múltiplos profissionais e pacientes." },
      ],
    },
    cta: {
      badge: "Ainda em silêncio clínico",
      title: "A BioSync entra no ar em breve",
      body: "Não há portas abertas, demonstrações nem acesso antecipado — o público ainda não foi chamado. Quando a plataforma sair dos bastidores, quem deixar o nome aqui será avisado. Até lá, o resto continua confidencial.",
      leaveName: "Deixar meu nome",
      press: "Parceria ou imprensa",
    },
    form: {
      sentTitle: "Anotamos o seu nome",
      sentBody: "Quando a BioSync entrar no ar, você fica sabendo. Até lá, o silêncio continua.",
      close: "Fechar",
      title: "O lançamento ainda é um segredo. Quase.",
      subtitle: "Sem acesso antecipado, sem demo, sem fila. Só um aviso no dia em que a BioSync sair do silêncio.",
      type: "Tipo de solicitação",
      optionNotify: "Avisar no lançamento",
      optionPress: "Parceria ou imprensa",
      optionOther: "Outro",
      name: "Nome completo",
      namePh: "Seu nome",
      email: "E-mail profissional",
      role: "Cargo / Especialidade",
      rolePh: "Ex: Nutricionista, Médico, Pesquisador...",
      message: "Mensagem",
      messagePh: "Opcional: o que te traz até aqui...",
      send: "Enviar mensagem",
      sending: "Enviando...",
      fail: "Falha ao enviar a mensagem.",
    },
    footer: {
      closed: "© 2026 BioSync. Ainda não aberta ao público.",
    },
  },
  en: {
    meta: { title: "BioSync — coming soon" },
    nav: {
      home: "BioSync — home",
      platform: "Platform",
      technology: "Technology",
      science: "Science",
      applications: "Applications",
      launch: "Launch",
      notify: "Notify me at launch",
      menu: "Open menu",
    },
    hero: {
      kicker: "Precision Clinical Bio-Intelligence",
      badge: "Coming soon · not yet open to the public",
      body: "BioSync is coming out of silence. It brings together genetics, metabolomics, clinical context and the scientific literature — but the platform is not live yet. There is no access, demo, or waitlist to join. When it goes live, anyone who leaves a name here will be the first to know.",
      notify: "Notify me at launch",
      peek: "See what's coming",
      trustEncrypt: "Encryption-protected data",
      trustLgpd: "LGPD compliant",
      trustPubmed: "PubMed integrated",
    },
    mock: {
      soon: "Soon",
      case: "Clinical case",
      patient: "Patient #2847 — F, 42 y",
      preview: "Illustrative preview",
      tags: ["Genomics", "Metabolomics", "History", "CBC"],
      recLabel: "Copilot recommendation",
      recBodyBefore: "Supplementation with ",
      recHighlight: "Methylfolate 400 mcg/day",
      recBodyAfter: " indicated due to MTHFR C677T polymorphism (homozygous). Combine with methylcobalamin B12.",
      refs: "References:",
      confidence: "88% confidence",
      sources: "3 scientific sources",
      footnote: "This is only a glimpse. The platform is not live yet.",
    },
    what: {
      kicker: "What's coming",
      title: "What BioSync is",
      bodyBefore: "A clinical infrastructure that connects multi-omic data, history, lab work, scientific evidence and artificial intelligence to support ",
      bodyHighlight: "complex clinical decisions",
      bodyAfter: " with traceability and precision.",
      pillars: [
        { title: "Multi-omic integration", description: "Genomics, metabolomics and clinical data connected in a single platform." },
        { title: "Clinical Copilot", description: "Artificial intelligence that reads the data and suggests evidence-based conduct." },
        { title: "Scientific governance", description: "Curation and validation of evidence with full traceability." },
        { title: "Institutional reports", description: "Structured professional documents for patients and clinical research." },
      ],
    },
    how: {
      kicker: "Clinical flow",
      title: "How it works",
      body: "The flow we are calibrating behind the scenes — from raw data to clinical conduct.",
      steps: [
        { title: "Structure the clinical case", description: "Patient, multi-omic exams and history are integrated into a unified profile." },
        { title: "Find scientific evidence", description: "Smart PubMed search with automated scientific curation and validation." },
        { title: "Generate clinical recommendations", description: "The Copilot reads multi-omic data and suggests evidence-based nutrition conduct." },
        { title: "Deliver professional reports", description: "Structured reports ready for patients, research or clinical presentation." },
      ],
    },
    features: {
      kicker: "Backstage",
      title: "Platform capabilities",
      body: "Advanced tools for professionals who require precision, traceability and scale.",
      items: [
        { title: "Clinical interpretation", description: "Turns multi-omic data into actionable, personalized nutrition recommendations." },
        { title: "Scientific explainability", description: "Every recommendation is traceable by PMID with verifiable scientific references." },
        { title: "Clinical guardrails", description: "An intelligent safety layer to avoid inadequate or conflicting recommendations." },
        { title: "Scientific curation", description: "Evidence management with staging, validation and integrated quality control." },
        { title: "SaaS architecture", description: "Multi-professional, multi-patient, with full report versioning." },
        { title: "Integrated clinical flow", description: "Patient, evidence and analysis in one environment — no fragmented data." },
      ],
    },
    science: {
      kicker: "Differentiators",
      title: "Scientific differentiators",
      body: "BioSync is not a generic chatbot. It is scientific infrastructure built for professionals who need traceability, governance and clinical precision.",
      items: [
        "Genetics + metabolomics in a single pipeline",
        "PubMed evidence with intelligent search",
        "Scientific governance with staged validation",
        "Full explainability of every recommendation (PMID)",
        "Architecture designed for clinical research and publication",
      ],
      genomics: "Genomics",
      metabolomics: "Metabolomics",
      indexed: "2,847 indexed papers",
    },
    audience: {
      kicker: "Who it's for",
      title: "Designed for those who demand precision",
      body: "BioSync was built for professionals and institutions working at the frontier of evidence-based nutrition.",
      items: [
        { title: "Clinical dietitians", description: "Precision nutrition conduct grounded in multi-omic data." },
        { title: "Integrative physicians", description: "Decision support with traceable scientific evidence." },
        { title: "Researchers", description: "Infrastructure for clinical research with structured data." },
        { title: "Diagnostic labs", description: "Advanced clinical interpretation of laboratory results." },
        { title: "Universities", description: "A platform for teaching and research in precision nutrition." },
        { title: "Personalized medicine clinics", description: "Scale across multiple professionals and patients." },
      ],
    },
    cta: {
      badge: "Still in clinical silence",
      title: "BioSync goes live soon",
      body: "There are no open doors, demos or early access — the public has not been invited yet. When the platform leaves backstage, anyone who leaves a name here will be notified. Until then, the rest stays confidential.",
      leaveName: "Leave my name",
      press: "Partnerships or press",
    },
    form: {
      sentTitle: "We noted your name",
      sentBody: "When BioSync goes live, you will know. Until then, the silence continues.",
      close: "Close",
      title: "The launch is still a secret. Almost.",
      subtitle: "No early access, no demo, no queue. Just a notice on the day BioSync leaves silence.",
      type: "Request type",
      optionNotify: "Notify me at launch",
      optionPress: "Partnerships or press",
      optionOther: "Other",
      name: "Full name",
      namePh: "Your name",
      email: "Professional email",
      role: "Role / specialty",
      rolePh: "e.g. Dietitian, Physician, Researcher...",
      message: "Message",
      messagePh: "Optional: what brings you here...",
      send: "Send message",
      sending: "Sending...",
      fail: "Could not send the message.",
    },
    footer: {
      closed: "© 2026 BioSync. Not yet open to the public.",
    },
  },
};

const LocaleContext = createContext(null);

function readStoredLocale() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt") return stored;
  } catch {
    /* ignore */
  }
  const nav = typeof navigator !== "undefined" ? navigator.language || "" : "";
  return nav.toLowerCase().startsWith("pt") ? "pt" : "pt";
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState("pt");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  useEffect(() => {
    const meta = LOCALES[locale];
    document.documentElement.lang = meta.html;
    document.title = copy[locale].meta.title;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const value = useMemo(() => {
    const setLocale = (next) => {
      if (next === "pt" || next === "en") setLocaleState(next);
    };
    const t = (path) => {
      const parts = path.split(".");
      let cur = copy[locale];
      for (const part of parts) cur = cur?.[part];
      return cur ?? path;
    };
    return { locale, setLocale, t, copy: copy[locale] };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
