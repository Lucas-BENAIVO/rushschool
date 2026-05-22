import { FormationCard } from "@/components/formations/FormationCard";
import { FEATURED_FORMATIONS } from "@/lib/formations-data";
import type { ImageSource } from "@/types/images";

export type FormationImagesMap = Partial<Record<string, ImageSource>>;

type FormationsGridProps = {
  images?: FormationImagesMap;
};

export function FormationsGrid({ images = {} }: FormationsGridProps) {
  return (
    <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:grid-cols-5">
      {FEATURED_FORMATIONS.map((formation) => (
        <div
          key={formation.id}
          className="w-[min(280px,85vw)] shrink-0 snap-start sm:w-auto"
        >
          <FormationCard
            formation={formation}
            imageSrc={images[formation.id]}
          />
        </div>
      ))}
    </div>
  );
}
