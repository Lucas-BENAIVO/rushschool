type ShowcaseEyebrowProps = {
  children: string;
  centered?: boolean;
};

export function ShowcaseEyebrow({
  children,
  centered = false,
}: ShowcaseEyebrowProps) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kba-primary)] ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}
