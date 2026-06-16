import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import AnimatedProblem from "@/components/sections/AnimatedProblem";
import { HomepageJsonLd } from "@/components/JsonLd";

// Below-the-fold sections are code-split so they don't block FCP/LCP.
// ssr: true keeps SEO content in the initial HTML — only the JS bundle is split.
const Showcase = dynamic(() => import("@/components/sections/Showcase"));
const Paths = dynamic(() => import("@/components/sections/Paths"));
const WhyStrategi = dynamic(() => import("@/components/sections/WhyStrategi"));
const Industries = dynamic(() => import("@/components/sections/Industries"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <HomepageJsonLd />
      <Hero />
      <AnimatedProblem />
      <Showcase />
      <Paths />
      <WhyStrategi />
      <Industries />
      <FAQ />
      <Contact />
    </>
  );
}
