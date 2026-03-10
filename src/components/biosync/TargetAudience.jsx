import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, GraduationCap, FlaskConical, Building2, Microscope, HeartPulse } from "lucide-react";

const audiences = [
  { icon: HeartPulse, title: "Nutricionistas clínicos", description: "Condutas nutricionais de precisão com base em dados multiômicos." },
  { icon: Stethoscope, title: "Médicos integrativos", description: "Apoio à decisão clínica com evidência científica rastreável." },
  { icon: Microscope, title: "Pesquisadores", description: "Infraestrutura para pesquisa clínica com dados estruturados." },
  { icon: FlaskConical, title: "Laboratórios de diagnóstico", description: "Interpretação clínica avançada de resultados laboratoriais." },
  { icon: GraduationCap, title: "Universidades", description: "Plataforma para ensino e pesquisa em nutrição de precisão." },
  { icon: Building2, title: "Clínicas de medicina personalizada", description: "Escalabilidade para múltiplos profissionais e pacientes." },
];

export default function TargetAudience() {
  return (
    <section id="aplicacoes" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Para quem</p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Projetado para quem exige precisão
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            BioSync foi construído para profissionais e instituições que trabalham na fronteira
            da nutrição baseada em evidência.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md hover:shadow-gray-100/50 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}