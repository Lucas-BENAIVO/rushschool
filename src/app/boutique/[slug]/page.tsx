import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BoutiqueCategorySection,
  BoutiqueProductDetailSection,
} from "@/components/boutique";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import {
  boutiqueCategoryBreadcrumbs,
  boutiqueProductBreadcrumbs,
} from "@/lib/breadcrumbs";
import { BOUTIQUE_IMAGES } from "@/lib/boutique-images";
import {
  getAllBoutiqueSlugs,
  getBoutiqueCategoryBySlug,
  getBoutiqueEntryBySlug,
} from "@/lib/boutique-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBoutiqueSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getBoutiqueEntryBySlug(slug);

  if (!entry) {
    return { title: "Page introuvable" };
  }

  if (entry.type === "category") {
    return {
      title: entry.category.title,
      description: entry.category.description,
    };
  }

  return {
    title: entry.product.title,
    description: entry.product.description,
  };
}

export default async function BoutiqueSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getBoutiqueEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  if (entry.type === "category") {
    return (
      <main className="flex-1">
        <BreadcrumbBar
          items={boutiqueCategoryBreadcrumbs(entry.category.title)}
          tone="showcase"
        />
        <BoutiqueCategorySection
          category={entry.category}
          images={BOUTIQUE_IMAGES}
        />
      </main>
    );
  }

  const category = getBoutiqueCategoryBySlug(entry.product.categorySlug);

  return (
    <main className="flex-1 bg-white">
      <BreadcrumbBar
        items={boutiqueProductBreadcrumbs(
          entry.product.title,
          category?.title ?? "Boutique",
          entry.product.categorySlug,
        )}
        tone="white"
      />
      <BoutiqueProductDetailSection
        product={entry.product}
        imageSrc={BOUTIQUE_IMAGES[entry.product.id]}
      />
    </main>
  );
}
