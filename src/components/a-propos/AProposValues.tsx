import { A_PROPOS_VALUES } from "@/lib/a-propos-data";

export function AProposValues() {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--kba-muted)]">
        Nos valeurs
      </p>
      <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight text-[var(--kba-charcoal)] sm:text-3xl">
        Ce qui guide notre enseignement
      </h2>
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {A_PROPOS_VALUES.map((value) => (
          <li
            key={value.id}
            className="rounded-xl border border-[var(--kba-charcoal)]/8 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-[15px] font-semibold text-[var(--kba-charcoal)]">
              {value.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[var(--kba-muted)]">
              {value.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
