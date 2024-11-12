import Image from "next/image";
import Separator from "../helpers/separator/Separator";
import Title from "../helpers/title/title";
import { Fira_Code } from "next/font/google";

const fira_code = Fira_Code({ subsets: ['latin'] });

const About = () => {
  return (
    <div className="lg:w-[80%] sm:w-[90%] w-[100%] sm:p-0 px-8 m-auto sm:mb-60 mb-48" id="about">
      <Title title="About"/>
      <Separator/>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[50%] lg:mr-10 lg:text-[20px] sm:text-[18px]">
          <p className="my-5">
          Hi, I&#39;m Zhi, and I&#39;m passionate about bringing ideas to life on the internet. I didn&#39;t dive into app development until later, having always thought I lacked the creative touch. But after some challenging group projects (looking at you, deadlines!), I&#39;ve found a real love for it.
          </p>
          <p className="my-5">
            Fast-forward to today, and I have the pleasure of working as a Junior QA Engineer in <span className="text-[#2E9CCA]">StudioForty9</span>, an ecommerce web design business that operates on a national scale. My main focus however, is still improving my skills from front to back(end).
          </p>
          <p className="my-5">
            If you&#39;re interested, here are a few technologies I&#39;ve been working with recently through personal projects:
          </p>
          <div className="flex flex-row md:gap-32 gap-8 lg:text-[18px] md:text-[16px] flex-wrap sm:g">
            <ol className={`list-inside list-disc text-[#aaabb8] marker:text-[#2e9cca] ${fira_code.className}`}>
              <li>JS / TS</li>
              <li>React</li>
              <li>Next.js</li>
            </ol>
            <ol className={`list-inside list-disc text-[#aaabb8] marker:text-[#2e9cca] ${fira_code.className}`}>
              <li>Node</li>
              <li>Express</li>
              <li>SQLite</li>
            </ol>
            <ol className={`list-inside list-disc text-[#aaabb8] marker:text-[#2e9cca] ${fira_code.className}`}>
              <li>MongoDB</li>
              <li>Supabase</li>
              <li>Prisma</li>
            </ol>
          </div>
        </div>
        <div className="lg:w-[50%] flex justify-center items-center lg:mt-0 mt-24 ">
          <Image src="/profile_upscaled.png" alt="Self profile image" width={500} height={500} className="object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default About;