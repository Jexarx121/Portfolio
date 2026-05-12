import Image from "next/image";
import Separator from "../helpers/separator/Separator";
import Title from "../helpers/title/title";
import { Fira_Code } from "next/font/google";

const fira_code = Fira_Code({ subsets: ['latin'] });

const About = () => {
    return (
        <div className="lg:w-[80%] sm:w-[90%] w-[100%] sm:p-0 px-8 m-auto sm:mb-60 mb-48" id="about">
            <Title title="About" />
            <Separator />
            <div className="flex lg:flex-row flex-col">
                <div className="lg:w-[50%] lg:mr-10 lg:text-[20px] sm:text-[18px]">
                    <p className="my-5">
                        Hi, I&#39;m Zhi, and I&#39;m passionate about bringing ideas to life on the internet. I didn&#39;t dive into app development until later, having always thought I lacked the creative touch. However as with any skill at the start, I tried, practiced, cried and eventually I&#39;ve found a real love for it.
                    </p>
                    <p className="my-5">
                        Fast-forward to today, and I spend my days at <span className="text-[#2E9CCA]">StudioForty9</span> building Shopify storefronts and making sure they don&#39;t break — it&#39;s the best of both worlds. Shipping features and writing the tests to catch my own bugs.
                    </p>
                    <p className="my-5">
                        Here&#39;s some of what I&#39;ve been working with lately with the rest listed below:
                    </p>
                    <div className="flex flex-row md:gap-32 gap-8 lg:text-[18px] md:text-[16px] flex-wrap sm:g">
                        <ol className={`list-inside list-disc text-[#aaabb8] marker:text-[#2e9cca] ${fira_code.className}`}>
                            <li>Shopify Liquid</li>
                            <li>Playwright</li>
                            <li>CSS / Tailwind</li>
                        </ol>
                        <ol className={`list-inside list-disc text-[#aaabb8] marker:text-[#2e9cca] ${fira_code.className}`}>
                            <li>JS / TS</li>
                            <li>React</li>
                            <li>Next.js</li>
                        </ol>
                        <ol className={`list-inside list-disc text-[#aaabb8] marker:text-[#2e9cca] ${fira_code.className}`}>
                            <li>Node</li>
                            <li>Express</li>
                            <li>Figma</li>
                        </ol>
                    </div>
                </div>
                <div className="lg:w-[50%] flex justify-center items-center lg:mt-0 mt-24 ">
                    <Image src="/profile_upscaled.png" alt="Self profile image" width={500} height={500} className="object-cover" />
                </div>
            </div>
        </div>
    )
}

export default About;
