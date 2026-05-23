import classroomImage from "@/assets/cours.jpg";
import founderImage from "@/assets/image.jpg";
import type { ImageSource } from "@/types/images";

export const A_PROPOS_IMAGES = {
  classroom: classroomImage,
  founder: founderImage,
} satisfies Record<string, ImageSource>;
