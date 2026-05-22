import type { ReactNode } from "react";

type ShowcaseTitleProps = {
  children: ReactNode;
  centered?: boolean;
};

export function ShowcaseTitle({ children, centered = false }: ShowcaseTitleProps) {
  return (
    <h2
      className={`font-serif text-xl font-medium leading-snug tracking-tight text-[var(--kba-charcoal)] sm:text-2xl ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}
