import { FormationCard } from "@/components/formations/FormationCard";
import { FEATURED_FORMATIONS } from "@/lib/formations-data";
import type { ImageSource } from "@/types/images";

export type FormationImagesMap = Partial<Record<string, ImageSource>>;

type FormationsGridLayout = "carousel" | "grid";

type FormationsGridProps = {
  images?: FormationImagesMap;
  layout?: FormationsGridLayout;
};

const LAYOUT_CLASSES: Record<FormationsGridLayout, string> = {
  carousel:
    "flex w-full min-w-0 gap-4 overflow-x-auto overscroll-x-contain pb-2 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-3 xl:grid-cols-5",
  grid: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6",
};

const ITEM_CLASSES: Record<FormationsGridLayout, string> = {
  carousel: "w-[min(280px,100%)] shrink-0 snap-start sm:w-auto",
  grid: "w-full",
};

export function FormationsGrid({
  images = {},
  layout = "carousel",
}: FormationsGridProps) {
  return (
    <div className={LAYOUT_CLASSES[layout]}>
      {FEATURED_FORMATIONS.map((formation) => (
        <div key={formation.id} className={ITEM_CLASSES[layout]}>
          <FormationCard
            formation={formation}
            imageSrc={images[formation.id]}
          />
        </div>
      ))}
    </div>
  );
}
