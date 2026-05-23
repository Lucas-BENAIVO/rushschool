import type { Metadata } from "next";
import apresImage from "@/assets/apres.jpg";
import avantImage from "@/assets/avant.jpg";
import heroPortrait from "@/assets/image.jpg";
import promoFormationImage from "@/assets/prothesie-ongulaire.jpg";
import formationBrandImage from "@/assets/brand.jpeg";
import formationCilsACilImage from "@/assets/cilacil.jpeg";
import formationNailArtImage from "@/assets/nail.jpeg";
import formationVolumeRusseImage from "@/assets/cilrusse.jpeg";
import formationProthesisteImage from "@/assets/prothesie-ongulaire.jpg";
import { FeaturedFormations } from "@/components/formations";
import { Hero } from "@/components/hero";
import { ShowcaseSection } from "@/components/showcase";

export const metadata: Metadata = {
  title: {
    absolute: "K Beauty Academy",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero imageSrc={heroPortrait} promoImageSrc={promoFormationImage} />
      <FeaturedFormations
        images={{
          prothesiste: formationProthesisteImage,
          "cils-cil-a-cil": formationCilsACilImage,
          "volume-russe": formationVolumeRusseImage,
          "nail-art": formationNailArtImage,
          business: formationBrandImage,
        }}
      />
      <ShowcaseSection
        resultsImages={{
          before: avantImage,
          after: apresImage,
        }}
      />
      <section
        id="offre"
        className="sr-only"
        aria-label="Offre de lancement"
      />
    </main>
  );
}
