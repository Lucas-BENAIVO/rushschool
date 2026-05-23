import { InstagramFeedGallery } from "@/components/instagram-feed/InstagramFeedGallery";
import type { InstagramFeedImagesMap } from "@/components/instagram-feed/InstagramFeedGallery";
import { InstagramFeedIntro } from "@/components/instagram-feed/InstagramFeedIntro";
import { InstagramFeedTopBorder } from "@/components/instagram-feed/InstagramFeedTopBorder";

type InstagramFeedSectionProps = {
  images?: InstagramFeedImagesMap;
};

export function InstagramFeedSection({ images }: InstagramFeedSectionProps) {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "var(--kba-instagram-bg)" }}
      aria-labelledby="instagram-feed-handle"
    >
      <InstagramFeedTopBorder />

      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
          <InstagramFeedIntro />
          <InstagramFeedGallery images={images} />
        </div>
      </div>
    </section>
  );
}
