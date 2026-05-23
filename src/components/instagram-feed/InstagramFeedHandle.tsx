import Link from "next/link";

type InstagramFeedHandleProps = {
  handle: string;
  href: string;
};

export function InstagramFeedHandle({ handle, href }: InstagramFeedHandleProps) {
  return (
    <Link
      id="instagram-feed-handle"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-serif text-xl font-medium tracking-tight text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)] sm:text-2xl"
    >
      {handle}
    </Link>
  );
}
