import Link from "next/link";
import type { FormationCardVariant } from "@/lib/formations-data";

type FormationCardButtonProps = {
  href: string;
  label: string;
  variant: FormationCardVariant;
  outlineTextPrimary?: boolean;
};

export function FormationCardButton({
  href,
  label,
  variant,
  outlineTextPrimary = false,
}: FormationCardButtonProps) {
  const base =
    "flex h-9 w-full items-center justify-center rounded-lg text-[12px] font-semibold transition-colors";

  const styles =
    variant === "primary"
      ? `${base} bg-[var(--kba-primary)] text-white hover:bg-[var(--kba-primary-hover)]`
      : `${base} border border-[var(--kba-charcoal)]/20 bg-white ${
          outlineTextPrimary
            ? "text-[var(--kba-primary)] hover:border-[var(--kba-primary)]"
            : "text-[var(--kba-charcoal)] hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)]"
        }`;

  return (
    <Link href={href} className={styles}>
      {label}
    </Link>
  );
}
