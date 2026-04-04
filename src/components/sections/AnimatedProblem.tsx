"use client";

import { motion } from "framer-motion";

const TerminalTypewriter = ({
  text,
  startDelay,
}: {
  text: string;
  startDelay: number;
}) => {
  return (
    <span className="inline-block relative font-mono">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0, delay: startDelay + index * 0.02 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: [1, 0] }}
        viewport={{ once: true }}
        transition={{
          delay: startDelay,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block w-2 h-[1em] ml-1 bg-[#d4620a] align-middle -translate-y-[10%]"
      />
    </span>
  );
};

export default function AnimatedProblem() {
  return (
    <section
      id="problem"
      className="bg-[#050505] px-6 md:px-12 py-24 md:py-40 border-b border-white/10"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-8">
            The Problem
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
            Your customers have stopped searching.
            <br />
            <span className="text-white/30">They have started asking.</span>
          </h2>
          <div className="space-y-6 text-base md:text-lg text-white/50 font-light max-w-lg leading-relaxed">
            <p>
              They ask ChatGPT. They ask Gemini. They ask Perplexity. And these
              systems do not return ten blue links. They return one answer. Maybe
              two. Maybe three.
            </p>
            <p>
              If your business is not in that answer, you do not exist in the
              fastest-growing discovery channel on the planet. No amount of SEO
              will fix this. This is a different system with different rules.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative bg-[#0a0a0a] border border-white/20 p-0 shadow-2xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="flex items-center justify-between border-b border-white/20 px-6 py-4 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white/30" />
              <div className="w-2 h-2 bg-white/30" />
              <div className="w-2 h-2 bg-white/30" />
            </div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
              AI Perception Scan // 01
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8 min-h-[400px] flex flex-col justify-center">
            <div className="space-y-2">
              <span className="text-white/30 font-mono text-[10px] uppercase tracking-[0.2em] block">
                Input_Query
              </span>
              <p className="text-sm md:text-base font-mono text-white/80 leading-relaxed border-l border-white/20 pl-4">
                <TerminalTypewriter
                  text="> Recommend the best provider in our category for enterprise needs."
                  startDelay={0.5}
                />
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <span className="text-white/30 font-mono text-[10px] uppercase tracking-[0.2em] block mb-4">
                Generated_Output
              </span>

              <div className="space-y-3 font-mono text-xs md:text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.5 }}
                  className="text-[#d4620a]/70 mb-4"
                >
                  Synthesizing knowledge graph...
                </motion.div>

                {[
                  "Competitor A — Recommended for market leadership.",
                  "Competitor B — Recommended for service depth.",
                  "Competitor C — Recommended for trust signals.",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.5 + i * 0.6 }}
                    className="flex gap-4 text-white/60"
                  >
                    <span className="text-white/30">[{i + 1}]</span>
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 border-l-2 border-[#d4620a] bg-[#d4620a]/[0.05] p-4"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 6.0, duration: 0.3 }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#d4620a] font-mono mt-0.5 animate-pulse">
                    [!]
                  </span>
                  <p className="text-xs md:text-sm text-[#d4620a] font-mono uppercase tracking-wide leading-relaxed">
                    Your business was not included in the AI response. You are
                    invisible to this discovery channel.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
