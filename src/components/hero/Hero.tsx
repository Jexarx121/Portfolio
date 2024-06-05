const Hero = () => {
  return (
    <div className="lg:w-[60%] md:w-[80%] sm:w-[90%] w-[100%] m-auto min-h-screen flex flex-col mt-48 sm:p-0 px-8">
      <h1 className="lg:my-6 md:my-5 my-4">Y&#39;hello, my name is</h1>
      <h1 className="text-white sm:text-8xl text-5xl font-bold lg:my-6 md:my-5 my-4">Zhi Jie Chen.</h1>
      <h2 className="text-[#aaabb8] sm:text-8xl text-5xl font-bold lg:my-6 md:my-5 my-4">Fullstack developer.</h2>
      <p className="xl:w-[50%] lg:w-[60%] md:w-[75%] sm:text-[20px] text-[18px] font-medium lg:my-6 md:my-5 my-4">I&#39;m a developer from Cork, Ireland. I aspire to tackle diverse challenges and create impactful solutions through extraordinary applications.</p>
      {/* Add arrow to scroll down here */}
    </div>
  );
};

export default Hero;