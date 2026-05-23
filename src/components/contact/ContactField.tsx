import type { ReactNode } from "react";

const FIELD_CLASS =
  "box-border w-full rounded-lg border border-[var(--kba-charcoal)]/12 bg-white px-4 py-3 text-[15px] text-[var(--kba-charcoal)] outline-none transition-colors placeholder:text-[var(--kba-muted)]/60 focus:border-[var(--kba-primary)] sm:text-[14px]";

type ContactFieldProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export function ContactField({ id, label, children }: ContactFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[13px] font-semibold text-[var(--kba-charcoal)]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function contactInputClassName() {
  return FIELD_CLASS;
}

export function contactTextareaClassName() {
  return `${FIELD_CLASS} min-h-[140px] resize-y`;
}
