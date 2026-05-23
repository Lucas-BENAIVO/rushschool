import formationBrandImage from "@/assets/brand.jpeg";
import formationCilsACilImage from "@/assets/cilacil.jpeg";
import formationNailArtImage from "@/assets/nail.jpeg";
import formationVolumeRusseImage from "@/assets/cilrusse.jpeg";
import formationProthesisteImage from "@/assets/prothesie-ongulaire.jpg";
import type { FormationImagesMap } from "@/components/formations/FormationsGrid";

export const FORMATION_IMAGES: FormationImagesMap = {
  prothesiste: formationProthesisteImage,
  "cils-cil-a-cil": formationCilsACilImage,
  "volume-russe": formationVolumeRusseImage,
  "nail-art": formationNailArtImage,
  business: formationBrandImage,
};
