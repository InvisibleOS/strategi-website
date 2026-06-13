"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// First-load intro splash. Reuses the footer's "Strategi." wordmark
// (text-[22vw] md:text-[14vw], font-bold tracking-tighter, white with an
// accent dot) and gives it two deliberately different reveals:
//   • mobile  — the footer's slide-up block reveal, snappy.
//   • desktop — letter-by-letter blur-rise with a springing accent dot,
//               then the whole panel lifts away like a curtain.
// Plays once per browser session (sessionStorage) and locks scroll while live.

const WORD = "Strategi";
const SESSION_KEY = "strategi-intro-played";

export default function Intro() {
  const [show, setShow] = useState(true);
  // null = breakpoint not measured yet (keeps the panel solid, no flash).
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    let raf = 0;
    let timer = 0;
    // Defer measurement a frame so the panel paints solid first (no flash),
    // and so state is never set synchronously inside the effect.
    raf = requestAnimationFrame(() => {
      // Already seen this session, or the visitor prefers reduced motion:
      // skip the show and let the page render immediately.
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (sessionStorage.getItem(SESSION_KEY) || reduced) {
        setShow(false);
        return;
      }

      const mobile = window.matchMedia("(max-width: 767px)").matches;
      setIsMobile(mobile);

      document.body.style.overflow = "hidden";
      const hold = mobile ? 1300 : 2050;
      timer = window.setTimeout(() => setShow(false), hold);
    });

    return () => {
      cancelAnimationFrame(raf);
      if (timer) window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleDone = () => {
    document.body.style.overflow = "";
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* sessionStorage may be unavailable; the intro simply replays */
    }
  };

  const exit =
    isMobile === false
      ? { y: "-100%" as const }
      : { opacity: 0 };

  return (
    <AnimatePresence onExitComplete={handleDone}>
      {show && (
        <motion.div
          key="intro"
          aria-hidden="true"
          initial={false}
          exit={exit}
          transition={{
            duration: isMobile === false ? 0.9 : 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505]"
        >
          {/* atmospheric accent glow, mirrors the footer */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[#d4620a]/[0.04] blur-[120px] pointer-events-none rounded-full"
          />

          {/* Mobile: footer-style slide-up block reveal */}
          {isMobile === true && (
            <div className="relative overflow-hidden px-6">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[22vw] font-bold tracking-tighter leading-[0.8] pb-[0.08em] text-white select-none origin-bottom"
              >
                {WORD}
                <span className="text-[#d4620a]">.</span>
              </motion.div>
            </div>
          )}

          {/* Desktop: letter-by-letter blur-rise + springing accent dot */}
          {isMobile === false && (
            <h1 className="relative flex text-[14vw] font-bold tracking-tighter leading-[0.8] pb-[0.08em] text-white select-none">
              {WORD.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 90, opacity: 0, filter: "blur(14px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                className="inline-block text-[#d4620a]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.1 + WORD.length * 0.07 + 0.05,
                  type: "spring",
                  stiffness: 320,
                  damping: 12,
                }}
              >
                .
              </motion.span>
            </h1>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
