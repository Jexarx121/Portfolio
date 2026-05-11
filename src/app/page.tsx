import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Project from "@/components/project/Project";
import RevealSection from "@/components/reveal/RevealSection";
import Skills from "@/components/skills/Skills";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <div>
      <Hero/>
      <RevealSection><About/></RevealSection>
      <RevealSection><Skills/></RevealSection>
      <RevealSection><Work/></RevealSection>
      <RevealSection><Project/></RevealSection>
      <RevealSection><Contact/></RevealSection>
    </div>
  );
}
