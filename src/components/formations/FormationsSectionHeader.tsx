import { FormationsSectionEyebrow } from "@/components/formations/FormationsSectionEyebrow";
import { FormationsSectionTitle } from "@/components/formations/FormationsSectionTitle";
import { FormationsViewAllButton } from "@/components/formations/FormationsViewAllButton";

export function FormationsSectionHeader() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex max-w-2xl flex-col gap-3">
        <FormationsSectionEyebrow />
        <FormationsSectionTitle />
      </div>
      <FormationsViewAllButton />
    </div>
  );
}
