import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n";

const TYPE_KEYS = ["notify", "press", "other"];
const CONTACT_EMAIL = "contato@biosync.app.br";
// Netlify Function em api/netlify/functions/contact.mjs (o GitHub Pages não roda backend).
const CONTACT_ENDPOINT = "https://biosync-contact.netlify.app/api/contact";

export default function ContactFormModal({ open, onClose, subject = "notify" }) {
  const { t } = useLocale();
  const [form, setForm] = useState({ name: "", email: "", role: "", type: subject, message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);
  // Honeypot: só robôs preenchem o campo escondido; a função descarta o envio.
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (open) {
      setForm({ name: "", email: "", role: "", type: subject, message: "" });
      setSent(false);
      setFailed(false);
    }
  }, [open, subject]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const typeLabel = (key) => {
    if (key === "press") return t("form.optionPress");
    if (key === "other") return t("form.optionOther");
    return t("form.optionNotify");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFailed(false);

    try {
      const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
      const response = await fetch(isLocal ? "/api/contact" : CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...form, company, typeLabel: typeLabel(form.type) }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.error || `HTTP ${response.status}`);
      }

      setSent(true);
    } catch (submitError) {
      // Falha de rede (inclusive resposta sem CORS) chega como erro genérico do
      // navegador ("NetworkError…", "Failed to fetch"). O texto técnico fica no
      // console; na tela, mensagem traduzida e o e-mail como alternativa.
      console.error("[contato] falha no envio:", submitError);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  // Alternativa quando o envio falha: e-mail já preenchido com o que foi digitado.
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `[BioSync] ${typeLabel(form.type)} - ${form.name}`
  )}&body=${encodeURIComponent(
    [
      `${t("form.name")}: ${form.name}`,
      `${t("form.email")}: ${form.email}`,
      `${t("form.role")}: ${form.role}`,
      "",
      form.message,
    ].join("\n")
  )}`;

  const handleClose = () => {
    setSent(false);
    setFailed(false);
    setForm({ name: "", email: "", role: "", type: subject, message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-surface border border-border rounded-[28px] shadow-panel w-full max-w-md p-8"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 text-subtle hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>

            {sent ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans text-xl font-semibold text-foreground mb-2">{t("form.sentTitle")}</h3>
                <p className="text-muted-foreground text-sm">{t("form.sentBody")}</p>
                <Button onClick={handleClose} className="mt-6 bg-primary hover:bg-primary-hover text-on-primary rounded-full px-6">
                  {t("form.close")}
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-sans text-xl font-semibold text-foreground mb-1">{t("form.title")}</h3>
                <p className="text-sm text-muted-foreground mb-6">{t("form.subtitle")}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                    <input
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">{t("form.type")}</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-surface-soft px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-ink"
                    >
                      {TYPE_KEYS.map((key) => (
                        <option key={key} value={key}>{typeLabel(key)}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">{t("form.name")}</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("form.namePh")}
                      className="w-full rounded-xl border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">{t("form.email")}</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full rounded-xl border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">{t("form.role")}</label>
                    <input
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder={t("form.rolePh")}
                      className="w-full rounded-xl border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">{t("form.message")}</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder={t("form.messagePh")}
                      className="w-full rounded-xl border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary-hover text-on-primary rounded-full h-11 text-sm font-semibold"
                  >
                    {loading ? t("form.sending") : (
                      <>
                        {t("form.send")}
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  {failed && (
                    <p role="alert" className="text-xs text-destructive">
                      {t("form.fail")} {t("form.failFallback")}{" "}
                      <a href={mailtoHref} className="font-semibold underline underline-offset-2">
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
