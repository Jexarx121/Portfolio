import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Project from "@/components/project/Project";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Work/>
      <Project/>
      <Contact/>
    </div> 
  );
}
