import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { FORMATION_SLUGS } from "@/lib/formation-slugs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(FORMATION_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = FORMATION_SLUGS[slug];

  if (!title) {
    return { title: "Formation introuvable" };
  }

  return { title };
}

export default async function FormationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const title = FORMATION_SLUGS[slug];

  if (!title) {
    notFound();
  }

  return (
    <PageShell
      title={title}
      description="Détail de la formation — contenu à venir."
    />
  );
}
