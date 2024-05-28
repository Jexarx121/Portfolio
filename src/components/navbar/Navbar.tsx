import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between">
      <div className="my-10">
        <Link href="/" className="text-[40px] bg-[#2E9CCA] px-3 py-[2px] rounded-sm ml-10 font-bold my-5">Z</Link>
      </div>
      <div className="my-12">
        <Link href="#about" className="text-white px-10">About</Link>
        <Link href="#experience" className="text-white px-10">Experience</Link>
        <Link href="#projects" className="text-white px-10">Projects</Link>
        <Link href="#contact" className="text-white px-10">Contact</Link>
      </div>
    </nav>
  )
};

export default Navbar;