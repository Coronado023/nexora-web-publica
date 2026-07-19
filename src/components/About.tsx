import Image from "next/image";

// Resumen corto de posicionamiento de marca.
export function About() {
  return (
    <section id="nexora" className="border-t border-black/6 bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#38ff00]">
            Sobre Nexora
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#231f20] sm:text-5xl">
            Una marca construida alrededor de la creatividad, la tecnologia y la impresion 3D.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4b4748]">
            Nexora es un proyecto guatemalteco en crecimiento enfocado en impresion 3D y fabricacion digital.
            Nuestro objetivo es transformar ideas en productos reales mediante tecnologia moderna,
            aprendizaje constante y mejora continua.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-black/8 bg-[#f7faf5] p-5 shadow-sm sm:p-8">
          <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full bg-[#38ff00]/10 blur-3xl" />
          <Image
            src="/brand/new/prtada%203d%20print.png"
            alt="Icono de impresión 3D de Nexora"
            fill
            className="object-cover opacity-20"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="relative grid gap-4 sm:grid-cols-3">
            {[
              ["Innovacion", "nuevas formas de crear"],
              ["Calidad", "atencion al detalle"],
              ["Crecimiento", "evolucion continua"],
            ].map(([big, small]) => (
              <div
                key={big}
                className="rounded-lg border border-black/8 bg-white p-6 shadow-sm"
              >
                <strong className="block text-2xl font-semibold text-[#231f20]">
                  {big}
                </strong>
                <span className="mt-3 block text-sm text-[#5d595a]">
                  {small}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
