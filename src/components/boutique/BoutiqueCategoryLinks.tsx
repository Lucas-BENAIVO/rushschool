"use client";

import {
  BOUTIQUE_ALL_CATEGORY,
  BOUTIQUE_CATEGORIES,
} from "@/lib/boutique-data";
import type { BoutiqueCategoryFilter } from "@/lib/boutique-data";

type BoutiqueCategoryLinksProps = {
  activeCategory: BoutiqueCategoryFilter;
  onCategoryChange: (category: BoutiqueCategoryFilter) => void;
};

function filterButtonClass(isActive: boolean) {
  return `inline-flex rounded-full border px-4 py-1.5 text-[12px] font-semibold transition-colors ${
    isActive
      ? "border-[var(--kba-primary)] bg-[var(--kba-primary)] text-white"
      : "border-[var(--kba-charcoal)]/12 bg-white font-medium text-[var(--kba-charcoal)] hover:border-[var(--kba-primary)]/40 hover:text-[var(--kba-primary)]"
  }`;
}

export function BoutiqueCategoryLinks({
  activeCategory,
  onCategoryChange,
}: BoutiqueCategoryLinksProps) {
  return (
    <nav aria-label="Catégories boutique">
      <ul className="flex flex-wrap gap-2">
        <li>
          <button
            type="button"
            onClick={() => onCategoryChange(BOUTIQUE_ALL_CATEGORY)}
            className={filterButtonClass(activeCategory === BOUTIQUE_ALL_CATEGORY)}
            aria-pressed={activeCategory === BOUTIQUE_ALL_CATEGORY}
          >
            Tous les produits
          </button>
        </li>
        {BOUTIQUE_CATEGORIES.map((category) => (
          <li key={category.slug}>
            <button
              type="button"
              onClick={() => onCategoryChange(category.slug)}
              className={filterButtonClass(activeCategory === category.slug)}
              aria-pressed={activeCategory === category.slug}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
