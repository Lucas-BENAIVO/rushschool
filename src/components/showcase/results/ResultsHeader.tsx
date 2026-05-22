import { ShowcaseEyebrow } from "@/components/showcase/ShowcaseEyebrow";
import { ShowcaseTitle } from "@/components/showcase/ShowcaseTitle";
import { RESULTS_CONTENT } from "@/lib/showcase-data";

export function ResultsHeader() {
  const { eyebrow, title } = RESULTS_CONTENT;

  return (
    <div className="flex flex-col gap-2">
      <ShowcaseEyebrow>{eyebrow}</ShowcaseEyebrow>
      <ShowcaseTitle>{title}</ShowcaseTitle>
    </div>
  );
}
