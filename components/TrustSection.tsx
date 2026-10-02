import { ServerCrash, DatabaseZap, Headphones } from "lucide-react";

export default function TrustSection() {
  const trustPoints = [
    {
      title: "Alta Disponibilidad Cloud",
      description:
        "Arquitectura en la nube y contenedores distribuidos diseñados para que el sistema opere en días de alta demanda sin interrupciones operativas.",
      icon: ServerCrash,
    },
    {
      title: "Respaldos Automáticos Diarios",
      description:
        "Copias de seguridad continuas de la base de datos y transacciones. La información comercial de tu empresa está protegida ante cualquier incidente.",
      icon: DatabaseZap,
    },
    {
      title: "Soporte Especializado en Perú",
      description:
        "Atención directa vía WhatsApp, llamada o presencial con los desarrolladores a cargo del sistema, garantizando respuesta ágil y soluciones reales.",
      icon: Headphones,
    },
  ];

  return (
    <section
      id="infraestructura"
      className="py-20 bg-slate-50 border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-blue-100/60 px-3 py-1 rounded-full">
            Garantía Operativa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-4 tracking-tight">
            ¿Por Qué Empresas B2B Confían en JY Soluciones Tech?
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Priorizamos la estabilidad operativa de tu empresa con estándares
            internacionales de ingeniería cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
