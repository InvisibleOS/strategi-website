"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "AI SEO", href: "/ai-seo", num: "01" },
  { label: "Blog", href: "/blogs", num: "02" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);

  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setOpen(false);

      if (href === "/") {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.location.href = "/";
        }
        return;
      }

      if (href.startsWith("/#")) {
        const hash = href.slice(1);
        if (pathname === "/") {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.location.href = href;
        }
      } else {
        window.location.href = href;
      }
    },
    [pathname]
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 w-full ${
          scrolled ? "pt-4" : "pt-6"
        }`}
      >
        <div
          className={`relative flex items-center justify-between transition-all duration-500 ease-out
          ${
            scrolled
              ? "bg-[#050505]/80 border-white/10 shadow-2xl shadow-black/50 md:max-w-[980px]"
              : "bg-transparent border-transparent md:max-w-[1200px]"
          }
          w-[calc(100%-2rem)]
          backdrop-blur-xl border rounded-full px-5 py-3 md:py-4`}
        >
          <Link
            href="/"
            onClick={(e) => handleNav(e, "/")}
            className="flex items-center gap-2 z-50 relative group shrink-0"
          >
            <Image
              src="/strategi.png"
              alt="Strategi - AI Presence Advisory"
              width={32}
              height={32}
              priority
              className="rounded-full object-cover"
            />
            <span className="text-xl font-bold tracking-tighter text-white">
              Strategi
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 ml-auto" aria-label="Main navigation">
            <div className="flex items-center bg-white/[0.03] border border-white/5 rounded-full px-2 py-1.5 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="relative px-4 lg:px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Link
              href="/#contact"
              onClick={(e) => handleNav(e, "/#contact")}
              className="group relative inline-flex items-center justify-center px-5 lg:px-6 py-2.5 overflow-hidden font-medium text-black transition duration-300 ease-out rounded-full shadow-md"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-gray-200 to-gray-400" />
              <span className="absolute top-0 right-0 block w-64 h-64 -mr-16 -mt-16 bg-white opacity-20 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out" />
              <span className="relative flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                Start Diagnostic
              </span>
            </Link>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden relative z-50 p-2 text-white hover:text-[#d4620a] transition-colors"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#050505]/95 backdrop-blur-2xl overflow-y-auto overscroll-none"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={28} strokeWidth={1} />
            </button>

            <div className="min-h-full flex flex-col justify-center px-6 py-20">
              <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 16, opacity: 0 }}
                      transition={{ delay: 0.05 + i * 0.06 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNav(e, link.href)}
                        className="group flex items-center gap-3 text-2xl font-light text-white tracking-tight"
                      >
                        <span className="text-[10px] font-mono text-[#d4620a] pt-1 shrink-0 w-5">
                          {link.num}
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300 truncate">
                          {link.label}
                        </span>
                      </a>
                      <div className="h-px w-full bg-white/5 mt-4" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Link
                    href="/#contact"
                    onClick={(e) => handleNav(e, "/#contact")}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-[#d4620a] hover:text-white transition-colors duration-300"
                  >
                    Start Diagnostic
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
