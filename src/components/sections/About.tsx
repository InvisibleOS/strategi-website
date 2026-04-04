"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="what-we-do"
      className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-8">
            What We Do
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-white">
            We build AI Presence.
            <br />
            <span className="text-white/30 font-light italic">
              Not traffic. Not rankings. Presence.
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
              We audit how AI currently perceives your business. We identify the
              gaps between what you are and what AI thinks you are. We
              restructure your digital foundation so machines can comprehend your
              value, your authority, and your relevance.
            </p>
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
              Then we build the signals, content, and architecture that make AI
              consistently select you over competitors.
            </p>
          </div>
          <div className="mt-12 border-t border-white/10 pt-12">
            <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              The result is not traffic. The result is being the answer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
