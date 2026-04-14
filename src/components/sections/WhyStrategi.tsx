"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    id: "01",
    title: "Entity, not keywords.",
    desc: "Search engines match strings. AI systems understand entities. We build your business as a well-defined entity that AI can comprehend, categorize, and recommend.",
  },
  {
    id: "02",
    title: "Authority, not volume.",
    desc: "Publishing more content does not make AI recommend you. Building genuine authority in a specific domain does. We focus on the quality and structure of your information ecosystem, not the quantity.",
  },
  {
    id: "03",
    title: "Systems, not campaigns.",
    desc: "AI Presence is not a one-time project. It is a system that compounds. We build architectures that become more effective over time as AI models evolve and your authority deepens.",
  },
  {
    id: "04",
    title: "Representation, not traffic.",
    desc: "We do not measure success by how many people visited your website. We measure it by whether AI includes you in the answer. That is the metric that matters now.",
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
              The market is full of companies rebranding yesterday&apos;s tactics
              under today&apos;s buzzwords. Strategi was built from the ground up
              around a single reality: AI systems are becoming the primary
              discovery mechanism for businesses.
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
          <p className="text-xl md:text-2xl text-white/50 font-light italic leading-relaxed max-w-3xl">
            &ldquo;Visibility is no longer about being found. It is about being
            chosen.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
