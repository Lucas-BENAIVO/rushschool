import type { Metadata } from "next";
import { BlogCatalogSection } from "@/components/blog";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { blogCatalogBreadcrumbs } from "@/lib/breadcrumbs";
import { BLOG_IMAGES } from "@/lib/blog-images";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conseils, tendances et actualités prothésie ongulaire et extensions de cils — K Beauty Academy.",
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <BreadcrumbBar items={blogCatalogBreadcrumbs()} />
      <BlogCatalogSection images={BLOG_IMAGES} />
    </main>
  );
}
