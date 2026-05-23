"use client";

type CartQuantityControlProps = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function CartQuantityControl({
  quantity,
  onDecrease,
  onIncrease,
}: CartQuantityControlProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--kba-charcoal)]/20 text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)]"
        aria-label="Diminuer la quantité"
      >
        −
      </button>
      <span className="min-w-[1.25rem] text-center text-[14px] font-medium text-[var(--kba-charcoal)]">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--kba-charcoal)]/20 text-[var(--kba-charcoal)] transition-colors hover:border-[var(--kba-primary)] hover:text-[var(--kba-primary)]"
        aria-label="Augmenter la quantité"
      >
        +
      </button>
    </div>
  );
}
