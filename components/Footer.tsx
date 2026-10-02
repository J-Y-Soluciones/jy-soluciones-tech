import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-24 sm:pb-14 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Identidad de Marca */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/logo-jy.png"
                  alt="JY Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold text-white tracking-wide">
                JY SOLUCIONES TECH
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Desarrollo de software a medida, cotizadores ágiles y plataformas
              web estables de alto rendimiento para negocios en crecimiento.
            </p>
            <div className="space-y-2.5 pt-2 text-slate-300">
              <a
                href="https://wa.me/51922995175"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-brand-cyan transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>+51 922 995 175</span>
              </a>
              <a
                href="mailto:jysoluciones.tech@gmail.com"
                className="flex items-center gap-2.5 hover:text-brand-cyan transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>jysoluciones.tech@gmail.com</span>
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Lima, Perú</span>
              </p>
            </div>
          </div>

          {/* Menú de Enlaces */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">
              Soluciones Cloud
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Control de Inventario y Almacén
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Facturación y Cotizadores Web
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Desarrollo de Software a Medida
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Automatización de Flujos Comerciales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto: QR en Desktop / Botón Directo en Móvil */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">
              Contacto Directo
            </h4>

            {/* Versión Desktop: QR para escanear */}
            <div className="hidden md:flex flex-col items-end space-y-2">
              <div className="bg-white p-2.5 rounded-xl border border-slate-800 shadow-md">
                <div className="relative w-28 h-28">
                  <Image
                    src="/qr-whatsapp.png"
                    alt="QR WhatsApp JY Soluciones Tech"
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                Escanea desde tu móvil para chatear
              </p>
            </div>

            {/* Versión Móvil: Botón de llamada a la acción directa */}
            <div className="md:hidden w-full pt-1">
              <a
                href="https://wa.me/51922995175?text=Hola%20JY%20Soluciones%20Tech,%20deseo%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Iniciar Chat en WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior de derechos reservados */}
        <div className="border-t border-slate-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-2 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} JY Soluciones Tech. Todos los derechos
            reservados.
          </p>
          <p className="font-mono text-slate-600">
            Cloud Native • 99.9% SLA Uptime • Lima, PE
          </p>
        </div>
      </div>
    </footer>
  );
}
