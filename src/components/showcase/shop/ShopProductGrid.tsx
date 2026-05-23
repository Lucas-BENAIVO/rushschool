import { ShopProductCard } from "@/components/showcase/shop/ShopProductCard";
import { SHOP_PRODUCTS } from "@/lib/showcase-data";
import type { ImageSource } from "@/types/images";

export type ShopImagesMap = Partial<Record<string, ImageSource>>;

type ShopProductGridProps = {
  images?: ShopImagesMap;
};

export function ShopProductGrid({ images = {} }: ShopProductGridProps) {
  return (
    <div className="-mx-1 flex w-full items-stretch gap-2.5 overflow-x-auto pb-1 scrollbar-none sm:mx-0 lg:grid lg:grid-cols-3 lg:gap-3 lg:overflow-visible lg:pb-0">
      {SHOP_PRODUCTS.map((product, index) => (
        <div
          key={product.id}
          className="flex h-full w-[min(140px,38vw)] shrink-0 sm:w-[min(160px,32vw)] lg:w-auto"
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
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
