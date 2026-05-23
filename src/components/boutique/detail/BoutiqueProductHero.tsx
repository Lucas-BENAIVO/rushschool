import Image from "next/image";
import type { BoutiqueProduct } from "@/lib/boutique-data";
import type { ImageSource } from "@/types/images";

type BoutiqueProductHeroProps = {
  product: BoutiqueProduct;
  imageSrc?: ImageSource;
};

export function BoutiqueProductHero({
  product,
  imageSrc,
}: BoutiqueProductHeroProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
      <div
        className={`relative aspect-square overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-square ${
          imageSrc
            ? "bg-white"
            : "bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2]"
        }`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={product.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[12px] text-[var(--kba-muted)]">
            {product.imageFile}
          </div>
        )}
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kba-primary)]">
          {product.subtitle}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--kba-charcoal)] sm:text-4xl">
          {product.title}
        </h1>
        <p className="mt-4 font-serif text-3xl font-semibold text-[var(--kba-charcoal)]">
          {product.price}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--kba-muted)] sm:text-base">
          {product.description}
        </p>
      </div>
    </div>
  );
}
