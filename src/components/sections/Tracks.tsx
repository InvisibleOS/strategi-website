"use client";

import { motion } from "framer-motion";

const targets = [
  {
    id: "01",
    title: "Legacy Manufacturers",
    desc: "Forty-year-old businesses with deep industry credibility, completely absent from AI recommendations. We take them from invisibility to consistent citation across major AI platforms.",
  },
  {
    id: "02",
    title: "Regional Market Leaders",
    desc: "Respected businesses with strong local reputation but zero AI presence. We restructure their digital foundation to function as a machine-readable authority in their geographic market.",
  },
  {
    id: "03",
    title: "Specialty Providers",
    desc: "Niche experts being overlooked by AI in favor of larger, less specialized competitors. We rebuild their content architecture and authority layer to become the specialist recommendation.",
  },
  {
    id: "04",
    title: "Multi-Property Groups",
    desc: "Organizations where each property is treated as a disconnected entity by AI. We unify entity architecture and build property-level authority for consistent AI-generated recommendations.",
  },
];

export default function Tracks() {
  return (
    <section id="who-its-for" aria-label="Who we work with: established businesses that deserve to be recommended" className="bg-[#050505] pt-24 md:pt-40 pb-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row gap-12 justify-between items-start">
        <div className="md:w-1/3">
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a]">
            Who We Work With
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
            Built for businesses{" "}
            <span className="text-white/30">
              that deserve to be recommended.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="text-base md:text-lg text-white/40 font-light max-w-xl leading-relaxed"
          >
            We work with established businesses. Companies with substance,
            legacy, and genuine credibility in their category. We are not for
            startups looking for a growth hack. We are for businesses that have
            built something real.
          </motion.p>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
          {targets.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-[#050505] p-8 md:p-10 min-h-[320px] flex flex-col justify-between overflow-hidden hover:bg-[#0a0a0a] transition-colors duration-500"
            >
              <div
                className="absolute -right-4 -top-8 text-[140px] font-bold text-white/[0.02] leading-none pointer-events-none select-none group-hover:text-[#d4620a]/[0.03] transition-colors duration-700"
                aria-hidden="true"
              >
                {item.id}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#d4620a] transition-colors duration-500" />
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                    Profile_{item.id}
                  </span>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
