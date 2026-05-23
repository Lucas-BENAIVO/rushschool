type InstagramFeedEyebrowProps = {
  children: string;
};

export function InstagramFeedEyebrow({ children }: InstagramFeedEyebrowProps) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--kba-instagram-accent)] sm:text-[11px]">
      {children}
    </p>
  );
}
