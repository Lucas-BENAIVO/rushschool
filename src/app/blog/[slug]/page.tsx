import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleDetailSection } from "@/components/blog";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { blogArticleBreadcrumbs } from "@/lib/breadcrumbs";
import { BLOG_IMAGES } from "@/lib/blog-images";
import { getAllBlogSlugs, getBlogArticleBySlug } from "@/lib/blog-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return { title: "Article introuvable" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex-1 bg-white">
      <BreadcrumbBar
        items={blogArticleBreadcrumbs(article.title)}
        tone="white"
      />
      <BlogArticleDetailSection
        article={article}
        imageSrc={BLOG_IMAGES[article.id]}
      />
    </main>
  );
}
