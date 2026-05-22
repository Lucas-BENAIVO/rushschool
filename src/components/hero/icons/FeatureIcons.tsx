type IconProps = { className?: string };

export function HandFeatureIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M8 11V6a2 2 0 1 1 4 0v1M12 7V5a2 2 0 1 1 4 0v6l2 4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4l1-4z" />
    </svg>
  );
}

export function CertificateFeatureIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
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

export function SupportFeatureIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M4 12v2a2 2 0 0 0 2 2h1l2 5 3-5h3a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

const FEATURE_ICON_MAP = {
  hand: HandFeatureIcon,
  certificate: CertificateFeatureIcon,
  support: SupportFeatureIcon,
} as const;

export function FeatureIcon({
  name,
  className,
}: {
  name: keyof typeof FEATURE_ICON_MAP;
  className?: string;
}) {
  const Icon = FEATURE_ICON_MAP[name];
  return <Icon className={className} />;
}
