const Intern = () => {
  return (
    <div className="lg:w-[90%] w-[100%]">
      <h1 className="text-white lg:text-4xl sm:text-3xl text-2xl font-bold">Intern</h1>
      <p className="text-sm mb-2">June 2022 - September 2022</p>
      <ol className="text-[#aaabb8] list-disc list-inside lg:text-[20px] sm:text-[18px] text-[16px] marker:text-[#2E9CCA]">
        <li className="py-1">Redesigned the Cork Smart Gateway website in WordPress as a part of a two person-effort, improving site structure and maintainability.</li>
        <li className="py-1">Removed bloated plugins and repetitive CSS, cutting website loading times by 20% and improving page performance.</li>
        <li className="py-1">Implemented custom PHP and Ajax pagination for the blog collection page, streamlining navigation and enhancing user experience.</li>
      </ol>
    </div>
  )
}

export default Intern;