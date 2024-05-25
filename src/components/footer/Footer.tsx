import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between my-10">
      <div className="flex flex-row ml-10">
        <Link href="https://github.com/Jexarx121"><FontAwesomeIcon className="px-3 text-white text-xl" icon={faGithub}/></Link>
        <Link href="https://www.linkedin.com/in/zjchen402/"><FontAwesomeIcon className="px-3 text-white text-xl" icon={faLinkedin}/></Link>
        <FontAwesomeIcon className="px-3 text-white cursor-pointer text-xl" icon={faFile}/>
      </div>
      <div className="mr-10">
        <p className="text-xs">All rights reserved. Made loosely in Figma. Developed in Next.js, Typescript and Tailwind CSS.</p>
      </div>
    </footer>
  )
};

export default Footer;