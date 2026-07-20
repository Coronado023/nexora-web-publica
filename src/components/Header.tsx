"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nuestra Propuesta", href: "#servicios" },
  { label: "Sobre Nexora", href: "#nexora" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

// Navegacion principal fija. Los enlaces apuntan a secciones dentro de la misma pagina.
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/brand/new/nexorablanco.png"
            alt="Nexora"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg object-cover shadow-[0_0_28px_rgba(56,255,0,0.35)]"
            priority
          />
          <span className="text-lg font-semibold tracking-[0.24em] text-[#231f20]">
            NEXORA
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#231f20]/70 md:flex">
          {navigation.slice(1).map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#38ff00]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden h-11 items-center gap-2 rounded-md border border-[#38ff00]/45 bg-[#38ff00] px-4 text-sm font-semibold text-[#17220f] transition hover:bg-[#73ff4f] sm:inline-flex"
        >
          Iniciar proyecto
          <ArrowRight size={16} />
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/10 bg-white text-[#231f20] transition hover:border-[#38ff00]/55 hover:text-[#1ca800] md:hidden"
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-black/8 bg-white px-5 pb-5 pt-3 shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md border border-black/8 bg-[#f8faf7] px-4 py-3 text-sm font-medium text-[#231f20]/80 transition hover:border-[#38ff00]/50 hover:text-[#1ca800]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={closeMenu}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#38ff00] px-4 text-sm font-semibold text-[#080808] transition hover:bg-[#73ff4f]"
            >
              Contáctanos
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
