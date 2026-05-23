import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";

type PromoBannerCTAProps = {
  href: string;
  label: string;
};

export function PromoBannerCTA({ href, label }: PromoBannerCTAProps) {
  return (
    <Link
      href={href}
      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-[var(--kba-charcoal)] px-4 text-[12px] font-semibold text-white transition-colors hover:bg-black"
    >
      {label}
      <ArrowRightIcon />
    </Link>
  );
}
