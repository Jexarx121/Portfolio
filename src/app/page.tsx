import About from "@/components/about/About";
import Hero from "@/components/homepage/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
    </div> 
  );
}
