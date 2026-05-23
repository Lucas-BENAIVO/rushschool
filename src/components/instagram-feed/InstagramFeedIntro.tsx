import { InstagramFeedEyebrow } from "@/components/instagram-feed/InstagramFeedEyebrow";
import { InstagramFeedHandle } from "@/components/instagram-feed/InstagramFeedHandle";
import { INSTAGRAM_FEED_CONTENT } from "@/lib/instagram-feed-data";

export function InstagramFeedIntro() {
  const { eyebrow, handle, profileUrl } = INSTAGRAM_FEED_CONTENT;

  return (
    <div className="flex shrink-0 flex-col gap-1 sm:gap-1.5 lg:max-w-[190px]">
      <InstagramFeedEyebrow>{eyebrow}</InstagramFeedEyebrow>
      <InstagramFeedHandle handle={handle} href={profileUrl} />
    </div>
  );
}
