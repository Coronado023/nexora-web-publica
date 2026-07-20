export function About() {
  return (
    <section id="nexora" className="border-t border-black/6 bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#38ff00]">
            Sobre Nexora
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#231f20] sm:text-5xl">
            Construyendo una marca con propósito.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4b4748]">
            Nexora nació con la visión de construir una marca enfocada en la
            impresión 3D. Hoy estamos dando nuestros primeros pasos,
            fortaleciendo nuestra identidad y preparándonos para ofrecer
            productos que combinen creatividad, funcionalidad y calidad.
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#666163]">
            Creemos que una marca se construye con transparencia, aprendizaje
            constante y el compromiso de mejorar cada día. Ese es el camino que
            queremos recorrer con Nexora.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-black/8 bg-[#f7faf5] p-5 shadow-sm sm:p-8">
          <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full bg-[#38ff00]/10 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[#38ff00]/5 blur-3xl" />

          <div className="relative grid gap-4 sm:grid-cols-3">
            {[
              [
                "Innovación",
                "Exploramos nuevas ideas para desarrollar productos útiles, creativos y bien diseñados.",
              ],
              [
                "Calidad",
                "Nuestro objetivo es construir una marca que transmita confianza y atención al detalle.",
              ],
              [
                "Crecimiento",
                "Cada paso representa una oportunidad para aprender, mejorar y seguir construyendo Nexora.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-lg border border-black/8 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <strong className="block text-2xl font-semibold text-[#231f20]">
                  {title}
                </strong>

                <span className="mt-3 block text-sm leading-6 text-[#5d595a]">
                  {description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
