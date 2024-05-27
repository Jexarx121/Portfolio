import Title from "../helpers/title/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Fira_Code } from "next/font/google";


const fira_code = Fira_Code({ subsets: ['latin'] })

interface ArchivedProjectProps {
  title: string;
  description: string;
  languages: string[];
  githubLink: string;
  projectLink: string;
};

const ArchivedProject = ({ title, description, languages, githubLink, projectLink } : ArchivedProjectProps) => {
  return (
    <div className="w-[70%] m-auto">
      <div className="bg-[#464866] rounded-md p-5">
        <Title title={title}/>
        <p>{description}</p>
        <div className="flex flex-row my-3">
          {languages.map((language, index) => (
            <p key={index} className={`py-1 rounded-md text-white ${fira_code.className} mr-3`}>{language}</p>
          ))}
        </div>
        <div className="gap-5 flex flex-row">
          <Link href={githubLink}><FontAwesomeIcon icon={faGithub} className="text-white text-2xl"/></Link>
          {projectLink !== "" && (
            <Link href={projectLink}><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-white text-2xl"/></Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArchivedProject;