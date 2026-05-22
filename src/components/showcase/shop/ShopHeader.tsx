import { ShowcaseEyebrow } from "@/components/showcase/ShowcaseEyebrow";
import { ShowcaseTitle } from "@/components/showcase/ShowcaseTitle";
import { SHOP_CONTENT } from "@/lib/showcase-data";

export function ShopHeader() {
  const { eyebrow, title } = SHOP_CONTENT;

  return (
    <div className="flex flex-col gap-2">
      <ShowcaseEyebrow>{eyebrow}</ShowcaseEyebrow>
      <ShowcaseTitle>{title}</ShowcaseTitle>
    </div>
  );
}
