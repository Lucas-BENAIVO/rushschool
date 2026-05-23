import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoPanel } from "@/components/contact/ContactInfoPanel";
import { ContactPageHeader } from "@/components/contact/ContactPageHeader";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";

export function ContactSection() {
  return (
    <section
      className="w-full pb-10 pt-4 sm:pb-14 sm:pt-5"
      style={{ backgroundColor: "var(--kba-hero-bg)" }}
      aria-label="Contact K Beauty Academy"
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <ContactPageHeader />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactInfoPanel />
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <FormationsTrustBar />
        </div>
      </div>
    </section>
  );
}
