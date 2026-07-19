import { Layers3 } from "lucide-react";
import Image from "next/image";
import { gallery } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

// Galeria visual temporal. En la siguiente etapa puedes reemplazar los fondos por fotos reales.
export function Gallery() {
  const brandArtwork = [
    "/brand/new/prtada%203d%20print.png",
    "/brand/new/prtada%20nexora.png",
    "/brand/new/portada%20nexora.png",
    "/brand/new/portada%20proximamente.png",
  ];

  return (
    <section id="galeria" className="border-t border-black/6 bg-[#f7faf5] py-24">
      <SectionHeader
  label="Galeria"
  title="Productos impresos en 3D con diseño y funcionalidad."
  text="Explora algunas de las posibilidades que ofrece la impresion 3D, desde articulos decorativos hasta soluciones practicas para el dia a dia."
/>
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-4">
        {gallery.map((item, index) => (
          <article
            key={item}
            className="group relative min-h-72 overflow-hidden rounded-xl border border-black/8 bg-white p-5 shadow-sm"
          >
            <Image
              src={brandArtwork[index]}
              alt="Arte gráfico de Nexora"
              fill
              className="object-cover opacity-45 transition duration-500 group-hover:scale-105 group-hover:opacity-65"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className={`gallery-${index + 1} absolute inset-0 opacity-80`} />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/80 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <Layers3 className="mb-4 text-[#38ff00]" size={26} />
              <h3 className="text-xl font-semibold text-[#231f20]">{item}</h3>
              <p className="mt-2 text-sm text-[#5d595a]">
  Productos seleccionados para nuestro catalogo y futuros lanzamientos.
</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
