import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";
import { FOOTER_SOCIAL_LINKS } from "@/lib/footer-links";

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  YouTube: YouTubeIcon,
  Facebook: FacebookIcon,
} as const;

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-4">
      {FOOTER_SOCIAL_LINKS.map((social) => {
        const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];

        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/85 transition-colors hover:text-[var(--kba-primary)]"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
