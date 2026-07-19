import { ShoppingBag } from "lucide-react";

// Bloque de preparacion para ecommerce futuro: catalogo, cotizaciones y checkout.
export function CommercePreview() {
  return (
    <section className="border-t border-black/6 bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#38ff00]">
  Construyendo el siguiente paso
</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
  Una marca en crecimiento, preparada para nuevas posibilidades.
</h2>
          <p className="mt-5 max-w-2xl leading-7 text-[#4b4748]">
  Nexora continua evolucionando. En el futuro incorporaremos catalogo digital, gestion de pedidos y nuevas herramientas para facilitar la experiencia de nuestros clientes.
</p>
        </div>
        <div className="rounded-xl border border-[#38ff00]/35 bg-[#efffea] p-6 shadow-sm">
          <ShoppingBag className="text-[#38ff00]" size={30} />
          <div className="mt-8 space-y-4">
           {["Catalogo de productos", "Pedidos personalizados", "Nuevos lanzamientos"].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-[#231f20]/10 pb-3 text-sm">
                <span className="text-[#4b4748]">{item}</span>
                <span className="text-[#38ff00]">Próximo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
