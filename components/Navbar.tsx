"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Logo compacto y adaptable desde 320px */}
        <Link
          href="/"
          className="flex items-center gap-2 group shrink min-w-0"
          onClick={closeMenu}
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <Image
              src="/logo-jy.png"
              alt="JY Soluciones Tech"
              fill
              sizes="(max-width: 640px) 32px, 40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm sm:text-lg font-bold text-brand-navy leading-none tracking-tight truncate">
              JY SOLUCIONES TECH
            </span>
            <span className="text-[9px] sm:text-xs font-semibold text-slate-500 tracking-wider truncate">
              CLOUD & SOFTWARE
            </span>
          </div>
        </Link>

        {/* Links escritorio */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link
            href="#servicios"
            className="hover:text-brand-blue transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#demos"
            className="hover:text-brand-blue transition-colors"
          >
            Demos Interactivas
          </Link>
          <Link
            href="#infraestructura"
            className="hover:text-brand-blue transition-colors"
          >
            Infraestructura
          </Link>
        </nav>

        {/* Acciones derechas */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Botón WhatsApp en Navbar.tsx */}
          <a
            href="https://wa.me/51922995175?text=Hola%20JY%20Soluciones%20Tech,%20deseo%20m%C3%A1s%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center gap-1.5 bg-brand-blue hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-lg shadow-sm transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Botón Hamburguesa accesible con aria-expanded */}
          <button
            onClick={toggleMenu}
            aria-label={
              isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
            className="md:hidden p-1.5 sm:p-2 text-slate-700 hover:text-brand-blue hover:bg-slate-100 rounded-lg focus-visible:outline-2 focus-visible:outline-brand-blue"
          >
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg"
        >
          <Link
            href="#servicios"
            onClick={closeMenu}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Servicios
          </Link>
          <Link
            href="#demos"
            onClick={closeMenu}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Demos Interactivas
          </Link>
          <Link
            href="#infraestructura"
            onClick={closeMenu}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Infraestructura
          </Link>
          <div className="pt-2 border-t border-slate-100">
            <a
              href="https://wa.me/51922995175?text=Hola%20JY%20Soluciones%20Tech,%20deseo%20agendar%20una%20sesi%C3%B3n%20t%C3%A9cnica."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy text-white text-sm font-semibold py-2.5 rounded-lg"
            >
              Contactar un Asesor
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
