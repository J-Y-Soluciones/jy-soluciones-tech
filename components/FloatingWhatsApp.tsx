import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/51922995175?text=Hola%20JY%20Soluciones%20Tech,%20deseo%20consultar%20sobre%20un%20proyecto."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 bg-brand-navy hover:bg-[#08172b] text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-xl shadow-slate-900/20 border border-slate-700/50 transition-all hover:scale-105 group backdrop-blur-md"
    >
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
      <MessageCircle className="w-4 h-4 text-brand-cyan" />
      <span className="text-xs font-medium tracking-wide">
        Chat con Soporte
      </span>
    </a>
  );
}
