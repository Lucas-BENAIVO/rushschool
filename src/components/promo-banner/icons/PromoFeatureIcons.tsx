type IconProps = { className?: string };

export function SupportPromoIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}

export function CertificatePromoIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M8 14l-2 8 6-3 6 3-2-8" />
    </svg>
  );
}

const ICON_MAP = {
  support: SupportPromoIcon,
  certificate: CertificatePromoIcon,
} as const;

export function PromoFeatureIcon({
  name,
  className,
}: {
  name: keyof typeof ICON_MAP;
  className?: string;
}) {
  const Icon = ICON_MAP[name];
  return <Icon className={className} />;
}
