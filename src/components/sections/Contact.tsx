"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  useEffect(() => {
    // Load Cal.com embed script
    if (document.querySelector('script[data-cal-embed]')) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute("data-cal-embed", "true");
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "30min", { origin: "https://cal.com" });

      Cal.ns["30min"]("inline", {
        elementOrSelector: "#cal-inline-embed",
        calLink: "strategi-.is-inxb4u/30min",
        layout: "month_view",
        config: {
          theme: "dark"
        }
      });

      Cal.ns["30min"]("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#d4620a" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    `;
    document.head.appendChild(script);
  }, []);

  return (
    <section
      id="contact"
      className="bg-[#d4620a] border-t border-white/10 pt-16 sm:pt-24 md:pt-40 pb-0 px-4 sm:px-6 md:px-12 overflow-hidden relative"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10 sm:gap-16 relative z-10 mb-10 sm:mb-16 md:mb-24">
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
            <h2 className="text-5xl sm:text-7xl md:text-[8vw] font-bold tracking-tighter leading-[0.85] text-[#050505]">
              Start with
              <br />a diagnostic.
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-start md:items-end gap-6 shrink-0 w-full md:w-auto"
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

          <a
            href="mailto:hello@strategi.is"
            className="px-8 py-5 border border-[#050505] text-[#050505] text-sm font-bold uppercase tracking-widest text-center hover:bg-[#050505] hover:text-white transition-colors duration-300 flex items-center justify-center"
          >
            hello@strategi.is
          </a>

          <p className="text-[#050505]/50 text-sm font-light italic md:text-right max-w-sm">
            &ldquo;The best time to build AI Presence was a year ago. The second
            best time is now.&rdquo;
          </p>
        </motion.div>
      </div>

      {/* Cal.com Inline Embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="max-w-[1400px] mx-auto relative z-10"
      >
        <div className="bg-[#050505] border border-[#050505]/20 p-0 sm:p-1">
          <div className="border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 py-3 sm:py-4 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#d4620a]" />
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                  Schedule Your Diagnostic
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest hidden sm:block">
                30 min
              </span>
            </div>

            <div
              id="cal-inline-embed"
              className="w-full h-[580px] sm:h-[650px] md:h-[700px] overflow-auto"
            />
          </div>
        </div>
      </motion.div>

      <div
        className="absolute right-0 bottom-0 text-[30vw] font-black text-[#050505]/[0.03] leading-none pointer-events-none select-none translate-y-1/4 translate-x-1/4"
        aria-hidden="true"
      >
        AI
      </div>
    </section>
  );
}
