import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

// Hero principal: primera impresion de la marca y llamadas a la accion.
export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,64,255,0.28),transparent_34%),radial-gradient(circle_at_82%_30%,rgba(56,248,168,0.18),transparent_28%),linear-gradient(135deg,#050507_0%,#080812_50%,#07030d_100%)]" />
      <div className="tech-grid absolute inset-0 opacity-45" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full border border-[#38f8a8]/20 blur-2xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-[#a8ffd7]">
            <Zap size={15} />
            Ideas que toman forma
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl">
            Tecnologia, diseno e impresion 3D para construir lo siguiente.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            Nexora crea soluciones digitales, piezas fisicas y automatizaciones con una estetica limpia, precisa y lista para escalar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#servicios"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#38f8a8] px-5 font-semibold text-[#06110c] transition hover:bg-[#7dffc8]"
            >
              Ver servicios
              <ArrowRight size={18} />
            </a>
            <a
              href="#galeria"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 px-5 font-semibold text-white/85 transition hover:border-[#a33bff]/70 hover:text-white"
            >
              Explorar galeria
            </a>
          </div>
        </div>

        <div className="animate-float relative mx-auto aspect-square w-full max-w-[520px]">
          <div className="absolute inset-8 rounded-full border border-[#a33bff]/35 shadow-[0_0_80px_rgba(163,59,255,0.22)]" />
          <div className="absolute inset-16 rounded-full border border-[#38f8a8]/25" />
          <Image
            src="/brand/nexora-logo.jpeg"
            alt="Logo oficial Nexora"
            fill
            className="rounded-[28px] object-cover shadow-[0_24px_90px_rgba(0,0,0,0.55)]"
            sizes="(max-width: 768px) 90vw, 520px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
