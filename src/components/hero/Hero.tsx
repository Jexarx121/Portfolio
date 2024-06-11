'use client'
import { useEffect, useState } from "react";

const Hero = () => {
  const texts : string[] = ['Fullstack developer.', 'Software engineer.'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [texts.length])

  return (
    <div className="lg:w-[60%] md:w-[80%] sm:w-[90%] w-[100%] m-auto min-h-screen flex flex-col mt-48 sm:p-0 px-8">
      <h1 className="lg:my-6 md:my-5 my-4">Y&#39;hello, my name is</h1>
      <h1 className="text-white xl:text-8xl lg:text-[80px] md:text-7xl sm:text-6xl text-5xl font-bold lg:my-6 md:my-5 my-4">Zhi Jie Chen.</h1>
      <h2 className="text-[#aaabb8] 2xl:text-8xl xl:text-7xl md:text-6xl text-5xl font-bold lg:my-6 md:my-5 my-4 py-2 typed"
        key={currentIndex}>
        {texts[currentIndex]}
      </h2>
      <p className="xl:w-[50%] lg:w-[60%] md:w-[75%] text-[20px] font-medium lg:my-6 md:my-5 my-4">I&#39;m from Cork, Ireland. I aspire to tackle diverse challenges and creates impactful solutions through extraordinary applications.</p>
      {/* Add arrow to scroll down here */}
    </div>
  );
};

export default Hero;