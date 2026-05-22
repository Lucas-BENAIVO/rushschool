import { FormationsTrustItem } from "@/components/formations/FormationsTrustItem";
import { FORMATIONS_TRUST_ITEMS } from "@/lib/formations-data";

export function FormationsTrustBar() {
  return (
    <ul className="mt-10 flex flex-wrap gap-6 border-t border-[var(--kba-charcoal)]/8 pt-8 sm:mt-12 sm:gap-8 lg:flex-nowrap lg:justify-between">
      {FORMATIONS_TRUST_ITEMS.map((item) => (
        <FormationsTrustItem key={item.id} label={item.label} icon={item.icon} />
      ))}
    </ul>
  );
}
