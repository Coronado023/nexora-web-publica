import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

// Hero principal: primera impresión de la marca y llamada a la acción.
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center pt-24"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,255,0,0.16),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(56,255,0,0.1),transparent_26%),linear-gradient(135deg,#ffffff_0%,#f5f9f2_52%,#ffffff_100%)]" />
      <div className="tech-grid absolute inset-0 opacity-45" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full border border-[#38ff00]/20 blur-2xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Contenido */}
        <div className="animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38ff00]/35 bg-[#efffea] px-3 py-2 text-sm font-medium text-[#277413]">
            <Zap size={15} />
            Una marca en crecimiento
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#231f20] sm:text-7xl">
            Ideas que toman forma.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4b4748]">
            Nexora es una marca guatemalteca que está dando sus primeros pasos
            en el mundo de la impresión 3D. Nuestro propósito es construir una
            comunidad, aprender constantemente y desarrollar productos que
            combinen creatividad, diseño y funcionalidad.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#nexora"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#38ff00] px-5 font-semibold text-[#17220f] shadow-[0_10px_24px_rgba(56,255,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#73ff4f]"
            >
              Conocer Nexora
              <ArrowRight size={18} />
            </a>

            <a
              href="#galeria"
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#231f20]/15 bg-white px-5 font-semibold text-[#231f20] transition-all duration-300 hover:border-[#38ff00]/70 hover:bg-white"
            >
              Inspiración
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="animate-float relative mx-auto aspect-square w-full max-w-130">
          <div className="absolute inset-8 rounded-full border border-[#38ff00]/35 shadow-[0_0_80px_rgba(56,255,0,0.22)]" />
          <div className="absolute inset-16 rounded-full border border-[#231f20]/15" />

          <Image
            src="/brand/new/nexorablanco.png"
            alt="Logo oficial de Nexora"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 520px"
            className="rounded-[28px] object-cover shadow-[0_24px_70px_rgba(35,31,32,0.14)] transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
