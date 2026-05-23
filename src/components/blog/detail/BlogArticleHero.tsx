import Image from "next/image";
import { getBlogCategoryLabel } from "@/lib/blog-data";
import type { BlogArticle } from "@/lib/blog-data";
import type { ImageSource } from "@/types/images";

type BlogArticleHeroProps = {
  article: BlogArticle;
  imageSrc?: ImageSource;
};

export function BlogArticleHero({ article, imageSrc }: BlogArticleHeroProps) {
  const categoryLabel = getBlogCategoryLabel(article.categorySlug);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-[5/4] ${
          imageSrc
            ? "bg-white"
            : "bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2]"
        }`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={article.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[12px] text-[var(--kba-muted)]">
            {article.imageFile}
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[var(--kba-primary)]/12 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--kba-primary)]">
            {categoryLabel}
          </span>
          <span className="text-[12px] text-[var(--kba-muted)]">
            {article.date} · {article.readTime} de lecture
          </span>
        </div>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--kba-charcoal)] sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
          {article.excerpt}
        </p>
      </div>
    </div>
  );
}
