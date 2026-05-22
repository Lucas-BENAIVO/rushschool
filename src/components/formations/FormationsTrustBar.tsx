import { FormationsTrustItem } from "@/components/formations/FormationsTrustItem";
import { FORMATIONS_TRUST_ITEMS } from "@/lib/formations-data";

export function FormationsTrustBar() {
  return (
    <ul className="mt-6 flex flex-wrap gap-4 border-t border-[var(--kba-charcoal)]/8 pt-5 sm:mt-7 sm:gap-5 sm:pt-6 lg:flex-nowrap lg:justify-between lg:gap-6">
      {FORMATIONS_TRUST_ITEMS.map((item) => (
        <FormationsTrustItem key={item.id} label={item.label} icon={item.icon} />
      ))}
    </ul>
  );
}
