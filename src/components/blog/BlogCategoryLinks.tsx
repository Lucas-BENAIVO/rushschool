"use client";

import { BLOG_ALL_CATEGORY, BLOG_CATEGORIES } from "@/lib/blog-data";
import type { BlogCategoryFilter } from "@/lib/blog-data";

type BlogCategoryLinksProps = {
  activeCategory: BlogCategoryFilter;
  onCategoryChange: (category: BlogCategoryFilter) => void;
};

function filterButtonClass(isActive: boolean) {
  return `inline-flex rounded-full border px-4 py-1.5 text-[12px] font-semibold transition-colors ${
    isActive
      ? "border-[var(--kba-primary)] bg-[var(--kba-primary)] text-white"
      : "border-[var(--kba-charcoal)]/12 bg-white font-medium text-[var(--kba-charcoal)] hover:border-[var(--kba-primary)]/40 hover:text-[var(--kba-primary)]"
  }`;
}

export function BlogCategoryLinks({
  activeCategory,
  onCategoryChange,
}: BlogCategoryLinksProps) {
  return (
    <nav aria-label="Catégories du blog">
      <ul className="flex flex-wrap gap-2">
        <li>
          <button
            type="button"
            onClick={() => onCategoryChange(BLOG_ALL_CATEGORY)}
            className={filterButtonClass(activeCategory === BLOG_ALL_CATEGORY)}
            aria-pressed={activeCategory === BLOG_ALL_CATEGORY}
          >
            Tous les articles
          </button>
        </li>
        {BLOG_CATEGORIES.map((category) => (
          <li key={category.slug}>
            <button
              type="button"
              onClick={() => onCategoryChange(category.slug)}
              className={filterButtonClass(activeCategory === category.slug)}
              aria-pressed={activeCategory === category.slug}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
