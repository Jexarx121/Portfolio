import Title from "../helpers/title/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { Fira_Code } from "next/font/google";

const fira_code = Fira_Code({ subsets: ['latin'] })

interface FeaturedProjectProps {
  title: string;
  description: string;
  languages: string[];
  githubLink: string;
  imageLink: string;
  projectLink: string;
};

const FeaturedProject = ({ title, description, languages, imageLink, githubLink, projectLink } : FeaturedProjectProps) => {
  return (
    <div className="bg-[#464866] border-[#464866] border-2 rounded-md flex lg:flex-row flex-col gap-5 px-5 pb-4 relative mb-24">
      <div className="lg:w-[70%] md:w-[80%] sm:w-[90%] w-[100%]">
        <Title title={title}/>
        <p className="md:text-[20px] text-[18px] my-4">{description}</p>
        <div className="flex md:flex-row my-3 flex-wrap gap-4 pb-4">
          {languages.map((language, index) => (
            <p key={index} className={`px-2 py-1 border-[#2E9CCA] rounded-md border-2 text-[#2e9cca] ${fira_code.className}`}>{language}</p>
          ))}
        </div>
        <div className="flex flex-row gap-5">
          <Link href={githubLink}><FontAwesomeIcon icon={faGithub} className="text-white text-2xl"/></Link>
          {projectLink !== "" && (
            <Link href={projectLink}><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-white text-2xl"/></Link>
          )}
        </div>
      </div>
      <div className="lg:w-[40%]">
        <Image src={imageLink} alt="Trace project homepage" width={500} height={400} 
          className="lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:translate-x-[50px] xl:h-[80%] lg:h-[70%] xl:w-[450px] lg:w-[350px] w-full"/>
      </div>
    </div>
  )
}

export default FeaturedProject;