import { HeroAvatars } from "@/components/hero/HeroAvatars";

type ResultsSocialProofProps = {
  text: string;
};

export function ResultsSocialProof({ text }: ResultsSocialProofProps) {
  return (
    <div className="flex items-center gap-3">
      <HeroAvatars />
      <p className="text-[12px] font-medium text-[var(--kba-muted)]">{text}</p>
    </div>
  );
}
