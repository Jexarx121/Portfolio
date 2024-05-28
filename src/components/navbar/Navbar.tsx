import Link from "next/link";

const Navbar = () => {
  const navLinksStyle : string = "hover:text-[#2E9CCA] transition duration-300 hover:border-[#2E9CCA] hover:border-b-2 pb-2";
  
  return (
    <nav className="flex flex-row justify-between">
      <div className="my-10">
        <Link href="/" className="text-[40px] bg-[#2E9CCA] px-3 py-[2px] rounded-sm ml-10 font-bold my-5">Z</Link>
      </div>
      <div className="my-12">
        <Link href="#about" className={`text-white mx-10 ${navLinksStyle}`}>About</Link>
        <Link href="#experience" className={`text-white mx-10 ${navLinksStyle}`}>Experience</Link>
        <Link href="#projects" className={`text-white mx-10 ${navLinksStyle}`} >Projects</Link>
        <Link href="#contact" className={`text-white mx-10 ${navLinksStyle}`}>Contact</Link>
      </div>
    </nav>
  )
};

export default Navbar;