import { Layers3 } from "lucide-react";
import Image from "next/image";
import { gallery } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

// Inspiración visual de Nexora.
// Esta sección representa la visión y el tipo de productos que la marca busca desarrollar.
export function Gallery() {
  const brandArtwork = [
    "/brand/new/prtada%203d%20print.png",
    "/brand/new/prtada%20nexora.png",
    "/brand/new/portada%20nexora.png",
    "/brand/new/portada%20proximamente.png",
  ];

  return (
    <section
      id="galeria"
      className="border-t border-black/6 bg-[#f7faf5] py-24"
    >
      <SectionHeader
        label="Inspiración"
        title="Ideas que inspiran el futuro de Nexora."
        text="Esta colección representa el tipo de productos y soluciones que queremos desarrollar con el tiempo. Cada categoría refleja nuestra visión de combinar creatividad, funcionalidad y diseño mediante la impresión 3D."
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {gallery.map((item, index) => (
          <article
            key={item}
            className="group relative min-h-72 overflow-hidden rounded-xl border border-black/8 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Image
              src={brandArtwork[index]}
              alt="Inspiración de Nexora"
              fill
              className="object-cover opacity-25 transition duration-500 group-hover:scale-105 group-hover:opacity-40"
              sizes="(max-width: 768px) 100vw, 25vw"
            />

            <div
              className={`gallery-${index + 1} absolute inset-0 opacity-75`}
            />

            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-white via-white/90 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-[#38ff00]/35 bg-[#38ff00]/10 text-[#38ff00] transition duration-300 group-hover:bg-[#38ff00] group-hover:text-[#17220f]">
                <Layers3 size={22} />
              </div>

              <h3 className="text-xl font-semibold text-[#231f20]">
                {item}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#5d595a]">
                Una categoría que representa el tipo de productos que forman
                parte de la visión de Nexora y de los futuros desarrollos de la
                marca.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
