import { About } from "@/components/About";
import { CommercePreview } from "@/components/CommercePreview";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

// Pagina principal del sitio publico de Nexora.
// Cada bloque visual vive en src/components para mantener el proyecto ordenado.
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#231f20]">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <CommercePreview />
      <Contact />
    </main>
  );
}
