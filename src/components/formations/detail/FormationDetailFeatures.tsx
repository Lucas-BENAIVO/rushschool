import type { FormationCardData } from "@/lib/formations-data";

type FormationDetailFeaturesProps = {
  formation: FormationCardData;
};

export function FormationDetailFeatures({
  formation,
}: FormationDetailFeaturesProps) {
  return (
    <section aria-labelledby="formation-program-title">
      <h2
        id="formation-program-title"
        className="font-serif text-xl font-medium text-[var(--kba-charcoal)] sm:text-2xl"
      >
        Ce que vous apprenez
      </h2>
      <ul className="mt-5 flex flex-col gap-3">
        {formation.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-3 text-[14px] text-[var(--kba-charcoal)]"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kba-primary)]"
              aria-hidden
            />
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
