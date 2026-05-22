import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-2 no-underline"
    >
      <span className="font-serif text-[2.5rem] font-normal leading-none text-[var(--kba-charcoal)] transition-colors group-hover:text-[var(--kba-primary)]">
        K
      </span>
      <span className="flex flex-col gap-0.5 font-serif text-[10px] font-medium uppercase leading-[1.1] tracking-[0.22em] text-[var(--kba-charcoal)]">
        <span>Beauty</span>
        <span>Academy</span>
      </span>
    </Link>
  );
}
