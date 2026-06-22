"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import GlassSurface from "./GlassSurface";

const navLinks = [
  { label: "Services", href: "/services", num: "01" },
  { label: "Products", href: "/products", num: "02" },
  { label: "Who Owns AI", href: "/who-owns-ai", num: "03" },
  { label: "About", href: "/about", num: "04" },
  { label: "Blog", href: "/blogs", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

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
          if (lenis) {
            lenis.scrollTo(0);
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          window.location.href = "/";
        }
        return;
      }

      if (href.startsWith("/#")) {
        const hash = href.slice(1);
        if (pathname === "/") {
          const el = document.querySelector(hash);
          if (el) {
            if (lenis) {
              lenis.scrollTo(el as HTMLElement);
            } else {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        } else {
          window.location.href = href;
        }
      } else {
        window.location.href = href;
      }
    },
    [pathname, lenis]
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-4 inset-x-0 z-50",
          "transition-all duration-500 ease-in-out",
          isMounted ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0",
          scrolled ? "mx-4 md:mx-32 lg:mx-64" : "mx-4 md:mx-4 lg:mx-4",
          "flex justify-center"
        )}
      >
        <GlassSurface
          enabled={scrolled}
          className={cn(
            "relative flex items-center justify-between",
            "rounded-full px-4 py-1.5 md:px-5 md:py-4 transition-all duration-500 ease-in-out w-full",
            scrolled
              ? "shadow-2xl shadow-black/50 border border-white/10"
              : "shadow-none border border-transparent bg-transparent"
          )}
        >
          {/* Left — Logo */}
          <Link
            href="/"
            onClick={(e) => handleNav(e, "/")}
            className="flex items-center gap-2 z-50 relative group shrink-0 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/strategi.png"
              alt="Strategi - AI Presence Advisory"
              width={32}
              height={32}
              priority
              className="rounded-full object-cover h-7 w-7 md:h-8 md:w-8"
            />
            <span
              className={cn(
                "text-lg md:text-xl font-bold tracking-tighter transition-colors duration-500 ease-in-out",
                scrolled ? "text-white/90" : "text-[#d4620a]"
              )}
            >
              Strategi
            </span>
          </Link>

          {/* Desktop Nav links + CTA */}
          <nav className="hidden md:flex items-center gap-1 ml-auto" aria-label="Main navigation">
            <div className="flex items-center rounded-full p-1.5 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="relative px-4 lg:px-5 py-2 text-sm font-medium text-white/75 hover:text-white transition-colors rounded-full hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Link
              href="/#contact"
              onClick={(e) => handleNav(e, "/#contact")}
              className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-3.5 font-bold text-black bg-white hover:bg-[#d4620a] hover:text-white transition-colors duration-300 rounded-full shadow-md shrink-0"
            >
              <span className="relative flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                Book a Call
              </span>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden relative z-50 p-2 text-white hover:text-[#d4620a] transition-colors cursor-pointer"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </GlassSurface>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#050505] overflow-y-auto overscroll-none"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors z-10 cursor-pointer"
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
                    className="flex items-center justify-center gap-2 w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-[#d4620a] hover:text-white transition-colors duration-300"
                  >
                    Book a Call
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
