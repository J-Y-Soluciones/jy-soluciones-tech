import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-[#f8fafc]">
      {/* 1. Malla de luz ambiental suave (Glow atmosférico de Stitch) */}
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-10%] w-[550px] h-[550px] bg-gradient-to-br from-cyan-200/50 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[-10%] w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Lado Izquierdo: Copy Comercial B2B */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-blue-200/70 shadow-xs backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span className="text-brand-blue text-xs font-semibold tracking-wide uppercase">
                Software de Alto Impacto en Perú
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0c2340] tracking-tight leading-[1.12]">
              Impulsamos tu Negocio con{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-brand-blue to-cyan-500">
                Tecnología y Software
              </span>{" "}
              a Medida
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              Control de inventario en tiempo real, cotizadores rápidos y
              plataformas en la nube estables 24/7 sin caídas de servidor ni
              pérdida de datos.
            </p>

            {/* Acciones principales */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <a
                href="https://wa.me/51922995175?text=Hola%20JY%20Soluciones%20Tech,%20deseo%20agendar%20una%20reuni%C3%B3n%20t%C3%A9cnica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Solicitar Asesoría Gratuita
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="#demos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm shadow-xs transition-all"
              >
                Ver Demos en Vivo
              </Link>
            </div>

            {/* Badges de Confianza con mejor tipografía */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>99.9% Disponibilidad</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Respaldos Diarios</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-blue" />
                <span>Soporte Local en Lima</span>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Dashboard Mockup Enterprise con Sparkline de Stitch */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0c2340] p-6 shadow-2xl shadow-blue-950/20 border border-slate-700/60 text-white relative backdrop-blur-md">
              {/* Header de consola */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-[11px] text-slate-400 ml-2 font-mono">
                    cluster-prod-pe.internal
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Demo UI
                </span>
              </div>

              {/* Grid 4 métricas corporativas (como en Stitch) */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800/80">
                  <p className="text-[11px] text-slate-400 font-medium">
                    Stock Total Activo
                  </p>
                  <p className="text-xl font-bold tracking-tight text-white mt-0.5">
                    4,820
                  </p>
                  <p className="text-[10px] text-emerald-400 mt-0.5 font-medium">
                    ↑ 12% este mes
                  </p>
                </div>
                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800/80">
                  <p className="text-[11px] text-slate-400 font-medium">
                    Proformas Emitidas
                  </p>
                  <p className="text-xl font-bold tracking-tight text-white mt-0.5">
                    S/ 48,920
                  </p>
                  <p className="text-[10px] text-cyan-400 mt-0.5 font-medium">
                    32 aprobadas
                  </p>
                </div>
                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800/80">
                  <p className="text-[11px] text-slate-400 font-medium">
                    Latencia Cloud
                  </p>
                  <p className="text-xl font-bold font-mono tracking-tight text-emerald-400 mt-0.5">
                    24 ms
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Lima Region
                  </p>
                </div>
                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800/80">
                  <p className="text-[11px] text-slate-400 font-medium">
                    Tasa de Entrega
                  </p>
                  <p className="text-xl font-bold tracking-tight text-white mt-0.5">
                    100%
                  </p>
                  <p className="text-[10px] text-cyan-400 mt-0.5">0 caídas</p>
                </div>
              </div>

              {/* Sparkline SVG Chart (La curva elegante que tenía Stitch) */}
              <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800/80 space-y-2">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-400">
                    Flujo de Consultas en Servidor
                  </span>
                  <span className="text-cyan-400 font-mono text-[10px]">
                    98.4 req/s
                  </span>
                </div>

                <div className="h-10 w-full pt-1">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 100 25"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="gradientLine"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#0052cc" />
                        <stop offset="50%" stopColor="#00d2ff" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,18 Q15,5 30,14 T60,8 T85,16 T100,5"
                      fill="none"
                      stroke="url(#gradientLine)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                  <span>Última venta: Taller San Isidro</span>
                  <span className="text-slate-200 font-mono font-medium">
                    S/ 1,450.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
