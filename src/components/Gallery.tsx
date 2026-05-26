import { Layers3 } from "lucide-react";
import { gallery } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

// Galeria visual temporal. En la siguiente etapa puedes reemplazar los fondos por fotos reales.
export function Gallery() {
  return (
    <section id="galeria" className="border-t border-white/10 bg-[#08080d] py-24">
      <SectionHeader
        label="Galeria"
        title="Impresiones 3D con presencia de producto."
        text="Una base visual lista para crecer con fotografias reales y colecciones."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-4">
        {gallery.map((item, index) => (
          <article
            key={item}
            className="group relative min-h-72 overflow-hidden rounded-lg border border-white/10 bg-[#0d0d15] p-5"
          >
            <div className={`gallery-${index + 1} absolute inset-0 opacity-80`} />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <Layers3 className="mb-4 text-[#38f8a8]" size={26} />
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-white/62">Preparado para catalogo y ecommerce.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
