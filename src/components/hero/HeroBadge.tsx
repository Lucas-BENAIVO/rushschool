export function HeroBadge() {
  return (
    <p className="inline-flex items-center gap-2.5">
      <span
        className="h-[3px] w-8 shrink-0 rounded-full bg-[var(--kba-primary)]"
        aria-hidden
      />
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kba-primary)]">
        Devenez experte
      </span>
    </p>
  );
}
