import { InstagramFeedTile } from "@/components/instagram-feed/InstagramFeedTile";
import { INSTAGRAM_FEED_TILES } from "@/lib/instagram-feed-data";
import type { ImageSource } from "@/types/images";

export type InstagramFeedImagesMap = Partial<
  Record<(typeof INSTAGRAM_FEED_TILES)[number]["id"], ImageSource>
>;

type InstagramFeedGalleryProps = {
  images?: InstagramFeedImagesMap;
};

export function InstagramFeedGallery({ images = {} }: InstagramFeedGalleryProps) {
  return (
    <div
      className="min-w-0 flex-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Aperçu du fil Instagram"
    >
      <div className="flex gap-2 sm:gap-2.5">
        {INSTAGRAM_FEED_TILES.map((tile) => (
          <InstagramFeedTile
            key={tile.id}
            alt={tile.alt}
            imageFile={tile.imageFile}
            src={images[tile.id]}
          />
        ))}
      </div>
    </div>
  );
}
