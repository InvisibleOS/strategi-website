// Shared, server-rendered leaderboard board for an industry.
// Fictional brands, modeled shares — the page-level disclaimer makes that clear.

import type { Industry, IndustryLeader } from "@/lib/industries";

function RankRow({
  rank,
  leader,
  top,
}: {
  rank: number;
  leader: IndustryLeader;
  top: number;
}) {
  const isLeader = rank === 1;
  return (
    <li className="group relative grid grid-cols-12 gap-3 sm:gap-4 items-center py-4 sm:py-5 border-b border-white/10">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"
      />
      <div className="col-span-2 sm:col-span-1">
        <span
          className={`font-mono tabular-nums text-2xl sm:text-3xl tracking-tighter ${
            isLeader ? "text-[#d4620a]" : "text-white/35"
          }`}
        >
          {String(rank).padStart(2, "0")}
        </span>
      </div>
      <div className="col-span-10 sm:col-span-5 self-center">
        <p
          className={`text-lg sm:text-xl font-semibold tracking-tight leading-snug ${
            isLeader ? "text-white" : "text-white/85"
          }`}
        >
          {leader.brand}
        </p>
      </div>
      <div className="col-span-8 sm:col-span-4">
        <div
          className="h-2.5 bg-white/[0.06] overflow-hidden"
          role="img"
          aria-label={`Illustrative AI Recommendation Share: ${leader.share} percent`}
        >
          <div
            className={`h-full ${
              isLeader
                ? "bg-[#d4620a]"
                : "bg-white/30 group-hover:bg-[#d4620a]/60 transition-colors duration-500"
            }`}
            style={{ width: `${(leader.share / top) * 100}%` }}
          />
        </div>
      </div>
      <div className="col-span-4 sm:col-span-2 text-right">
        <span
          className={`font-mono tabular-nums text-lg sm:text-2xl font-bold tracking-tight ${
            isLeader ? "text-[#d4620a]" : "text-white/75"
          }`}
        >
          {leader.share}
          <span className="text-white/30 text-xs sm:text-sm font-light">%</span>
        </span>
      </div>
    </li>
  );
}

export function IndustryBoard({ industry }: { industry: Industry }) {
  const top = industry.leaders[0].share;
  return (
    <div aria-labelledby={`${industry.slug}-board-h`}>
      <header className="grid grid-cols-12 gap-3 sm:gap-4 mb-6 items-end border-b-2 border-white/20 pb-4">
        <div className="col-span-12 sm:col-span-8">
          <h3
            id={`${industry.slug}-board-h`}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight"
          >
            {industry.name}
          </h3>
          <p className="mt-1 text-sm text-white/50 font-light italic">
            {industry.prompt}
          </p>
        </div>
        <div className="hidden sm:block sm:col-span-4 text-right">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
            AI Recommendation Share
          </span>
        </div>
      </header>
      <ol className="border-t border-white/10">
        {industry.leaders.map((leader, i) => (
          <RankRow key={leader.brand} rank={i + 1} leader={leader} top={top} />
        ))}
      </ol>
    </div>
  );
}
