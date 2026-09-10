import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n";

const TYPE_KEYS = ["notify", "press", "other"];

export default function ContactFormModal({ open, onClose, subject = "notify" }) {
  const { t } = useLocale();
  const [form, setForm] = useState({ name: "", email: "", role: "", type: subject, message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setForm({ name: "", email: "", role: "", type: subject, message: "" });
      setSent(false);
      setError("");
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
    setError("");

    try {
      const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
      const url = isLocal
        ? "/api/contact"
        : "https://formsubmit.co/ajax/contato@biosync.app.br";
      const payload = isLocal
        ? form
        : {
            ...form,
            _subject: `[BioSync] ${typeLabel(form.type)} - ${form.name}`,
            _template: "box",
            _captcha: "false",
          };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.error || data.success === "false") {
        throw new Error(data.error || data.message || t("form.fail"));
      }

      setSent(true);
    } catch (submitError) {
      setError(submitError.message || t("form.fail"));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSent(false);
    setError("");
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
            className="relative bg-surface border border-border rounded-md shadow-panel w-full max-w-md p-8"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 text-subtle hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>

            {sent ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans text-xl font-semibold text-foreground mb-2">{t("form.sentTitle")}</h3>
                <p className="text-muted-foreground text-sm">{t("form.sentBody")}</p>
                <Button onClick={handleClose} className="mt-6 bg-primary hover:bg-primary-hover text-on-primary rounded-md px-6">
                  {t("form.close")}
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-sans text-xl font-semibold text-foreground mb-1">{t("form.title")}</h3>
                <p className="text-sm text-muted-foreground mb-6">{t("form.subtitle")}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">{t("form.type")}</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-surface-soft px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-ink"
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
                      className="w-full rounded-md border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink"
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
                      className="w-full rounded-md border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">{t("form.role")}</label>
                    <input
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder={t("form.rolePh")}
                      className="w-full rounded-md border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink"
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
                      className="w-full rounded-md border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary-hover text-on-primary rounded-md h-11 text-sm font-semibold"
                  >
                    {loading ? t("form.sending") : (
                      <>
                        {t("form.send")}
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  {error && (
                    <p className="text-xs text-red-500">{error}</p>
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
