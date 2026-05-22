import Link from "next/link";

export function TopBanner() {
  return (
    <div
      className="flex h-10 w-full items-center justify-center px-4 text-center text-[13px] leading-snug tracking-wide text-[var(--kba-banner-text)]"
      style={{ backgroundColor: "var(--kba-banner-bg)" }}
    >
      <p className="max-w-5xl">
        <span aria-hidden>🎁 </span>
        OFFRE DE LANCEMENT : -10% sur toutes nos formations jusqu&apos;au 31
        Mai !{" "}
        <Link
          href="#offre"
          className="font-semibold text-[var(--kba-charcoal)] underline decoration-[var(--kba-primary)] decoration-1 underline-offset-2 transition-colors hover:text-[var(--kba-primary)]"
        >
          Découvrir l&apos;offre
        </Link>
      </p>
    </div>
  );
}
