import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex sm:flex-row flex-col justify-between my-10">
      <div className="flex flex-row sm:ml-10 ml-8">
        <Link href="https://github.com/Jexarx121"><FontAwesomeIcon className="pr-3 text-white sm:text-xl text-2xl" icon={faGithub}/></Link>
        <Link href="https://www.linkedin.com/in/zjchen402/"><FontAwesomeIcon className="px-3 text-white sm:text-xl text-2xl" icon={faLinkedin}/></Link>
        {/* <a href="/ZhiJieChenCV.pdf" download="ZhiJieChenCV"><FontAwesomeIcon className="px-3 text-white cursor-pointer sm:text-xl text-2xl" icon={faFile}/></a> */}
      </div>
      <div className="sm:mr-10 sm:m-0 m-8">
        <p className="text-xs">All rights reserved. Made loosely in Figma. Developed in Next.js, Typescript and Tailwind CSS.</p>
      </div>
    </footer>
  )
};

export default Footer;