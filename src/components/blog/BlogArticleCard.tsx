import Image from "next/image";
import Link from "next/link";
import { getBlogCategoryLabel } from "@/lib/blog-data";
import type { BlogArticle } from "@/lib/blog-data";
import type { ImageSource } from "@/types/images";

type BlogArticleCardProps = {
  article: BlogArticle;
  imageSrc?: ImageSource;
};

export function BlogArticleCard({ article, imageSrc }: BlogArticleCardProps) {
  const categoryLabel = getBlogCategoryLabel(article.categorySlug);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <Link href={article.href} className="group block">
        <div
          className={`relative aspect-[16/10] w-full overflow-hidden ${
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
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[11px] text-[var(--kba-muted)]">
              {article.imageFile}
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[var(--kba-primary)]/12 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--kba-primary)]">
            {categoryLabel}
          </span>
          <span className="text-[11px] text-[var(--kba-muted)]">
            {article.date} · {article.readTime}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <h2 className="font-serif text-lg font-medium leading-snug text-[var(--kba-charcoal)] sm:text-xl">
            <Link
              href={article.href}
              className="transition-colors hover:text-[var(--kba-primary)]"
            >
              {article.title}
            </Link>
          </h2>
          <p className="line-clamp-3 text-[14px] leading-relaxed text-[var(--kba-muted)]">
            {article.excerpt}
          </p>
        </div>

        <Link
          href={article.href}
          className="text-[13px] font-semibold text-[var(--kba-primary)] transition-colors hover:text-[var(--kba-primary-hover)]"
        >
          Lire l&apos;article →
        </Link>
      </div>
    </article>
  );
}
