type IconProps = { className?: string };

export function GiftTrustIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="8" width="18" height="13" rx="1" />
      <path d="M12 8V21M3 12h18M12 8c-2-2-4-2-4 0s2 2 4 0 4-2 4 0-2-2-4 0" />
    </svg>
  );
}

export function CalendarTrustIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  );
}

export function SupportTrustIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M4 12v2a2 2 0 0 0 2 2h1l2 5 3-5h3a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function UsersTrustIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M14 19c0-2 1.5-3.5 4-3.5" />
    </svg>
  );
}

export function DocumentTrustIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M8 4h8l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M16 4v4h4M10 12h6M10 16h6" />
    </svg>
  );
}

const TRUST_ICON_MAP = {
  gift: GiftTrustIcon,
  calendar: CalendarTrustIcon,
  support: SupportTrustIcon,
  users: UsersTrustIcon,
  document: DocumentTrustIcon,
} as const;

export function TrustIcon({
  name,
  className,
}: {
  name: keyof typeof TRUST_ICON_MAP;
  className?: string;
}) {
  const Icon = TRUST_ICON_MAP[name];
  return <Icon className={className} />;
}
