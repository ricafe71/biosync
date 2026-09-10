import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactFormModal({ open, onClose, subject = "Avisar no lançamento" }) {
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
            _subject: `[BioSync] ${form.type || "Contato"} - ${form.name}`,
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
        throw new Error(data.error || data.message || "Falha ao enviar a mensagem.");
      }

      setSent(true);
    } catch (submitError) {
      setError(submitError.message || "Falha ao enviar a mensagem.");
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
            className="relative bg-surface border border-border rounded-[1.5rem] shadow-panel w-full max-w-md p-8"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 text-subtle hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>

            {sent ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Anotamos o seu nome</h3>
                <p className="text-muted-foreground text-sm">Quando a BioSync entrar no ar, você fica sabendo. Até lá, o silêncio continua.</p>
                <Button onClick={handleClose} className="mt-6 bg-primary hover:bg-primary-hover text-on-primary rounded-full px-6">
                  Fechar
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">O lançamento ainda é um segredo. Quase.</h3>
                <p className="text-sm text-muted-foreground mb-6">Sem acesso antecipado, sem demo, sem fila. Só um aviso no dia em que a BioSync sair do silêncio.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">Tipo de solicitação</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-surface-soft px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-ink"
                    >
                      <option>Avisar no lançamento</option>
                      <option>Parceria ou imprensa</option>
                      <option>Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">Nome completo</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full rounded-xl border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">E-mail profissional</label>
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
                    <label className="block text-xs font-medium text-subtle mb-1">Cargo / Especialidade</label>
                    <input
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="Ex: Nutricionista, Médico, Pesquisador..."
                      className="w-full rounded-xl border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-subtle mb-1">Mensagem</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Opcional: o que te traz até aqui..."
                      className="w-full rounded-xl border border-border bg-surface-soft px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary-ink resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary-hover text-on-primary rounded-full h-11 text-sm font-semibold"
                  >
                    {loading ? "Enviando..." : (
                      <>
                        Enviar mensagem
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
