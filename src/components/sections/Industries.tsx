"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";
import { LinkCard } from "@/components/geo/Editorial";

export default function Industries() {
  return (
    <section
      id="by-industry"
      aria-label="AI visibility by industry"
      className="bg-[#050505] py-24 md:py-40 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-8 md:gap-12 justify-between md:items-end">
          <div className="md:w-1/3">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a]">
              By Industry
            </p>
          </div>
          <div className="md:w-2/3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white"
            >
              Who owns AI in{" "}
              <span className="text-white/30">your industry?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-8 text-base md:text-lg text-white/40 font-light max-w-xl leading-relaxed"
            >
              Every category has a business AI names first — and the rest it rarely
              mentions. See the board and the playbook for yours.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {INDUSTRIES.map((ind) => (
            <LinkCard
              key={ind.slug}
              href={`/who-owns-ai/${ind.slug}`}
              title={ind.name}
              blurb={ind.prompt}
            />
          ))}
        </div>

        <p className="mt-12 text-base md:text-lg text-white/40 font-light">
          <Link
            href="/who-owns-ai"
            className="text-[#d4620a] hover:text-white transition-colors font-medium"
          >
            The full Who Owns AI? index &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}
