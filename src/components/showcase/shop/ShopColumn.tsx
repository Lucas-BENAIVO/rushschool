import Link from "next/link";
import { ShopProductCard } from "@/components/showcase/shop/ShopProductCard";
import { ShowcaseEyebrow } from "@/components/showcase/ShowcaseEyebrow";
import { ShowcaseTitle } from "@/components/showcase/ShowcaseTitle";
import { SHOP_CONTENT, SHOP_PRODUCTS } from "@/lib/showcase-data";
import type { ImageSource } from "@/types/images";

export type ShopImagesMap = Partial<Record<string, ImageSource>>;

type ShopColumnProps = {
  images?: ShopImagesMap;
};

export function ShopColumn({ images = {} }: ShopColumnProps) {
  const { eyebrow, title, ctaLabel, ctaHref } = SHOP_CONTENT;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <ShowcaseEyebrow>{eyebrow}</ShowcaseEyebrow>
        <ShowcaseTitle>{title}</ShowcaseTitle>
      </div>

      <div className="-mx-1 flex items-stretch gap-2.5 overflow-x-auto pb-1 scrollbar-none sm:mx-0 sm:grid sm:grid-cols-3 sm:items-stretch sm:gap-3 sm:overflow-visible sm:pb-0">
        {SHOP_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="flex h-full w-[min(140px,42vw)] shrink-0 sm:w-auto"
          >
          <ShopProductCard
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            href={product.href}
            imageFile={product.imageFile}
            imageSrc={images[product.id]}
            cartItem={{
              productId: product.id,
              slug: product.slug,
              title: product.title,
              subtitle: product.subtitle,
              price: product.price,
            }}
          />
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-1">
        <Link
          href={ctaHref}
          className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--kba-charcoal)]/20 bg-white px-5 text-[12px] font-semibold text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)] sm:text-[13px]"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
