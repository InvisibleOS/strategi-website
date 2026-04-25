"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <footer
      ref={ref}
      className="bg-[#050505] border-t border-white/10 pt-24 md:pt-40 px-6 md:px-12 overflow-hidden flex flex-col justify-between"
      aria-label="Site footer"
    >
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24 md:mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-6">
            Contact
          </div>
          <a
            href="mailto:hello@strategi.is"
            className="text-sm md:text-base text-white/50 hover:text-white transition-colors font-light"
          >
            hello@strategi.is
          </a>
          <div className="mt-8">
            <a
              href="mailto:hello@strategi.is?subject=AI%20Presence%20Diagnostic"
              className="inline-block text-[10px] font-mono uppercase tracking-widest text-white/80 border border-white/20 hover:border-white hover:bg-white hover:text-[#050505] px-4 py-2 transition-all"
            >
              Start Diagnostic &rarr;
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-6">
            Navigation
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: "What We Do", href: "/#what-we-do" },
              { label: "How It Works", href: "/#how-it-works" },
              { label: "Why Strategi", href: "/#why-strategi" },
              { label: "Who It's For", href: "/#who-its-for" },
              { label: "Blog", href: "/blogs" },
              { label: "FAQ", href: "/#faq" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm md:text-base text-white/50 hover:text-white transition-colors font-light w-fit group flex items-center gap-2"
              >
                <span className="w-0 h-px bg-[#d4620a] transition-all duration-300 group-hover:w-3" />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-6">
            Network
          </div>
          <div className="flex flex-col gap-3">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/strategigtm",
              },
              { label: "Twitter / X", href: "https://x.com/HelloStrategi" },
              {
                label: "Instagram",
                href: "https://www.instagram.com/strategi.is/",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-white/50 hover:text-white transition-colors font-light w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col col-span-2 md:col-span-1 mt-8 md:mt-0"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-6">
            About
          </div>
          <p className="text-sm text-white/40 leading-relaxed font-light">
            Strategi is a strategic advisory for the AI discovery era. We make
            the right businesses get recommended by artificial intelligence.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row justify-between items-end relative z-10 border-t border-white/10">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 1,
              ease: [0.25, 0.4, 0.25, 1],
              delay: 0.2,
            }}
            className="text-[22vw] md:text-[14vw] font-bold tracking-tighter leading-[0.8] pb-[0.05em] text-white select-none origin-bottom pr-4"
          >
            Strategi<span className="text-[#d4620a]">.</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col gap-1 text-[9px] md:text-[10px] font-mono text-white/20 uppercase tracking-widest text-left md:text-right mb-4 md:mb-6"
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-2">
            <a
              href="/sitemap"
              className="text-white/40 hover:text-white transition-colors"
            >
              Sitemap
            </a>
            <span className="text-white/20 cursor-default">Terms</span>
            <span className="text-white/20 cursor-default">Privacy</span>
          </div>
          <span>&copy; 2026 Strategi. All rights reserved.</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[#d4620a]/[0.02] blur-[120px] pointer-events-none z-0 rounded-full" />
    </footer>
  );
}
