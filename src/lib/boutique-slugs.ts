import { BOUTIQUE_CATEGORIES } from "@/lib/boutique-data";

/** Titres des catégories — rétrocompatibilité */
export const BOUTIQUE_SLUGS: Record<string, string> = Object.fromEntries(
  BOUTIQUE_CATEGORIES.map((category) => [category.slug, category.title]),
);
