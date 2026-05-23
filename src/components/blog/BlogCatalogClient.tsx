"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BlogArticlesGrid } from "@/components/blog/BlogArticlesGrid";
import { BlogCategoryLinks } from "@/components/blog/BlogCategoryLinks";
import {
  BLOG_ALL_CATEGORY,
  getBlogArticlesByCategory,
  isBlogCategoryFilter,
} from "@/lib/blog-data";
import type { BlogCategoryFilter } from "@/lib/blog-data";
import type { BlogImagesMap } from "@/lib/blog-images";
import { ROUTES } from "@/lib/routes";

type BlogCatalogClientProps = {
  images?: BlogImagesMap;
};

function readCategoryFromSearchParams(
  value: string | null,
): BlogCategoryFilter {
  if (value && isBlogCategoryFilter(value)) {
    return value;
  }

  return BLOG_ALL_CATEGORY;
}

export function BlogCatalogClient({ images }: BlogCatalogClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const activeCategory = useMemo(
    () => readCategoryFromSearchParams(categoryParam),
    [categoryParam],
  );

  const filteredArticles = useMemo(
    () => getBlogArticlesByCategory(activeCategory),
    [activeCategory],
  );

  const handleCategoryChange = useCallback(
    (category: BlogCategoryFilter) => {
      const nextUrl =
        category === BLOG_ALL_CATEGORY
          ? ROUTES.blog
          : `${ROUTES.blog}?category=${category}`;

      router.replace(nextUrl, { scroll: false });
    },
    [router],
  );

  return (
    <>
      <BlogCategoryLinks
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="mt-8 sm:mt-10">
        {filteredArticles.length > 0 ? (
          <BlogArticlesGrid articles={filteredArticles} images={images} />
        ) : (
          <p className="text-[14px] text-[var(--kba-muted)]">
            Aucun article dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </>
  );
}
