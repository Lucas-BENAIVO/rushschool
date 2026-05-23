import apresImage from "@/assets/apres.jpg";
import avantImage from "@/assets/avant.jpg";
import type { ImageSource } from "@/types/images";

export const AVIS_ELEVES_IMAGES = {
  before: avantImage,
  after: apresImage,
} satisfies Record<string, ImageSource>;
