import { Suspense } from "react";
import { BlogCatalogClient } from "@/components/blog/BlogCatalogClient";
import { BlogPageHeader } from "@/components/blog/BlogPageHeader";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";
import type { BlogImagesMap } from "@/lib/blog-images";

type BlogCatalogSectionProps = {
  images?: BlogImagesMap;
};

function BlogCatalogFallback() {
  return (
    <div className="mt-8 h-32 animate-pulse rounded-xl bg-[var(--kba-charcoal)]/5 sm:mt-10" />
  );
}

export function BlogCatalogSection({ images }: BlogCatalogSectionProps) {
  return (
    <section
      className="w-full pb-10 pt-4 sm:pb-12 sm:pt-5 lg:pb-14 lg:pt-6"
      style={{ backgroundColor: "var(--kba-hero-bg)" }}
      aria-label="Articles du blog"
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <BlogPageHeader />
        <div className="mt-8">
          <Suspense fallback={<BlogCatalogFallback />}>
            <BlogCatalogClient images={images} />
          </Suspense>
        </div>
        <FormationsTrustBar />
      </div>
    </section>
  );
}
