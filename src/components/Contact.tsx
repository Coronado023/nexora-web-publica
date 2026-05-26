import { Mail, MessageCircle } from "lucide-react";
import { brand, channels } from "@/data/site";

// Formulario basico para lanzamiento. Luego puede conectarse a un CRM o backend propio.
export function Contact() {
  return (
    <section id="contacto" className="border-t border-white/10 bg-[#08080d] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#38f8a8]">
              Contacto
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Hablemos de tu proxima pieza, sistema o automatizacion.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-white/12 px-4 text-sm text-white/82 transition hover:border-[#38f8a8]/65 hover:text-white"
                >
                  <MessageCircle size={16} />
                  {channel.label}
                </a>
              ))}
            </div>
          </div>
          <form className="grid gap-4" action={`mailto:${brand.email}`}>
            <input className="h-12 rounded-md border border-white/10 bg-black/30 px-4 outline-none transition placeholder:text-white/32 focus:border-[#38f8a8]/70" placeholder="Nombre" />
            <input className="h-12 rounded-md border border-white/10 bg-black/30 px-4 outline-none transition placeholder:text-white/32 focus:border-[#38f8a8]/70" placeholder="Correo" type="email" />
            <textarea className="min-h-32 rounded-md border border-white/10 bg-black/30 p-4 outline-none transition placeholder:text-white/32 focus:border-[#38f8a8]/70" placeholder="Cuentanos que quieres construir" />
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#a33bff] font-semibold text-white transition hover:bg-[#b968ff]" type="submit">
              Enviar mensaje
              <Mail size={17} />
            </button>
          </form>
        </div>
        <footer className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Nexora. Ideas que toman forma.</span>
          <span>Impresion 3D, tecnologia y desarrollo digital.</span>
        </footer>
      </div>
    </section>
  );
}
