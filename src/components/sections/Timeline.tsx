"use client";

import { motion } from "framer-motion";

const phases = [
  {
    id: "01",
    title: "Diagnose.",
    subtitle: "Audit AI Visibility",
    desc: "We query every major AI platform with the questions your customers ask. We document what AI says about you, your competitors, and your category. The output is a comprehensive AI Visibility Report.",
  },
  {
    id: "02",
    title: "Define.",
    subtitle: "Clarify Positioning",
    desc: "We define how your business should be understood by machines. Entity definition, category mapping, differentiator articulation, and a Machine Positioning Statement that drives all subsequent work.",
  },
  {
    id: "03",
    title: "Structure.",
    subtitle: "Machine-Readable",
    desc: "We restructure your digital presence for AI comprehension. Website architecture, schema implementation, content hierarchy, and semantic structuring that AI can trust, parse, and cite.",
  },
  {
    id: "04",
    title: "Build.",
    subtitle: "Content & Signals",
    desc: "We produce strategically structured material designed to be cited by AI. Comprehensive category content, authoritative thought leadership, and structured data assets. Simultaneously building external trust signals.",
  },
  {
    id: "05",
    title: "Reinforce.",
    subtitle: "Authority Loops",
    desc: "We engineer self-reinforcing authority loops. When AI cites you, that citation becomes a signal for future citations. We expand the scope of queries where your business is recommended.",
  },
  {
    id: "06",
    title: "Monitor.",
    subtitle: "AI Presence Tracking",
    desc: "We continuously track your AI recommendation status. Which queries trigger recommendations, which competitors gain or lose AI share, and which model updates affect your positioning.",
  },
];

export default function Timeline() {
  return (
    <section
      id="how-it-works"
      aria-label="The Strategi Methodology: six phases to AI Presence"
      className="bg-[#050505] pt-24 md:pt-40 pb-20 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-6">
          The Strategi Methodology
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-[6vw] font-bold tracking-tighter leading-[0.9] text-white max-w-5xl">
          Six phases.
          <br />
          <span className="text-[#d4620a]">Engineered presence.</span>
        </h2>
      </div>

      <div className="border-y border-white/10 bg-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
          {phases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-[#050505] p-8 md:p-12 min-h-[350px] flex flex-col justify-between overflow-hidden hover:bg-[#0a0a0a] transition-colors duration-500"
            >
              <div
                className="absolute -right-6 -top-10 text-[180px] font-bold text-white/[0.02] leading-none pointer-events-none select-none group-hover:text-[#d4620a]/[0.03] transition-colors duration-700"
                aria-hidden="true"
              >
                {item.id}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#d4620a] transition-colors duration-500" />
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                    Phase_{item.id} &mdash; {item.subtitle}
                  </span>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-white/40 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16">
        <blockquote className="text-lg md:text-xl text-white/30 font-light italic max-w-3xl">
          <p>&ldquo;Diagnose. Define. Structure. Build. Reinforce. Monitor. This is
          how AI Presence is engineered.&rdquo;</p>
        </blockquote>
        <a
          href="#contact"
          className="inline-block mt-8 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
        >
          [ Start with Phase 01 &rarr; ]
        </a>
      </div>
    </section>
  );
}
