import { FeatureIcon } from "@/components/hero/icons/FeatureIcons";
import { A_PROPOS_APPROACH } from "@/lib/a-propos-data";

export function AProposApproach() {
  const { eyebrow, title, lead, items } = A_PROPOS_APPROACH;

  return (
    <div
      className="rounded-2xl px-5 py-8 sm:px-8 sm:py-10"
      style={{ backgroundColor: "var(--kba-why-us-bg)" }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--kba-muted)]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight text-[var(--kba-charcoal)] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
        {lead}
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-3 rounded-xl border border-[var(--kba-charcoal)]/6 bg-white/70 p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kba-primary)]/15 text-[var(--kba-primary)]">
              <FeatureIcon name={item.icon} />
            </div>
            <div>
              <p className="text-[15px] font-semibold leading-snug text-[var(--kba-charcoal)]">
                {item.title}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--kba-muted)]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
