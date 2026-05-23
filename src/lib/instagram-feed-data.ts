export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/kbeauty.academy";

export const INSTAGRAM_FEED_CONTENT = {
  eyebrow: "Suivez-nous sur Instagram",
  handle: "@kbeauty.academy",
  profileUrl: INSTAGRAM_PROFILE_URL,
} as const;

/** Fichiers attendus dans `src/assets/instagram/` */
export const INSTAGRAM_FEED_TILES = [
  {
    id: "post-1",
    alt: "Publication Instagram K Beauty Academy — ongles",
    imageFile: "instagram-01.jpg",
  },
  {
    id: "post-2",
    alt: "Publication Instagram K Beauty Academy — cils",
    imageFile: "instagram-02.jpg",
  },
  {
    id: "post-3",
    alt: "Publication Instagram K Beauty Academy — formation",
    imageFile: "instagram-03.jpg",
  },
  {
    id: "post-4",
    alt: "Publication Instagram K Beauty Academy — résultat",
    imageFile: "instagram-04.jpg",
  },
  {
    id: "post-5",
    alt: "Publication Instagram K Beauty Academy — certification",
    imageFile: "instagram-05.jpg",
  },
  {
    id: "post-6",
    alt: "Publication Instagram K Beauty Academy — atelier",
    imageFile: "instagram-06.jpg",
  },
  {
    id: "post-7",
    alt: "Publication Instagram K Beauty Academy — communauté",
    imageFile: "instagram-07.jpg",
  },
] as const;
