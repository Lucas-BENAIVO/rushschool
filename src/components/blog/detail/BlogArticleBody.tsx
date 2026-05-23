import type { BlogArticle } from "@/lib/blog-data";

type BlogArticleBodyProps = {
  article: BlogArticle;
};

export function BlogArticleBody({ article }: BlogArticleBodyProps) {
  return (
    <section aria-label="Contenu de l'article">
      <div className="flex flex-col gap-5">
        {article.body.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
