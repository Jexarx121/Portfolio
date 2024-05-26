import Title from "../helpers/title/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
};

const FeaturedProject = ({ title, description, languages, githubLink, imageLink } : FeaturedProjectProps) => {
  return (
    <div className="bg-[#464866] border-[#464866] border-2 rounded-md flex flex-row gap-5 px-5 pb-4 w-[90%] relative mb-20">
      <div className="w-[70%]">
        <Title title={title}/>
        <p className="text-[20px] my-4">{description}</p>
        <div className="flex flex-row gap-4 pb-4">
          {languages.map((language, index) => (
            <p key={index} className={`px-2 py-1 border-[#2E9CCA] rounded-md border-2 text-white ${fira_code.className}`}>{language}</p>
          ))}
        </div>
        <Link href={githubLink}><FontAwesomeIcon icon={faGithub} className="text-white text-2xl"/></Link>
      </div>
      <div className="w-[40%]">
        <Image src={imageLink} alt="Trace project homepage" width={500} height={400} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[50px] h-[80%]"/>
      </div>
    </div>
  )
}

export default FeaturedProject;