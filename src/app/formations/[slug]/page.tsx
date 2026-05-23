import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FormationDetailSection } from "@/components/formations/detail/FormationDetailSection";
import { formationDetailBreadcrumbs } from "@/lib/breadcrumbs";
import { FORMATION_IMAGES } from "@/lib/formation-images";
import {
  getAllFormationSlugs,
  getFormationBySlug,
} from "@/lib/formations-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllFormationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);

  if (!formation) {
    return { title: "Formation introuvable" };
  }

  return {
    title: formation.title,
    description: formation.description,
  };
}

export default async function FormationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);

  if (!formation) {
    notFound();
  }

  return (
    <main className="flex-1" style={{ backgroundColor: "var(--kba-hero-bg)" }}>
      <BreadcrumbBar items={formationDetailBreadcrumbs(formation.title)} />
      <FormationDetailSection
        formation={formation}
        imageSrc={FORMATION_IMAGES[formation.id]}
      />
    </main>
  );
}
