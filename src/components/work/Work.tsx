"use client"

import Intern from "./Intern";
import IBM from "./IBM";
import Separator from "../helpers/separator/Separator";
import { useState } from "react";
import Title from "../helpers/title/title";
import Studio from "./Studio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const tabs = [
    { label: "StudioForty9", component: <Studio /> },
    { label: "IBM", component: <IBM /> },
    { label: "UCC", component: <Intern /> },
]

const Work = () => {
    const [active, setActive] = useState(0)
    const [direction, setDirection] = useState<'right' | 'left'>('right')

    const workTitleHoverStyle = "hover:text-[#29648A] duration-300 transition"

    const goTo = (i: number) => {
        setDirection(i > active ? 'right' : 'left')
        setActive(i)
    }

    return (
        <div className="sm:mb-60 mb-48 lg:w-[60%] md:w-[80%] sm:w-[90%] w-[100%] m-auto sm:p-0 px-8" id="experience">
            <Title title="Work Experience" />
            <Separator />

            {/* Mobile carousel nav */}
            <div className="md:hidden flex items-center justify-between mt-10 mb-4">
                <button onClick={() => goTo(active - 1)}
                    aria-label="Previous"
                    className={`text-white transition px-2 ${active === 0 ? 'invisible' : ''}`}
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
                </button>
                <h2 className="font-bold text-[30px] text-[#29648A]">{tabs[active].label}</h2>
                <button onClick={() => goTo(active + 1)}
                    aria-label="Next"
                    className={`text-white transition px-2 ${active === tabs.length - 1 ? 'invisible' : ''}`}
                >
                    <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
                </button>
            </div>

            <div className="md:flex flex-row gap-20 md:mt-10">
                <div className="hidden md:flex flex-col gap-4">
                    {tabs.map((tab, i) => (
                        <h2 key={tab.label} onClick={() => goTo(i)}
                            className={`font-bold text-[30px] cursor-pointer pl-4 ${active === i
                                ? "text-[#29648A] border-l-4 rounded-md border-[#29648A]"
                                : `text-white ${workTitleHoverStyle}`
                                }`}
                        >
                            {tab.label}
                        </h2>
                    ))}
                </div>

                <div key={active} className={direction === 'right' ? 'slide-in-right' : 'slide-in-left'}>
                    {tabs[active].component}
                </div>
            </div>
        </div>
    )
}

export default Work;
