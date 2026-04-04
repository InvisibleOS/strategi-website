"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#d4620a] border-t border-white/10 py-24 md:py-40 px-6 md:px-12 overflow-hidden relative"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-16 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#050505]/60 mb-8">
              [ Start Here ]
            </div>
            <h2 className="text-6xl sm:text-7xl md:text-[8vw] font-bold tracking-tighter leading-[0.85] text-[#050505]">
              Start with
              <br />a diagnostic.
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-start md:items-end gap-10 shrink-0 w-full md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="text-[#050505]/80 text-base md:text-lg max-w-sm font-medium md:text-right leading-relaxed">
            We begin every engagement by understanding where your business
            stands with AI. No pitch. No proposal. Just a clear-eyed assessment
            of your current AI Presence.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full sm:w-auto">
            <a
              href="mailto:hello@strategi.is?subject=AI%20Presence%20Diagnostic"
              className="bg-[#050505] text-white px-8 py-5 text-sm font-bold uppercase tracking-widest text-center hover:bg-white hover:text-[#050505] transition-colors duration-300 flex items-center justify-center gap-3 group"
            >
              Request Diagnostic
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>

            <a
              href="mailto:hello@strategi.is"
              className="px-8 py-5 border border-[#050505] text-[#050505] text-sm font-bold uppercase tracking-widest text-center hover:bg-[#050505] hover:text-white transition-colors duration-300 flex items-center justify-center"
            >
              hello@strategi.is
            </a>
          </div>

          <p className="text-[#050505]/50 text-sm font-light italic md:text-right max-w-sm">
            &ldquo;The best time to build AI Presence was a year ago. The second
            best time is now.&rdquo;
          </p>
        </motion.div>
      </div>

      <div
        className="absolute right-0 bottom-0 text-[30vw] font-black text-[#050505]/[0.03] leading-none pointer-events-none select-none translate-y-1/4 translate-x-1/4"
        aria-hidden="true"
      >
        AI
      </div>
    </section>
  );
}
