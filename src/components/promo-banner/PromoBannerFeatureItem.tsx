import { PromoFeatureIcon } from "@/components/promo-banner/icons/PromoFeatureIcons";

type PromoBannerFeatureItemProps = {
  label: string;
  icon: "support" | "certificate";
};

export function PromoBannerFeatureItem({ label, icon }: PromoBannerFeatureItemProps) {
  return (
    <li className="flex items-center gap-1 text-[10px] font-medium text-[var(--kba-charcoal)] sm:text-[11px]">
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--kba-charcoal)]/15 text-[var(--kba-charcoal)]">
        <PromoFeatureIcon name={icon} />
      </span>
      {label}
    </li>
  );
}
