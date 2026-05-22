import { FeatureIcon } from "@/components/hero/icons/FeatureIcons";

type HeroFeatureItemProps = {
  title: string;
  description: string;
  icon: "hand" | "certificate" | "support";
};

export function HeroFeatureItem({ title, description, icon }: HeroFeatureItemProps) {
  return (
    <li className="flex min-w-0 flex-1 flex-col gap-2 sm:max-w-[200px]">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--kba-primary)]/15 text-[var(--kba-primary)]">
        <FeatureIcon name={icon} />
      </div>
      <div>
        <p className="text-[13px] font-semibold leading-snug text-[var(--kba-charcoal)]">
          {title}
        </p>
        <p className="mt-0.5 text-[12px] leading-snug text-[var(--kba-muted)]">
          {description}
        </p>
      </div>
    </li>
  );
}
