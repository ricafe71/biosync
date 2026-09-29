import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, FileText, Download, Clock, Layers, Languages } from "lucide-react";
import { useLocale } from "@/lib/i18n";

const VIDEO_SRC = "/media/BioSync-Research-Demo-EN.mp4";
const VIDEO_POSTER = "/media/BioSync-Research-Demo-poster.jpg";
const VIDEO_CAPTIONS = "/media/BioSync-Research-Demo-EN.vtt";
const PDF_SRC = "/media/BioSync-Research-Platform-Overview-EN.pdf";

export default function MediaLibrary() {
  const { t, copy } = useLocale();
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);

  // play() must run synchronously inside the click handler: Safari and iOS
  // block audible playback for a call deferred past the user gesture.
  const start = () => {
    videoRef.current?.play?.();
    setStarted(true);
  };

  return (
    <section id="materiais" className="py-24 lg:py-32 border-t border-border bg-surface-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ember-solid">{t("media.kicker")}</p>
          <h2 className="font-sans mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t("media.title")}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-14 bg-ember" />
          <p className="mt-5 text-muted-foreground text-lg leading-8">{t("media.body")}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Vídeo institucional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-panel"
          >
            <div className="relative aspect-video w-full bg-navy-deep">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full"
                src={VIDEO_SRC}
                poster={VIDEO_POSTER}
                controls={started}
                playsInline
                preload="none"
                controlsList="nodownload"
                onPlay={() => setStarted(true)}
              >
                <track kind="captions" src={VIDEO_CAPTIONS} srcLang="en" label="English" default />
              </video>

              {!started && (
                <button
                  type="button"
                  onClick={start}
                  className="group absolute inset-0 h-full w-full"
                  aria-label={t("media.video.play")}
                >
                  <span className="absolute inset-0 bg-navy-deep/45 transition-colors group-hover:bg-navy-deep/30" />
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-panel transition-transform group-hover:scale-105">
                      <Play className="ml-0.5 h-7 w-7 fill-current" />
                    </span>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
                      {t("media.video.play")}
                    </span>
                  </span>
                </button>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.2em] text-primary-hover">
                  {t("media.video.kicker")}
                </p>
                <h3 className="font-sans mt-2 text-lg font-semibold text-foreground">{t("media.video.title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("media.video.description")}</p>
              </div>
              <ul className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-subtle">
                <li className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{t("media.video.duration")}</li>
                <li className="inline-flex items-center gap-1.5"><Layers className="h-3.5 w-3.5" />1080p</li>
                <li className="inline-flex items-center gap-1.5"><Languages className="h-3.5 w-3.5" />{t("media.video.language")}</li>
              </ul>
            </div>
          </motion.div>

          {/* Documento PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-2 flex flex-col rounded-md border border-border bg-surface p-6 shadow-panel"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-soft">
              <FileText className="h-6 w-6 text-primary-ink" />
            </div>
            <p className="mt-5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.2em] text-primary-hover">
              {t("media.pdf.kicker")}
            </p>
            <h3 className="font-sans mt-2 text-lg font-semibold text-foreground">{t("media.pdf.title")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("media.pdf.description")}</p>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {copy.media.pdf.highlights.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-ember" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <a
                href={PDF_SRC}
                download
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-on-primary transition-colors hover:bg-primary-hover"
              >
                <Download className="h-4 w-4" />
                {t("media.pdf.download")}
              </a>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-subtle">
                <span>{t("media.pdf.meta")}</span>
                <a href={PDF_SRC} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-foreground hover:underline">
                  {t("media.pdf.openTab")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
