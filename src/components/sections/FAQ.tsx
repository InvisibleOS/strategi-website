"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is AI Presence and why does it matter?",
    a: "AI Presence is whether AI systems understand your business well enough to recommend it. When someone asks ChatGPT, Gemini, or Perplexity for a recommendation in your category, you are either in the answer or you are not. There is no page two. There is only inclusion or exclusion. Strategi ensures inclusion.",
  },
  {
    q: "How is this different from SEO?",
    a: "SEO optimizes for search engine rankings and clicks. AI Presence is fundamentally different. AI does not return lists. It returns answers. We do not optimize for keywords or backlinks. We build your business as a well-defined entity that AI can comprehend, categorize, and recommend. Different system, different rules, different approach.",
  },
  {
    q: "What does the engagement look like?",
    a: "Every engagement starts with a diagnostic. We query AI systems about your business and category, documenting what AI says, what it misses, and what it gets wrong. From there, we build a strategic roadmap across six phases: Diagnose, Define, Structure, Build, Reinforce, and Monitor. Each phase has clear objectives and measurable impact.",
  },
  {
    q: "How do you measure success?",
    a: "We track one metric: whether AI recommends you. We monitor your recommendation status across major AI platforms, track which queries trigger your inclusion, benchmark against competitors, and measure changes as models update. When AI recommends you, we reinforce. When it does not, we diagnose and fix.",
  },
  {
    q: "Why do you not publish case studies?",
    a: "AI Presence strategy is inherently competitive. When a business becomes the recommended answer in its category, that position displaces someone else. Revealing the approach gives competitors a blueprint to counter it. Our clients chose us in part because we protect their competitive edge, not publicize it. We share results under NDA during diagnostic conversations.",
  },
  {
    q: "Who is this for?",
    a: "Established businesses with substance, legacy, and genuine credibility in their category. Companies that have built something real but are not showing up when AI recommends. We are not for startups looking for a growth hack. We are not for brands without a track record. We are for businesses that deserve to be recommended.",
  },
  {
    q: "How long does it take to see results?",
    a: "The Structure phase typically produces the most immediate impact on AI recommendations. Comprehensive results across all major AI platforms develop over 3 to 6 months of continuous execution as your authority compounds and AI models update with new training data.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Yes. AI Presence is not a one-time project. It is a system that compounds. We work in focused, phase-based engagements with clear objectives and defined outputs. The depth of strategic work required demands sustained attention and execution.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions about AI Presence and Strategi"
      className="bg-[#050505] pt-24 md:pt-40 pb-24 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-6">
              Common Questions
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9]">
              Frequently asked
              <br />
              <span className="text-white/30">questions.</span>
            </h2>
          </div>
          <a
            href="mailto:hello@strategi.is?subject=AI%20Presence%20Inquiry"
            className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
          >
            [ Contact Us ]
          </a>
        </div>

        {/* Accordion — answers always in DOM for crawlers, animated with CSS grid */}
        <dl className="border-t border-white/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border-b border-white/10 group bg-[#050505] hover:bg-white/[0.02] transition-colors duration-300"
              >
                <dt>
                  <button
                    onClick={() => toggleOpen(idx)}
                    className="w-full text-left py-8 md:py-10 flex items-start gap-6 md:gap-12 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <div className="font-mono text-xs md:text-sm text-white/20 pt-1 w-8 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1 pr-8">
                      <h3
                        className={`text-xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                          isOpen
                            ? "text-white"
                            : "text-white/60 group-hover:text-white"
                        }`}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    <div className="relative w-4 h-4 shrink-0 mt-2">
                      <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0,
                          opacity: isOpen ? 0 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-1/2 left-0 w-full h-[2px] bg-white/40 -translate-y-1/2"
                      />
                      <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0,
                          opacity: isOpen ? 0 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-1/2 w-[2px] h-full bg-white/40 -translate-x-1/2"
                      />
                      <motion.div
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          scale: isOpen ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-1/2 left-0 w-full h-[2px] bg-[#d4620a] -translate-y-1/2"
                      />
                    </div>
                  </button>
                </dt>

                {/* Answer always in DOM — uses CSS grid for smooth height animation */}
                <dd
                  id={`faq-answer-${idx}`}
                  className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.25,0.4,0.25,1)]"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-14 md:px-20 pb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 bg-[#d4620a] mt-2 shrink-0" />
                        <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-3xl">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
