import Link from "next/link";
import { ScrollCardStack, type ScrollCardItem } from "@/components/ui/scroll-card";

const phases: ScrollCardItem[] = [
  {
    index: "01",
    eyebrow: "Audit AI Visibility",
    title: "Diagnose.",
    description:
      "We query every major AI platform with your customers' questions and document where you stand against your category.",
  },
  {
    index: "02",
    eyebrow: "Clarify Positioning",
    title: "Define.",
    description:
      "We define how machines should understand your business: entity, category, differentiators, and a positioning statement.",
  },
  {
    index: "03",
    eyebrow: "Machine-Readable",
    title: "Structure.",
    description:
      "We rebuild your site and content for AI comprehension, with the architecture, schema, and semantics AI can parse and trust.",
  },
  {
    index: "04",
    eyebrow: "Content & Signals",
    title: "Build.",
    description:
      "We produce the structured, citable content and external trust signals AI pulls its answers from.",
  },
  {
    index: "05",
    eyebrow: "Authority Loops",
    title: "Reinforce.",
    description:
      "We turn each AI citation into a signal for the next, expanding the queries where you get recommended.",
  },
  {
    index: "06",
    eyebrow: "AI Presence Tracking",
    title: "Monitor.",
    description:
      "We track your recommendation status across platforms as competitors shift and models update.",
  },
];

export default function Methodology() {
  return (
    <section
      id="how-it-works"
      aria-label="The Strategi Methodology: six phases to AI Presence"
      className="bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 md:pt-40">
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-6">
          The Strategi Methodology
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-[6vw] font-bold tracking-tighter leading-[0.9] text-white max-w-5xl">
          Six phases.
          <br />
          <span className="text-[#d4620a]">Engineered presence.</span>
        </h2>
        <p className="mt-8 text-base md:text-lg text-white/40 font-light max-w-xl leading-relaxed">
          Scroll to watch your AI Presence build, phase by phase. 👇
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <ScrollCardStack
          cards={phases}
          side={
            <h3 className="max-w-xs text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] text-white">
              Engineered,
              <br />
              <span className="text-white/30">phase by phase.</span>
            </h3>
          }
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <blockquote className="text-lg md:text-xl text-white/30 font-light italic max-w-3xl">
          <p>
            &ldquo;Diagnose. Define. Structure. Build. Reinforce. Monitor. This
            is how AI Presence is engineered.&rdquo;
          </p>
        </blockquote>
        <Link
          href="/#contact"
          className="mt-10 inline-flex items-center gap-2 bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors"
        >
          Book a call &rarr;
        </Link>
      </div>
    </section>
  );
}
