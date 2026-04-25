import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import AnimatedProblem from "@/components/sections/AnimatedProblem";

// Below-the-fold sections are code-split so they don't block FCP/LCP.
// ssr: true keeps SEO content in the initial HTML — only the JS bundle is split.
const Showcase = dynamic(() => import("@/components/sections/Showcase"));
const Timeline = dynamic(() => import("@/components/sections/Timeline"));
const WhyStrategi = dynamic(() => import("@/components/sections/WhyStrategi"));
const Tracks = dynamic(() => import("@/components/sections/Tracks"));
const About = dynamic(() => import("@/components/sections/About"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedProblem />
      <Showcase />
      <Timeline />
      <WhyStrategi />
      <Tracks />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
