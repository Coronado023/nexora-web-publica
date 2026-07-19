import { services } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

// Servicios principales de Nexora. La informacion viene desde src/data/site.ts.
export function Services() {
  return (
    <section id="servicios" className="relative border-t border-black/6 bg-[#f7faf5] py-24">
      <SectionHeader
  label="Servicios"
  title="Productos y soluciones creadas mediante impresion 3D."
  text="Fabricamos productos funcionales, decorativos y personalizados utilizando tecnologia de impresion 3D y fabricacion digital."
/>
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="group rounded-xl border border-black/8 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#38ff00]/55 hover:shadow-lg"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-md border border-[#38ff00]/35 bg-[#38ff00]/10 text-[#38ff00]">
                <Icon size={21} />
              </div>
              <h3 className="text-xl font-semibold text-[#231f20]">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5d595a]">{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
