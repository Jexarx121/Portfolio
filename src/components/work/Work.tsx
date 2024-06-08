"use client"

import Intern from "./Intern";
import IBM from "./IBM";
import Separator from "../helpers/separator/Separator";
import { useState } from "react";
import Title from "../helpers/title/title";

const Work = () => {
  const [ibm, setIbm] = useState(true);
  const [intern, setIntern] = useState(false);

  const workTitleHoverStyle : string = "hover:text-[#29648A] duration-300 transition"

  return (
    <div className="sm:mb-60 mb-48 lg:w-[60%] md:w-[80%] sm:w-[90%] w-[100%] m-auto sm:p-0 px-8" id="experience">
      <Title title="Previous Work" />
      <Separator/>
      <div className="md:flex flex-row gap-20 mt-10">
        <div className="flex flex-row md:flex-col mb-4 md:gap-4">
          <h2 className={`font-bold text-[30px] ${ibm ? "text-[#29648A] md:border-l-4 rounded-md border-[#29648A]" : `text-white ${workTitleHoverStyle}`} md:mr-0 mr-4 cursor-pointer md:pl-4`}
            onClick={() => {setIbm(true); setIntern(false)}}>IBM</h2>
          <h2 className={`font-bold text-[30px] ${intern ? "text-[#29648A] md:border-l-4 rounded-md border-[#29648A]" : `text-white ${workTitleHoverStyle}`} md:ml-0 ml-4 cursor-pointer md:pl-4`}
            onClick={() => {setIbm(false); setIntern(true)}}>UCC</h2>  
        </div>
        <div>
          {ibm && (
            <IBM/>
          )}
          {intern && (
            <Intern/>
          )}
        </div>
      </div>
    </div> 
  )
}

export default Work;