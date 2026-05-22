type HeroStatBadgeProps = {
  value: string;
  label: string;
  highlight?: boolean;
};

export function HeroStatBadge({ value, label, highlight = false }: HeroStatBadgeProps) {
  return (
    <div className="rounded-lg border border-white/80 bg-white/90 px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm">
      <p
        className={`text-[15px] font-semibold leading-none ${
          highlight ? "text-[var(--kba-primary)]" : "text-[var(--kba-charcoal)]"
        }`}
      >
        {value}
      </p>
      <p className="mt-1 text-[11px] leading-tight text-[var(--kba-muted)]">
        {label}
      </p>
    </div>
  );
}
