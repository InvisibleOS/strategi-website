"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    id: "01",
    title: "Entity, not keywords.",
    desc: "Search matches keywords. AI understands entities, so we build your business as one it can recognize and recommend.",
  },
  {
    id: "02",
    title: "Authority, not volume.",
    desc: "More content does not move AI. Genuine authority in your domain does, so we build for quality, not quantity.",
  },
  {
    id: "03",
    title: "Systems, not campaigns.",
    desc: "AI Presence is not a campaign. It is a system that compounds as models evolve and your authority deepens.",
  },
  {
    id: "04",
    title: "Representation, not traffic.",
    desc: "We do not count visits. We measure whether AI puts you in the answer, the metric that matters now.",
  },
];

export default function WhyStrategi() {
  return (
    <section id="why-strategi" aria-label="Why Strategi: how we think differently about AI discovery" className="bg-[#050505] py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-12 justify-between items-start">
          <div className="md:w-1/3">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a]">
              How We Think Differently
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
              This is not SEO{" "}
              <span className="text-white/30">with a new name.</span>
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
              The market is full of agencies rebranding old SEO tactics with
              new buzzwords. We were built natively for how AI discovers and
              recommends businesses instead.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-white/10 bg-white/10">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#050505] p-8 md:p-12 hover:bg-[#0a0a0a] transition-colors duration-500 relative"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#d4620a] transition-colors duration-500" />
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                  {item.id}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-6">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-white/40 leading-relaxed font-light">
                {item.desc}
              </p>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 border-l-2 border-[#d4620a] pl-8">
          <blockquote className="text-xl md:text-2xl text-white/50 font-light italic leading-relaxed max-w-3xl">
            <p>&ldquo;Visibility is no longer about being found. It is about being
            chosen.&rdquo;</p>
          </blockquote>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors"
          >
            Book a call &rarr;
          </a>
          <a
            href="/services"
            className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
          >
            [ See the methodology ]
          </a>
        </div>
      </div>
    </section>
  );
}
