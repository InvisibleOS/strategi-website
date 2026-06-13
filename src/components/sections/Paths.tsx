"use client";

import Link from "next/link";
import { Layers, LineChart } from "lucide-react";
import { ProductHighlightCard } from "@/components/ui/product-card";

const paths = [
  {
    href: "/services",
    category: "Done-for-you",
    icon: <Layers className="h-5 w-5" />,
    title: "Services",
    description:
      "Omni-channel GEO: websites, YouTube, and GEO blogs that make AI name your business. Book a call to start.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=480&h=480&q=80",
    imageAlt: "Global network of connected nodes",
  },
  {
    href: "/products",
    category: "Self-serve",
    icon: <LineChart className="h-5 w-5" />,
    title: "Tolstoy",
    description:
      "Track how ChatGPT, Gemini, and Perplexity recommend you, plus free GEO tools.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=480&h=480&q=80",
    imageAlt: "Analytics dashboard with charts",
  },
];

export default function Paths() {
  return (
    <section
      id="how-to-work-with-us"
      aria-label="Two ways to work with Strategi: services and products"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-40 border-t border-white/10"
    >
      {/* soft accent glow for depth behind the cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[55vh] rounded-full bg-[#d4620a]/[0.05] blur-[150px]"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mx-auto mb-16 md:mb-20 max-w-2xl text-center">
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-6">
            How To Work With Us
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95] text-white">
            Two ways to win{" "}
            <span className="text-white/30">AI search visibility.</span>
          </h2>
          <p className="mt-6 text-base text-white/40 font-light leading-relaxed">
            Done-for-you services, or self-serve products. Pick the path that
            fits where you are.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-14">
          {paths.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              aria-label={`${p.title} — ${p.category}`}
              className="group block max-w-full rounded-2xl [perspective:1000px] transition-transform duration-300 will-change-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
              <ProductHighlightCard
                category={p.category}
                categoryIcon={p.icon}
                title={p.title}
                description={p.description}
                imageSrc={p.image}
                imageAlt={p.imageAlt}
                className="max-w-full"
                imageClassName="rounded-2xl object-cover shadow-2xl ring-1 ring-black/30"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
