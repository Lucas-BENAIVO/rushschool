import { Breadcrumb } from "@/components/layout/Breadcrumb";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";

export type BreadcrumbTone = "hero" | "showcase" | "formations" | "white";

const BREADCRUMB_BACKGROUNDS: Record<BreadcrumbTone, string> = {
  hero: "var(--kba-hero-bg)",
  showcase: "var(--kba-showcase-bg)",
  formations: "var(--kba-formations-bg)",
  white: "var(--kba-white)",
};

type BreadcrumbBarProps = {
  items: BreadcrumbItem[];
  /** Aligné sur le fond de la section sous le fil d'Ariane */
  tone?: BreadcrumbTone;
};

export function BreadcrumbBar({ items, tone = "hero" }: BreadcrumbBarProps) {
  return (
    <div style={{ backgroundColor: BREADCRUMB_BACKGROUNDS[tone] }}>
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 pb-1 pt-2.5 sm:px-8 sm:pb-1.5 sm:pt-3">
        <Breadcrumb items={items} />
      </div>
    </div>
  );
}
