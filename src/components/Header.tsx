import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Navegacion principal fija. Los enlaces apuntan a secciones dentro de la misma pagina.
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050507]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src="/brand/nexora-logo.jpeg"
            alt="Nexora"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg object-cover shadow-[0_0_28px_rgba(163,59,255,0.35)]"
            priority
          />
          <span className="text-lg font-semibold tracking-[0.24em] text-white">
            NEXORA
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/68 md:flex">
          <a href="#servicios" className="transition hover:text-[#38f8a8]">
            Servicios
          </a>
          <a href="#nexora" className="transition hover:text-[#38f8a8]">
            Nexora
          </a>
          <a href="#galeria" className="transition hover:text-[#38f8a8]">
            Galeria
          </a>
          <a href="#contacto" className="transition hover:text-[#38f8a8]">
            Contacto
          </a>
        </nav>

        <a
          href="#contacto"
          className="inline-flex h-11 items-center gap-2 rounded-md border border-[#38f8a8]/35 bg-[#38f8a8]/10 px-4 text-sm font-medium text-[#cffff0] transition hover:border-[#38f8a8] hover:bg-[#38f8a8]/16"
        >
          Iniciar proyecto
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}
