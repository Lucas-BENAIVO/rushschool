import type { BoutiqueCategory } from "@/lib/boutique-data";

type BoutiqueCategoryHeaderProps = {
  category: BoutiqueCategory;
};

export function BoutiqueCategoryHeader({ category }: BoutiqueCategoryHeaderProps) {
  return (
    <header className="max-w-2xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--kba-primary)]">
        Catégorie
      </p>
      <h1 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--kba-charcoal)] sm:text-4xl">
        {category.title}
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
        {category.description}
      </p>
    </header>
  );
}
