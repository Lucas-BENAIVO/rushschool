import Link from "next/link";
import { ROUTES } from "@/lib/routes";

type HeaderButtonProps = {
  href?: string;
  label: string;
  variant?: "primary";
};

export function HeaderButton({
  href = ROUTES.reserverAppel,
  label,
  variant = "primary",
}: HeaderButtonProps) {
  const className =
    variant === "primary"
      ? "inline-flex h-10 items-center justify-center rounded-md bg-[var(--kba-primary)] px-5 text-[13px] font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-[var(--kba-primary-hover)]"
      : "";

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
