import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

type HeroButtonProps = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

export function HeroButton({ href, label, variant }: HeroButtonProps) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--kba-primary)] px-6 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[var(--kba-primary-hover)]"
      >
        {label}
        <ArrowRightIcon />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[var(--kba-charcoal)]/25 bg-white px-6 text-[14px] font-semibold text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)]"
    >
      <PhoneIcon />
      {label}
    </Link>
  );
}
