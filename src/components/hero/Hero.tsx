const Hero = () => {
  return (
    <div className="w-[60%] m-auto min-h-screen flex flex-col justify-start">
      <h1 className="my-6">Y'hello, my name is</h1>
      <h1 className="text-white text-8xl font-bold my-6">Zhi Jie Chen.</h1>
      <h2 className="text-[#aaabb8] text-8xl font-bold my-6">Fullstack developer.</h2>
      <p className="w-[50%] text-[20px] font-medium">I'm a developer from Cork, Ireland. I aspire to tackle diverse challenges and create impactful solutions through extraordinary applications.</p>
      {/* Add arrow to scroll down here */}
    </div>
  );
};

export default Hero;