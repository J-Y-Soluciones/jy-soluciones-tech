import { MessageSquareText } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-brand-navy py-14 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-slate-900/60 border border-slate-800 p-8 sm:p-10 rounded-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-semibold text-brand-cyan tracking-wider uppercase">
              Evaluación Técnica Sin Costo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              ¿Listo para modernizar la operación de tu empresa?
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Agenda una sesión técnica de 20 minutos sin costo para evaluar tu
              sistema actual y mostrarte cómo optimizar los procesos de riesgo
              operativo.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="https://wa.me/51922995175?text=Hola%20JY%20Soluciones%20Tech,%20deseo%20agendar%20una%20sesi%C3%B3n%20t%C3%A9cnica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-600 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <MessageSquareText className="w-5 h-5" />
              Hablar con un Asesor Técnico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
