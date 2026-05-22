import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { BOUTIQUE_SLUGS } from "@/lib/boutique-slugs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(BOUTIQUE_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = BOUTIQUE_SLUGS[slug];

  if (!title) {
    return { title: "Produit introuvable" };
  }

  return { title };
}

export default async function BoutiqueCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const title = BOUTIQUE_SLUGS[slug];

  if (!title) {
    notFound();
  }

  return (
    <PageShell
      title={title}
      description="Catégorie boutique — contenu à venir."
    />
  );
}
