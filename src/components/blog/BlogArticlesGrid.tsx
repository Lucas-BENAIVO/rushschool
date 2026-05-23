import { BlogArticleCard } from "@/components/blog/BlogArticleCard";
import type { BlogArticle } from "@/lib/blog-data";
import type { BlogImagesMap } from "@/lib/blog-images";

type BlogArticlesGridProps = {
  articles: BlogArticle[];
  images?: BlogImagesMap;
};

export function BlogArticlesGrid({ articles, images = {} }: BlogArticlesGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {articles.map((article) => (
        <li key={article.id}>
          <BlogArticleCard article={article} imageSrc={images[article.id]} />
        </li>
      ))}
    </ul>
  );
}
