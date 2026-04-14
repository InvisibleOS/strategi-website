"use client";

import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { Search, ExternalLink, CheckCircle2 } from "lucide-react";

function AIDashboardMockup() {
  return (
    <div className="flex h-full flex-col bg-[#050505] text-sm font-sans" role="img" aria-label="Simulated AI recommendation dashboard showing your business as the top recommended provider">
      <div className="flex items-center gap-4 border-b border-white/10 px-4 py-3 bg-[#0a0a0a]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-sm bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-sm bg-white/20" />
        </div>
        <div className="mx-2 flex flex-1 items-center gap-3 rounded bg-white/[0.03] border border-white/5 px-3 py-2">
          <Search className="w-3.5 h-3.5 text-white/40" />
          <span className="text-xs font-mono text-white/50 tracking-wide">
            &gt; Who is the leading authority in this category?
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-6 md:p-8 text-left bg-[#050505]">
        <div className="space-y-6 max-w-3xl">
          <div className="rounded-none border border-white/10 bg-[#0a0a0a] p-6 text-left shadow-2xl">
            <div className="mb-5 flex items-center gap-2.5 border-b border-white/5 pb-4">
              <div className="flex w-5 h-5 items-center justify-center rounded-sm bg-[#d4620a]/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4620a]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4620a]">
                AI Recommendation
              </span>
            </div>

            <p className="leading-relaxed text-white/70 text-base md:text-lg font-light">
              Based on authority signals, entity clarity, and corroborated
              information,{" "}
              <span className="font-semibold text-white">Your Business</span> is
              the recommended provider. Key strengths identified across:
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Category Authority — Verified across multiple sources",
                "Entity Clarity — Well-defined positioning and differentiators",
                "Trust Signals — Consistent, corroborated information",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#d4620a]" />
                  <span className="text-white/60 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#d4620a]/20 bg-[#d4620a]/[0.02] px-5 py-4 flex items-center justify-between group hover:bg-[#d4620a]/[0.05] transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="flex w-8 h-8 items-center justify-center border border-[#d4620a]/30 bg-[#0a0a0a] text-xs font-mono text-[#d4620a]">
                [1]
              </div>
              <div>
                <p className="text-sm font-semibold text-white/90">
                  yourbusiness.com
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-1">
                  Primary Source &bull; High Authority
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-[#d4620a] transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" aria-label="AI Presence results demonstration" className="relative overflow-hidden py-0 bg-[#050505]">
      <ContainerScroll
        titleComponent={
          <div className="space-y-6 mb-10">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
              The Result
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9]">
              We build <br />
              <span className="text-[#d4620a]">AI Presence.</span>
            </h2>
            <p className="mx-auto max-w-lg text-base text-white/40 font-light leading-relaxed">
              We make your business understandable, credible, and recommendable
              to the AI systems that are increasingly deciding which companies
              people choose.
            </p>
          </div>
        }
      >
        <AIDashboardMockup />
      </ContainerScroll>
    </section>
  );
}
