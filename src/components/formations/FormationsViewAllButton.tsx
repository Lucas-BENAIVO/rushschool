import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { ROUTES } from "@/lib/routes";

export function FormationsViewAllButton() {
  return (
    <Link
      href={ROUTES.formations}
      className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-[var(--kba-charcoal)]/20 bg-white px-5 text-[13px] font-semibold text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)]"
    >
      Voir toutes les formations
      <ArrowRightIcon />
    </Link>
  );
}
