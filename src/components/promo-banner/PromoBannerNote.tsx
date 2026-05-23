type PromoBannerNoteProps = {
  children: string;
};

export function PromoBannerNote({ children }: PromoBannerNoteProps) {
  return (
    <p className="text-[11px] leading-snug text-[var(--kba-muted)]">
      {children}
    </p>
  );
}
