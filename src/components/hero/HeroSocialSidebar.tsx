import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";
import { FOOTER_SOCIAL_LINKS } from "@/lib/footer-links";

const SIDEBAR_ICONS = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  YouTube: YouTubeIcon,
  Facebook: FacebookIcon,
} as const;

export function HeroSocialSidebar() {
  return (
    <aside
      className="absolute right-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 rounded-l-lg border border-r-0 border-black/[0.06] bg-white/90 px-2 py-4 shadow-sm backdrop-blur-sm xl:flex"
      aria-label="Réseaux sociaux"
    >
      {FOOTER_SOCIAL_LINKS.map((social) => {
        const Icon = SIDEBAR_ICONS[social.label as keyof typeof SIDEBAR_ICONS];

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-8 w-8 items-center justify-center text-[var(--kba-charcoal)] transition-colors hover:text-[var(--kba-primary)]"
          >
            <Icon />
          </a>
        );
      })}
    </aside>
  );
}
