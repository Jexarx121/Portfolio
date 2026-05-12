'use client'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const projects = [
    {
        title: "Next-Post",
        description: "Fullstack application built with NextJs and MongoDB. CRUD via custom NextAPI. OAuth and normal authentication.",
        languages: ["NextJS", "MongoDB", "NextAuth"],
        githubLink: "https://github.com/Jexarx121/next-posts",
        projectLink: "https://next-posts-alpha.vercel.app/"
    },
    {
        title: "Duæl Ascent",
        description: "Multiplayer, roguelike, deck-builder game built in university developed in Phaser 3 engine JavaScript. Designed all cards and sprites. Developed battle scene and card logic.",
        languages: ["JavaScript", "Phaser", "Figma"],
        githubLink: "https://github.com/nickCompSci/teamProject",
        projectLink: ""
    },
    {
        title: "Krypto",
        description: "Blockchain React website to exchange crypto using metamask API. Can also view the most recent transactions too.",
        languages: ["ReactJS", "Tailwind", "Solidity"],
        githubLink: "https://github.com/Jexarx121/Krypto",
        projectLink: ""
    },

]

const rotations = [-2, 1.5, -1]

export default function FolderProjects() {
    const [active, setActive] = useState(0)
    const project = projects[active]

    return (
        <div>
            <div className="flex gap-1">
                {projects.map((p, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`px-5 py-2 rounded-t-lg text-sm font-medium transition relative z-10 ${active === i
                            ? "bg-[#464866] text-[#2E9CCA] border border-b-0 border-[#5a5d7a] -mb-px"
                            : "bg-[#363854] text-[#aaabb8] hover:text-[#ccc] hover:-translate-y-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:translate-y-full after:bg-[#464866]"
                            }`}
                    >
                        {p.title}
                    </button>
                ))}
            </div>

            <div className="relative bg-[#464866] rounded-b-lg rounded-tr-lg border border-[#5a5d7a] p-8 lg:pr-24">
                <h1 className="text-[#2E9CCA] text-[28px] font-bold mb-3">{project.title}</h1>
                <p className="text-[#aaabb8] text-[18px] mb-6 lg:w-[75%]">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5 lg:hidden">
                    {project.languages.map(lang => (
                        <span key={lang} className="bg-[#f5e6c8] text-[#2c2c2c] px-3 py-1 text-xs font-mono shadow-sm">
                            {lang}
                        </span>
                    ))}
                </div>

                <div className="flex gap-5 items-center">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="text-[#aaabb8] hover:text-white transition-colors"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    </a>
                    {project.projectLink && (
                        <a
                            href={project.projectLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Live project"
                            className="text-[#aaabb8] hover:text-white transition-colors"
                        >
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl" />
                        </a>
                    )}
                </div>

                <div className="hidden lg:flex absolute right-0 inset-y-6 flex-col justify-evenly">
                    {project.languages.map((lang, i) => (
                        <div
                            key={lang}
                            className="sticker-torn bg-[#f5e6c8] text-[#2c2c2c] pl-4 pr-3 py-2 text-sm font-mono whitespace-nowrap"
                            style={{ transform: `translateX(45%) rotate(${rotations[i % rotations.length]}deg)` }}
                        >
                            {lang}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
