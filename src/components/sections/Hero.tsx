"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col"
      aria-label="Strategi: AI Presence advisory for established businesses"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4620a]/[0.02] blur-[120px] pointer-events-none z-0" />

      <div className="flex-1 flex flex-col justify-between w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-28 pb-8 md:pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/30">
            AI Presence Advisory
          </p>
        </motion.div>

        <div className="my-auto py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-[0.85] text-white"
          >
            Your customers have
            <br />
            stopped searching.
            <br />
            <span className="text-[#d4620a]">They have started asking AI.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="border-t border-white/10 pt-6 md:pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-4">
            <p className="text-sm md:text-base text-white/40 leading-relaxed max-w-md font-light">
              Strategi builds your AI Presence. Through Generative Engine
              Optimization (GEO), we make established businesses the answer when
              ChatGPT, Gemini, and Perplexity recommend a company in your
              category.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto">
              <Link
                href="/who-owns-ai"
                className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors shrink-0"
              >
                [ Who owns AI? ]
              </Link>
              <a
                href="#contact"
                className="bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors w-full sm:w-auto text-center shrink-0"
              >
                Book a call &rarr;
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
