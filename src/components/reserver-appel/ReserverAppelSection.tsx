import { ReserverAppelAside } from "@/components/reserver-appel/ReserverAppelAside";
import { ReserverAppelBookingForm } from "@/components/reserver-appel/ReserverAppelBookingForm";
import { ReserverAppelPageHeader } from "@/components/reserver-appel/ReserverAppelPageHeader";
import { ReserverAppelSteps } from "@/components/reserver-appel/ReserverAppelSteps";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";

export function ReserverAppelSection() {
  return (
    <section
      className="w-full pb-10 pt-4 sm:pb-14 sm:pt-5"
      style={{ backgroundColor: "var(--kba-hero-bg)" }}
      aria-label="Réserver un appel découverte"
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <ReserverAppelPageHeader />

        <div className="mt-8">
          <ReserverAppelSteps />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ReserverAppelBookingForm />
          </div>
          <div className="lg:col-span-5">
            <ReserverAppelAside />
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <FormationsTrustBar />
        </div>
      </div>
    </section>
  );
}
