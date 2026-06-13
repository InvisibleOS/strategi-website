"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { INTELLIGENCE } from "@/lib/site";

export default function Intelligence() {
  return (
    <section
      id="intelligence"
      aria-label="The measurement layer: Strategi's public AI visibility instruments"
      className="bg-[#050505] pt-24 md:pt-40 pb-0 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row gap-12 justify-between items-start">
        <div className="md:w-1/3">
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a]">
            The Measurement Layer
          </p>
        </div>
        <div className="md:w-2/3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white mb-8"
          >
            Most agencies sell optimization.{" "}
            <span className="text-white/30">We publish the measurement.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-base md:text-lg text-white/40 font-light max-w-xl leading-relaxed"
          >
            The company that owns the measurement of AI visibility becomes more
            valuable than the company selling the service. So we built the
            instruments, open to everyone, that make the recommendation economy
            legible.
          </motion.p>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {INTELLIGENCE.map((p, idx) => {
            const inner = (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="relative bg-[#050505] p-8 md:p-10 min-h-[260px] h-full flex flex-col justify-between overflow-hidden hover:bg-[#0a0a0a] transition-colors duration-500"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-8">
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                      {p.kicker}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 border ${
                        p.status === "live"
                          ? "text-[#d4620a] border-[#d4620a]/40"
                          : "text-white/40 border-white/15"
                      }`}
                    >
                      {p.availability}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-4">
                    {p.name}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-8 text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover/card:text-[#d4620a] transition-colors flex items-center gap-2">
                  {p.status === "live" ? "Open" : "Request early access"}
                  <span aria-hidden="true">&rarr;</span>
                </div>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover/card:scale-x-100 transition-transform duration-500 ease-out" />
              </motion.div>
            );
            return p.external ? (
              <a key={p.id} href={p.href} className="block group/card">
                {inner}
              </a>
            ) : (
              <Link key={p.id} href={p.href} className="block group/card">
                {inner}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <p className="text-base md:text-lg text-white/40 font-light">
          See where you stand.{" "}
          <Link
            href="/who-owns-ai"
            className="text-[#d4620a] hover:text-white transition-colors font-medium"
          >
            Open the leaderboard
          </Link>{" "}
          or{" "}
          <Link
            href="/about"
            className="text-[#d4620a] hover:text-white transition-colors font-medium"
          >
            read the thesis
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
