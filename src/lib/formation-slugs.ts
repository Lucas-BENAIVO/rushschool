import { FEATURED_FORMATIONS } from "@/lib/formations-data";

export const FORMATION_SLUGS: Record<string, string> = Object.fromEntries(
  FEATURED_FORMATIONS.map((formation) => [formation.slug, formation.title]),
);
