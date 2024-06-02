import Image from "next/image";
import Separator from "../helpers/separator/Separator";
import Title from "../helpers/title/title";
import { Fira_Code } from "next/font/google";

const fira_code = Fira_Code({ subsets: ['latin'] });

const About = () => {
  return (
    <div className="lg:w-[80%] w-[90%] m-auto mb-48" id="about">
      <Title title="About"/>
      <Separator/>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[50%] lg:mr-10 lg:text-[20px] sm:text-[18px]">
          <p className="my-5">
            Hi, I'm Zhi Jie (Zhi is fine) and I like creating things on the internet. My interest in app development came very late due to pre-conceived notion that I was not creative enough. However, through sticking with it (I'm looking at you group projects), I've come to thoroughly enjoy it.
          </p>
          <p className="my-5">
            Fast-forward to today, and I've had the pleasure of working as a software engineer in <span className="text-[#2E9CCA]">IBM</span> and as an intern to develop the website for the <span className="text-[#2E9CCA]">Cork Smart Gateway</span> initiative. While they were not directly fullstack focused, I am forever grateful for the experience I gained from my time there.
          </p>
          <p className="my-5">
            I'm would love the oppurtunity to become an experienced fullstack developer.  If you're interested, here are a few technologies I've been working with recently through personal projects:
          </p>
          <div className="flex flex-row md:gap-20 gap-40 lg:text-[18px] md:text-[16px]">
            <ol className={`list-inside list-disc text-[#aaabb8] marker:text-[#2e9cca] ${fira_code.className}`}>
              <li>JS / TS</li>
              <li>React</li>
              <li>Next.js</li>
            </ol>
            <ol className={`list-inside list-disc text-[#aaabb8] marker:text-[#2e9cca] ${fira_code.className}`}>
              <li>MongoDB</li>
              <li>Supabase</li>
              <li>Firebase</li>
            </ol>
          </div>
        </div>
        <div className="lg:w-[50%] flex justify-center items-center lg:mt-0 mt-24">
          <Image src="/profile.png" alt="Self profile image" width={500} height={500} className="object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default About;