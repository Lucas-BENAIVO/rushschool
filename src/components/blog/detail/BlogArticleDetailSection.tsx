import { BlogArticleAside } from "@/components/blog/detail/BlogArticleAside";
import { BlogArticleBody } from "@/components/blog/detail/BlogArticleBody";
import { BlogArticleHero } from "@/components/blog/detail/BlogArticleHero";
import { FormationsTrustBar } from "@/components/formations/FormationsTrustBar";
import type { BlogArticle } from "@/lib/blog-data";
import type { ImageSource } from "@/types/images";

type BlogArticleDetailSectionProps = {
  article: BlogArticle;
  imageSrc?: ImageSource;
};

export function BlogArticleDetailSection({
  article,
  imageSrc,
}: BlogArticleDetailSectionProps) {
  return (
    <article className="w-full pb-8 pt-4 sm:pb-10 sm:pt-5 lg:pb-12 lg:pt-6">
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 sm:px-8">
        <BlogArticleHero article={article} imageSrc={imageSrc} />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <BlogArticleBody article={article} />
          </div>
          <div className="lg:col-span-4">
            <BlogArticleAside article={article} />
          </div>
        </div>

        <div
          className="mt-12 rounded-2xl px-4 py-6 sm:px-6"
          style={{ backgroundColor: "var(--kba-showcase-bg)" }}
        >
          <FormationsTrustBar />
        </div>
      </div>
    </article>
  );
}
