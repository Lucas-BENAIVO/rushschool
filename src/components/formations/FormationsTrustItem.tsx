import { TrustIcon } from "@/components/formations/icons/TrustIcons";

type FormationsTrustItemProps = {
  label: string;
  icon: "gift" | "calendar" | "support" | "users" | "document";
};

export function FormationsTrustItem({ label, icon }: FormationsTrustItemProps) {
  return (
    <li className="flex min-w-[130px] flex-1 items-center gap-2 sm:min-w-0">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--kba-primary)]/12 text-[var(--kba-primary)]">
        <TrustIcon name={icon} />
      </span>
      <span className="text-[12px] font-medium leading-snug text-[var(--kba-charcoal)] sm:text-[13px]">
        {label}
      </span>
    </li>
  );
}
