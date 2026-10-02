"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo / Monograma */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group"
          onClick={closeMenu}
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <Image
              src="/logo-jy.png"
              alt="JY Soluciones Tech"
              fill
              sizes="40px"
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-brand-navy leading-none tracking-tight">
              JY SOLUCIONES TECH
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wider">
              CLOUD & SOFTWARE
            </span>
          </div>
        </Link>

        {/* Enlaces de escritorio */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#" className="hover:text-brand-blue transition-colors">
            Inicio
          </Link>
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

        {/* Botones de acción derecha */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/51922995175?text=Hola%20JY%20Soluciones%20Tech,%20deseo%20m%C3%A1s%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-blue hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          {/* Botón Hamburguesa (solo móvil) */}
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú de navegación"
            className="md:hidden p-2 text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-lg focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <Link
            href="#"
            onClick={closeMenu}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Inicio
          </Link>
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
              Hablar con un Asesor Técnico
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
