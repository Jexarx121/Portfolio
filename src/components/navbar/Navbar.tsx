"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navLinksStyle : string = "hover:text-[#2E9CCA] transition duration-300 hover:border-[#2E9CCA] hover:border-b-2 pb-2";

  const [navbarMenu, setNavbarMenu] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const [shadows, setShadows] = useState(false);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 0) {
      setShadows(false);
      setShow(true);  // Show navbar when at the top of the page
    } else if (currentScrollY > prevScrollY) {
      setShow(false); // Hide navbar when scrolling down
      setShadows(true);
    } else {
      setShow(true);  // Show navbar when scrolling up
      setShadows(true);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [prevScrollY]);  //eslint-disable-line
  
  return (
    <nav className={`flex flex-row justify-between fixed top-0 w-full z-50 transition-transform duration-500 ${show ? 'transform translate-y-0' : 'transform -translate-y-full'} ${shadows ? 'shadow-slate-900 shadow-2xl' : 'bg-[#25274D] transition duration-500'} bg-[#212345]`}>
      <div className="md:mt-6 my-5">
        <Link href="/" className="text-[40px] bg-[#2E9CCA] px-3 py-[2px] rounded-sm md:ml-10 font-bold md:my-5 ml-5 hover:bg-black hover:text-[#2E9CCA] transition duration-300">Z</Link>
      </div>
      <div className="mt-10 md:block hidden">
        <Link href="#about" className={`text-white mx-10 ${navLinksStyle}`}>About</Link>
        <Link href="#experience" className={`text-white mx-10 ${navLinksStyle}`}>Experience</Link>
        <Link href="#projects" className={`text-white mx-10 ${navLinksStyle}`} >Projects</Link>
        <Link href="#contact" className={`text-white mx-10 ${navLinksStyle}`}>Contact</Link>
        <a href="/ZhiJieChenCV.pdf" download="ZhiJieChenCV">
          <button className="text-white border-[#2E9CCA] border-2 px-5 py-2 rounded-md mx-10 hover:bg-[#2E9CCA] hover:font-bold transition duration-300">Resume</button>
        </a>
      </div>
      <div className="md:hidden block my-6">
        <FontAwesomeIcon icon={faBars} className="mr-5 text-4xl text-white cursor-pointer" onClick={() => setNavbarMenu(true)}/>
        {navbarMenu && (
          <div className="w-[75%] h-screen absolute z-10 transition duration-500 top-0 right-0 bg-[#464866] flex flex-col items-end overflow-hidden">
            <FontAwesomeIcon icon={faX} className="text-4xl text-[#2e9cca] my-6 mr-5 cursor-pointer" onClick={() => setNavbarMenu(false)}/>
            <div className="flex-col flex mt-[30px] w-full px-5">
              <Link href="#about" className={`text-[#2e9cca] sm:text-xl text-lg my-6 text-right w-full`} onClick={() => setNavbarMenu(false)}>About</Link>
              <Link href="#experience" className={`text-[#2e9cca] sm:text-xl text-lg my-6 text-right w-full`} onClick={() => setNavbarMenu(false)}>Experience</Link>
              <Link href="#projects" className={`text-[#2e9cca] sm:text-xl text-lg my-6 text-right w-full`} onClick={() => setNavbarMenu(false)} >Projects</Link>
              <Link href="#contact" className={`text-[#2e9cca] sm:text-xl text-lg my-6 text-right w-full`} onClick={() => setNavbarMenu(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;