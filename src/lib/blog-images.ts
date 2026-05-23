import blogCoursImage from "@/assets/cours.jpg";
import blogCilsImage from "@/assets/cilacil.jpeg";
import blogFeedImage from "@/assets/feed1.jpg";
import blogKitImage from "@/assets/kit.jpg";
import blogNailImage from "@/assets/nail.jpeg";
import blogProthesisteImage from "@/assets/prothesie-ongulaire.jpg";
import type { ImageSource } from "@/types/images";

export type BlogImagesMap = Partial<Record<string, ImageSource>>;

export const BLOG_IMAGES: BlogImagesMap = {
  "debuter-po": blogProthesisteImage,
  "erreurs-cils": blogCilsImage,
  "kit-debutante": blogKitImage,
  "nail-art-tendances": blogNailImage,
  "financer-formation": blogCoursImage,
  "premieres-prestations": blogFeedImage,
};
