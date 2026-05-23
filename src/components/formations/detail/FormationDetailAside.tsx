import { FormationCardButton } from "@/components/formations/FormationCardButton";
import { FORMATIONS_TRUST_ITEMS } from "@/lib/formations-data";
import type { FormationCardData } from "@/lib/formations-data";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

type FormationDetailAsideProps = {
  formation: FormationCardData;
};

export function FormationDetailAside({ formation }: FormationDetailAsideProps) {
  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
      <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.05)] sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--kba-muted)]">
          Tarif formation
        </p>
        <p className="mt-2 font-serif text-3xl font-semibold text-[var(--kba-charcoal)]">
          {formation.price}
        </p>
        <p className="mt-2 text-[13px] text-[var(--kba-muted)]">
          {formation.subtitle}
        </p>
        <div className="mt-5">
          <FormationCardButton
            href={formation.href}
            label={formation.ctaLabel}
            variant={formation.buttonVariant}
            outlineTextPrimary={formation.outlineTextPrimary}
          />
        </div>
        <p className="mt-4 text-center text-[12px] text-[var(--kba-muted)]">
          Places limitées —{" "}
          <Link
            href={ROUTES.contact}
            className="font-medium text-[var(--kba-primary)] underline-offset-2 hover:underline"
          >
            nous contacter
          </Link>
        </p>
      </div>

      <ul className="flex flex-col gap-2 rounded-2xl border border-[var(--kba-primary)]/15 bg-[var(--kba-hero-bg)] px-4 py-4">
        {FORMATIONS_TRUST_ITEMS.slice(0, 3).map((item) => (
          <li
            key={item.id}
            className="text-[12px] font-medium text-[var(--kba-charcoal)]"
          >
            • {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
