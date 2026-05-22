type FormationCardFeaturesProps = {
  features: string[];
};

export function FormationCardFeatures({ features }: FormationCardFeaturesProps) {
  return (
    <ul className="flex flex-col gap-2">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-2 text-[12px] leading-snug text-[var(--kba-muted)]"
        >
          <span
            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--kba-muted)]/50"
            aria-hidden
          />
          {feature}
        </li>
      ))}
    </ul>
  );
}
