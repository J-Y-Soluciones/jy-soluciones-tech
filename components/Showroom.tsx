"use client";

import { useState } from "react";
import { projectsData } from "@/data/projectsData";
import { ProjectDemo } from "@/types";
import {
  ExternalLink,
  Copy,
  Check,
  Info,
  MessageSquare,
  Clock,
} from "lucide-react";

export default function Showroom() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="demos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Demos Interactivas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-4 tracking-tight">
            Showroom de Proyectos en Vivo
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Sistemas reales en producción que puedes probar de inmediato en tu
            navegador.
          </p>
        </div>

        {/* Tarjetas Dinámicas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project: ProjectDemo) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Cabecera estilo Terminal */}
                <div className="bg-brand-navy p-4 text-white flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-cyan tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                    Live Demo
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.badges.map((badge, bIndex) => (
                      <span
                        key={bIndex}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Credenciales de Acceso */}
                  {project.suggestedCredentials && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2 mb-4">
                      <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-1">
                        <Info className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Credenciales para prueba:</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-700">
                        <span>
                          Usuario:{" "}
                          <strong className="font-mono">
                            {project.suggestedCredentials.user}
                          </strong>
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              project.suggestedCredentials!.user,
                              `${project.id}-user`,
                            )
                          }
                          className="text-brand-blue hover:text-blue-800"
                        >
                          {copiedField === `${project.id}-user` ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                      <div className="flex justify-between items-center text-slate-700">
                        <span>
                          Clave:{" "}
                          <strong className="font-mono">
                            {project.suggestedCredentials.pass}
                          </strong>
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              project.suggestedCredentials!.pass,
                              `${project.id}-pass`,
                            )
                          }
                          className="text-brand-blue hover:text-blue-800"
                        >
                          {copiedField === `${project.id}-pass` ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Aviso de Cold Start */}
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-700 bg-amber-50 border border-amber-200/60 rounded-lg p-2.5">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      La demo puede tardar unos 45s en despertar en el primer
                      acceso.
                    </span>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="p-6 pt-0 space-y-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
                >
                  Probar Demo en Vivo
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/51922995175?text=${encodeURIComponent(project.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs py-2 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Cotizar Sistema Similar
                </a>
              </div>
            </div>
          ))}

          {/* Tarjeta 3: Empty State para Nuevos Proyectos */}
          <div className="rounded-2xl border-2 border-dashed border-slate-300 p-8 flex flex-col justify-center items-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">
              ¿Tu Próximo Software Central?
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xs mb-6">
              Desarrollamos soluciones personalizadas: logística, clínicas,
              importadoras y servicios profesionales.
            </p>
            <a
              href="https://wa.me/51922995175?text=Hola%20JY%20Soluciones%20Tech,%20deseo%20desarrollar%20un%20proyecto%20a%20medida."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all"
            >
              Conversar sobre mi idea
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
