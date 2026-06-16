import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

// Faithful CSS sticky stacking-cards effect (same mechanic as the ui-layout
// reference): each card lives in a `sticky top-0 h-screen` figure, so as you
// scroll, every card pins to the centre of the viewport and the next one stacks
// over it, slightly rotated, like a dealt deck. An optional `side` node is a
// second sticky column that stays put while the cards swap.
//
// Pure CSS (no JS) so it ships in the HTML. The smooth feel comes from the
// app-root Lenis in layout.tsx. Requires `overflow-x: clip` (not hidden) on
// html/body, otherwise sticky has no scrollport to stick to.

export interface ScrollCardItem {
  index?: string;
  eyebrow?: string;
  title: string;
  description: string;
  /** Optional Tailwind rotate class; falls back to an alternating tilt. */
  rotation?: string;
}

interface ScrollCardStackProps {
  cards: ScrollCardItem[];
  /** Sticky companion column (e.g. a heading) shown beside the cards on lg+. */
  side?: ReactNode;
  className?: string;
}

const ROTATIONS = [
  "rotate-2",
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-3",
  "-rotate-3",
];

export function ScrollCardStack({ cards, side, className }: ScrollCardStackProps) {
  return (
    <div className={cn("flex items-start justify-between gap-8", className)}>
      <div className="grid gap-2">
        {cards.map((card, i) => (
          <figure
            key={i}
            className="sticky top-0 grid h-screen place-content-center"
          >
            <article
              className={cn(
                "relative grid h-80 w-[clamp(19rem,42vw,34rem)] content-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.85)] md:p-10",
                card.rotation ?? ROTATIONS[i % ROTATIONS.length]
              )}
            >
              <div className="absolute left-0 top-0 h-[3px] w-full bg-[#d4620a]" />
              {card.index && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-8 select-none text-[120px] font-bold leading-none tracking-tighter text-white/[0.04]"
                >
                  {card.index}
                </span>
              )}
              <div className="relative z-10">
                {card.eyebrow && (
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4620a]">
                    {card.index ? `${card.index} / ` : ""}
                    {card.eyebrow}
                  </p>
                )}
                <h3 className="mb-3 text-3xl font-bold tracking-tighter text-white md:text-4xl">
                  {card.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/50 md:text-base">
                  {card.description}
                </p>
              </div>
            </article>
          </figure>
        ))}
      </div>

      {side && (
        <div className="sticky top-0 hidden h-screen place-content-center lg:grid">
          {side}
        </div>
      )}
    </div>
  );
}
