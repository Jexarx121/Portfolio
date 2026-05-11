import Separator from "../helpers/separator/Separator";
import Title from "../helpers/title/title";
import { Fira_Code } from "next/font/google";

const fira_code = Fira_Code({ subsets: ['latin'] });

const skillCategories = [
    { label: "Languages", items: ["JavaScript", "TypeScript", "HTML", "Shopify Liquid", "CSS", "Sass", "Python", "PHP"] },
    { label: "Frameworks", items: ["React", "Tailwind", "NodeJS", "Playwright", "Cypress", "NextJS", "Express", "Prisma", "Symfony"] },
    { label: "Tools", items: ["Git", "MySQL", "SQLite", "Neovim"] },
    { label: "Platforms", items: ["MongoDB", "Figma", "Supabase", "GitHub", "Vercel", "Linux"] },
];

const Skills = () => {
    return (
        <div className="lg:w-[80%] sm:w-[90%] w-[100%] sm:p-0 px-8 m-auto sm:mb-60 mb-48" id="skills">
            <Title title="Skills" />
            <Separator />
            <div className={`mt-10 flex flex-col gap-6 ${fira_code.className}`}>
                {skillCategories.map(({ label, items }) => (
                    <div key={label} className="flex md:flex-row flex-col md:gap-8 gap-3">
                        <span className="text-white font-bold lg:text-[18px] text-[16px] md:w-36 shrink-0">{label}</span>
                        <div className="flex flex-row flex-wrap gap-2">
                            {items.map((item) => (
                                <span key={item} className="text-[#aaabb8] lg:text-[15px] text-[13px] border border-[#29648A] rounded px-3 py-1">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
