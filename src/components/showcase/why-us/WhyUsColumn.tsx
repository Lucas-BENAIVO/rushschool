import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { ShowcaseEyebrow } from "@/components/showcase/ShowcaseEyebrow";
import { WhyUsItem } from "@/components/showcase/why-us/WhyUsItem";
import { WHY_US_CONTENT, WHY_US_ITEMS } from "@/lib/showcase-data";

export function WhyUsColumn() {
  const { eyebrow, ctaLabel, ctaHref } = WHY_US_CONTENT;

  return (
    <div
      className="flex h-full flex-col gap-4 rounded-xl p-4 sm:p-5"
      style={{ backgroundColor: "var(--kba-why-us-bg)" }}
    >
      <ShowcaseEyebrow centered>{eyebrow}</ShowcaseEyebrow>

      <ul className="flex flex-1 flex-col gap-2.5">
        {WHY_US_ITEMS.map((item) => (
          <WhyUsItem key={item} label={item} />
        ))}
      </ul>

      <Link
        href={ctaHref}
        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[var(--kba-primary)] text-[13px] font-semibold text-white transition-colors hover:bg-[var(--kba-primary-hover)]"
      >
        <PhoneIcon />
        {ctaLabel}
        <ArrowRightIcon />
      </Link>
    </div>
  );
}
