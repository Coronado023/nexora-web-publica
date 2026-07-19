import { Mail, MessageCircle } from "lucide-react";
import { brand, channels } from "@/data/site";

// Formulario basico para lanzamiento. Luego puede conectarse a un CRM o backend propio.
export function Contact() {
  return (
    <section id="contacto" className="border-t border-black/6 bg-[#f7faf5] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 rounded-xl border border-black/8 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#38ff00]">
              Contacto
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
  Hablemos de tu proximo proyecto.
</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-black/12 px-4 text-sm text-[#4b4748] transition hover:border-[#38ff00]/65 hover:text-[#1ca800]"
                >
                  <MessageCircle size={16} />
                  {channel.label}
                </a>
              ))}
            </div>
          </div>
          <form className="grid gap-4" action={`mailto:${brand.email}`}>
            <input className="h-12 rounded-md border border-black/10 bg-[#fbfcfa] px-4 outline-none transition placeholder:text-[#231f20]/40 focus:border-[#38ff00]/70" placeholder="Nombre" />
            <input className="h-12 rounded-md border border-black/10 bg-[#fbfcfa] px-4 outline-none transition placeholder:text-[#231f20]/40 focus:border-[#38ff00]/70" placeholder="Correo" type="email" />
            <textarea className="min-h-32 rounded-md border border-black/10 bg-[#fbfcfa] p-4 outline-none transition placeholder:text-[#231f20]/40 focus:border-[#38ff00]/70" placeholder="Cuéntanos tu idea o el producto que buscas" />
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#38ff00] font-semibold text-[#17220f] transition hover:bg-[#73ff4f]" type="submit">
              Enviar mensaje
              <Mail size={17} />
            </button>
          </form>
        </div>
        <footer className="flex flex-col gap-4 border-t border-black/8 py-8 text-sm text-[#231f20]/55 sm:flex-row sm:items-center sm:justify-between">
          <span>Nexora. Ideas que toman forma.</span>
          <span>Impresion 3D, fabricacion digital y creatividad.</span>
        </footer>
      </div>
    </section>
  );
}
