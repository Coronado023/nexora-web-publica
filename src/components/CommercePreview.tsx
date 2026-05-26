import { ShoppingBag } from "lucide-react";

// Bloque de preparacion para ecommerce futuro: catalogo, cotizaciones y checkout.
export function CommercePreview() {
  return (
    <section className="border-t border-white/10 bg-[#050507] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a33bff]">
            Futuro ecommerce
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Lista para evolucionar hacia tienda, catalogo y pagos.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/64">
            La estructura permite sumar productos, categorias, fichas tecnicas, inventario y checkout cuando Nexora lo necesite.
          </p>
        </div>
        <div className="rounded-lg border border-[#38f8a8]/25 bg-[#38f8a8]/8 p-6">
          <ShoppingBag className="text-[#38f8a8]" size={30} />
          <div className="mt-8 space-y-4">
            {["Catalogo 3D", "Productos personalizados", "Cotizacion rapida"].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                <span className="text-white/72">{item}</span>
                <span className="text-[#38f8a8]">Ready</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
