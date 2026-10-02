import { servicesData } from "@/data/servicesData";
import {
  Boxes,
  ReceiptText,
  LayoutDashboard,
  Cpu,
  CheckCircle,
} from "lucide-react";

const iconsMap: Record<string, React.ElementType> = {
  Boxes,
  ReceiptText,
  LayoutDashboard,
  Cpu,
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-20 bg-slate-50 border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-blue-100/60 px-3 py-1 rounded-full">
            Especialidades Técnicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-4 tracking-tight">
            Soluciones de Alto Impacto
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Sistemas web diseñados para erradicar cuellos de botella operativos,
            desabastecimiento y pérdidas de inventario.
          </p>
        </div>

        {/* Grid 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconsMap[service.icon] || Boxes;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-5 space-y-2.5">
                  {service.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
