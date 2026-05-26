// Resumen corto de posicionamiento de marca.
export function About() {
  return (
    <section id="nexora" className="border-t border-white/10 bg-[#050507] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#38f8a8]">
            Sobre Nexora
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Una marca para convertir conceptos en sistemas, objetos y experiencias.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["3D", "fabricacion precisa"],
            ["Digital", "interfaces y sistemas"],
            ["Auto", "procesos optimizados"],
          ].map(([big, small]) => (
            <div key={big} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <strong className="block text-4xl font-semibold text-white">{big}</strong>
              <span className="mt-3 block text-sm text-white/60">{small}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
