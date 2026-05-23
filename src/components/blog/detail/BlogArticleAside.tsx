import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { BLOG_CTA } from "@/lib/blog-data";
import type { BlogArticle } from "@/lib/blog-data";

type BlogArticleAsideProps = {
  article: BlogArticle;
};

export function BlogArticleAside({ article }: BlogArticleAsideProps) {
  const { primaryLabel, primaryHref, secondaryLabel, secondaryHref } = BLOG_CTA;

  return (
    <aside className="flex flex-col gap-6">
      <div
        className="rounded-2xl p-5 sm:p-6"
        style={{ backgroundColor: "var(--kba-why-us-bg)" }}
      >
        <h2 className="font-serif text-lg font-medium text-[var(--kba-charcoal)]">
          À retenir
        </h2>
        <ul className="mt-4 flex flex-col gap-2.5">
          {article.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-[13px] leading-snug text-[var(--kba-charcoal)]"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kba-primary)]"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-[var(--kba-charcoal)]/8 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-6">
        <h2 className="font-serif text-lg font-medium text-[var(--kba-charcoal)]">
          {BLOG_CTA.title}
        </h2>
        <p className="mt-2 text-[14px] leading-relaxed text-[var(--kba-muted)]">
          {BLOG_CTA.description}
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <Link
            href={primaryHref}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--kba-primary)] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--kba-primary-hover)]"
          >
            {primaryLabel}
            <ArrowRightIcon />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--kba-charcoal)]/15 px-5 text-[14px] font-semibold text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)]"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </aside>
  );
}
