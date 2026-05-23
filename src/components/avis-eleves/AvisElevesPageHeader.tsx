import { AVIS_ELEVES_HEADER } from "@/lib/avis-eleves-data";

export function AvisElevesPageHeader() {
  const { eyebrow, title, description } = AVIS_ELEVES_HEADER;

  return (
    <header className="max-w-2xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--kba-muted)]">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--kba-charcoal)] sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
        {description}
      </p>
    </header>
  );
}
