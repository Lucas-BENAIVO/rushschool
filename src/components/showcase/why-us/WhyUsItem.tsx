import { CheckIcon } from "@/components/icons/CheckIcon";

type WhyUsItemProps = {
  label: string;
};

export function WhyUsItem({ label }: WhyUsItemProps) {
  return (
    <li className="flex items-start gap-2 text-[12px] leading-snug text-[var(--kba-charcoal)] sm:text-[13px]">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--kba-primary)]/15 text-[var(--kba-primary)]">
        <CheckIcon />
      </span>
      {label}
    </li>
  );
}
