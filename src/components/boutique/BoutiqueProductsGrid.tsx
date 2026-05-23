import { ShopProductCard } from "@/components/showcase/shop/ShopProductCard";
import type { BoutiqueProduct } from "@/lib/boutique-data";
import { productToCartLine } from "@/lib/cart";
import type { ShopImagesMap } from "@/components/showcase/shop/ShopProductGrid";

type BoutiqueProductsGridProps = {
  products: BoutiqueProduct[];
  images?: ShopImagesMap;
};

export function BoutiqueProductsGrid({
  products,
  images = {},
}: BoutiqueProductsGridProps) {
  if (products.length === 0) {
    return (
      <p className="text-[14px] text-[var(--kba-muted)]">
        Aucun produit dans cette catégorie pour le moment.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <ShopProductCard
          key={product.id}
          title={product.title}
          subtitle={product.subtitle}
          price={product.price}
          href={product.href}
          imageFile={product.imageFile}
          imageSrc={images[product.id]}
          cartItem={productToCartLine(product)}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
