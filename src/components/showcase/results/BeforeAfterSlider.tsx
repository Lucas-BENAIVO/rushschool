"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageSource } from "@/types/images";

type BeforeAfterSliderProps = {
  beforeSrc?: ImageSource;
  afterSrc?: ImageSource;
  beforeImageFile: string;
  afterImageFile: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeImageFile,
  afterImageFile,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-[#f3e4e2] to-[#e8d4d2] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[16/10] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:min-h-[220px]">
        {/* Après (fond) */}
        <div className="absolute inset-0">
          {afterSrc ? (
            <Image
              src={afterSrc}
              alt="Après formation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-[11px] text-[var(--kba-muted)]">
              {afterImageFile}
            </div>
          )}
        </div>

        {/* Avant (clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          {beforeSrc ? (
            <Image
              src={beforeSrc}
              alt="Avant formation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-[200%] max-w-none items-center justify-center bg-[#e8ddd9] text-[11px] text-[var(--kba-muted)]">
              {beforeImageFile}
            </div>
          )}
        </div>

        {/* Poignée */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-md"
          style={{ left: `${position}%` }}
          aria-hidden
        >
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--kba-primary)] text-white shadow-md">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />
            </svg>
          </div>
        </div>

        <span className="absolute left-3 top-3 z-20 rounded bg-black/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          Avant
        </span>
        <span className="absolute right-3 top-3 z-20 rounded bg-black/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          Après
        </span>
      </div>

      <label className="sr-only" htmlFor="before-after-range">
        Comparer avant et après
      </label>
      <input
        id="before-after-range"
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={position}
      />
    </div>
  );
}
