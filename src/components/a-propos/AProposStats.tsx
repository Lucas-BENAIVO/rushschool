import { A_PROPOS_STATS } from "@/lib/a-propos-data";

export function AProposStats() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
      {A_PROPOS_STATS.map((stat) => (
        <li
          key={stat.id}
          className="rounded-xl border border-[var(--kba-charcoal)]/8 bg-white px-5 py-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
        >
          <p
            className={`font-serif text-3xl font-medium leading-none ${
              "highlight" in stat && stat.highlight
                ? "text-[var(--kba-primary)]"
                : "text-[var(--kba-charcoal)]"
            }`}
          >
            {stat.value}
          </p>
          <p className="mt-2 text-[13px] text-[var(--kba-muted)]">{stat.label}</p>
        </li>
      ))}
    </ul>
  );
}
