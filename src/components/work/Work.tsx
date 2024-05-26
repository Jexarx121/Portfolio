"use client"

import Intern from "./Intern";
import IBM from "./IBM";
import Separator from "../helpers/separator/Separator";
import { useState } from "react";
import Title from "../helpers/title/title";

const Work = () => {
  const [ibm, setIbm] = useState(true);
  const [intern, setIntern] = useState(false);

  return (
    <div className="my-24 w-[60%] m-auto">
      <Title title="Previous Work" />
      <Separator/>
      <div className="flex flex-row mb-4">
        <h2 className={`font-bold text-[30px] ${ibm ? "text-[#29648A]" : "text-white hover:text-[#29648A] duration-300 transition"} mr-4 cursor-pointer`}
          onClick={() => {setIbm(true); setIntern(false)}}>IBM</h2>
        <h2 className={`font-bold text-[30px] ${intern ? "text-[#29648A]" : "text-white hover:text-[#29648A] duration-300 transition"} ,l-4 cursor-pointer`}
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
  )
}

export default Work;