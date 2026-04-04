import Hero from "@/components/sections/Hero";
import AnimatedProblem from "@/components/sections/AnimatedProblem";
import Showcase from "@/components/sections/Showcase";
import Timeline from "@/components/sections/Timeline";
import WhyStrategi from "@/components/sections/WhyStrategi";
import Tracks from "@/components/sections/Tracks";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

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
