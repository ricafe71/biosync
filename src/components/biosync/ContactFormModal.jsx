import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactFormModal({ open, onClose, subject = "Contato" }) {
  const [form, setForm] = useState({ name: "", email: "", role: "", type: subject, message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Falha ao enviar a mensagem.");
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
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-5 h-5" />
            </button>

            {sent ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mensagem enviada!</h3>
                <p className="text-gray-500 text-sm">Nossa equipe entrará em contato em breve.</p>
                <Button onClick={handleClose} className="mt-6 bg-teal-500 hover:bg-teal-400 text-white rounded-full px-6">
                  Fechar
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Fale com a BioSync</h3>
                <p className="text-sm text-gray-500 mb-6">Preencha o formulário e responderemos em até 24h.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Tipo de solicitação</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                      <option>Agendar demonstração</option>
                      <option>Solicitar acesso antecipado</option>
                      <option>Dúvida geral</option>
                      <option>Parceria</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Nome completo</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">E-mail profissional</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Cargo / Especialidade</label>
                    <input
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="Ex: Nutricionista, Médico, Pesquisador..."
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Mensagem</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Descreva brevemente sua necessidade..."
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-500 hover:bg-teal-400 text-white rounded-full h-11 text-sm font-medium"
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
