import { RESERVER_APPEL_STEPS } from "@/lib/reserver-appel-data";

export function ReserverAppelSteps() {
  return (
    <ol className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
      {RESERVER_APPEL_STEPS.map((step) => (
        <li
          key={step.id}
          className="rounded-xl border border-[var(--kba-charcoal)]/8 bg-white p-4 sm:p-5"
        >
          <h2 className="text-[14px] font-semibold leading-snug text-[var(--kba-charcoal)]">
            {step.title}
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[var(--kba-muted)]">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
