type SectionHeaderProps = {
  label: string;
  title: string;
  text: string;
};

// Encabezado reutilizable para mantener consistencia visual entre secciones.
export function SectionHeader({ label, title, text }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#38f8a8]">
        {label}
      </p>
      <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl leading-7 text-white/62">{text}</p>
    </div>
  );
}
