type FormationCardFeaturesProps = {
  features: string[];
};

export function FormationCardFeatures({ features }: FormationCardFeaturesProps) {
  return (
    <ul className="flex flex-col gap-1">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-1.5 text-[11px] leading-tight text-[var(--kba-muted)]"
        >
          <span
            className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--kba-muted)]/50"
            aria-hidden
          />
          {feature}
        </li>
      ))}
    </ul>
  );
}
