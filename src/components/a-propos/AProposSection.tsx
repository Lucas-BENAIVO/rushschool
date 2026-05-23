import { AProposApproach } from "@/components/a-propos/AProposApproach";
import { AProposCommitments } from "@/components/a-propos/AProposCommitments";
import { AProposCta } from "@/components/a-propos/AProposCta";
import { AProposFounder } from "@/components/a-propos/AProposFounder";
import { AProposIntro } from "@/components/a-propos/AProposIntro";
import { AProposPageHeader } from "@/components/a-propos/AProposPageHeader";
import { AProposStats } from "@/components/a-propos/AProposStats";
import { AProposValues } from "@/components/a-propos/AProposValues";
import type { ImageSource } from "@/types/images";

type AProposSectionProps = {
  images: {
    classroom: ImageSource;
    founder: ImageSource;
  };
};

export function AProposSection({ images }: AProposSectionProps) {
  return (
    <section
      className="w-full pb-10 pt-4 sm:pb-14 sm:pt-5"
      style={{ backgroundColor: "var(--kba-hero-bg)" }}
      aria-label="À propos de K Beauty Academy"
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <AProposPageHeader />

        <div className="mt-10 sm:mt-12">
          <AProposIntro imageSrc={images.classroom} />
        </div>

        <div className="mt-10 sm:mt-12">
          <AProposStats />
        </div>

        <div className="mt-12 sm:mt-14">
          <AProposValues />
        </div>

        <div className="mt-12 sm:mt-14">
          <AProposApproach />
        </div>

        <div className="mt-12 sm:mt-14">
          <AProposFounder imageSrc={images.founder} />
        </div>

        <div className="mt-12 sm:mt-14">
          <AProposCommitments />
        </div>

        <div className="mt-12 sm:mt-14">
          <AProposCta />
        </div>
      </div>
    </section>
  );
}
