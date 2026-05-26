import { services } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

// Servicios principales de Nexora. La informacion viene desde src/data/site.ts.
export function Services() {
  return (
    <section id="servicios" className="relative border-t border-white/10 bg-[#08080d] py-24">
      <SectionHeader
        label="Servicios"
        title="Un laboratorio creativo para productos fisicos y digitales."
        text="Soluciones enfocadas en velocidad, estetica y ejecucion."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#38f8a8]/45 hover:bg-white/[0.06]"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-md border border-[#a33bff]/35 bg-[#a33bff]/10 text-[#d6b2ff]">
                <Icon size={21} />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
