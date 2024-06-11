import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
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
    <div className="sm:p-0 px-8 flex flex-col flex-grow h-full">
      <div className="bg-[#464866] rounded-md py-5 px-8 flex flex-col justify-between h-full">
        <div>
          <FontAwesomeIcon icon={faFolderOpen} className="text-[#2E9CCA] text-4xl mt-2"/>
          <h1 className="my-4 text-[35px] font-bold text-[#2E9CCA]">{title}</h1>
          <p className="lg:text-md text-[20px] mb-4">{description}</p>
          <div className="flex flex-row my-3 flex-wrap gap-6">
            {languages.map((language, index) => (
              <p key={index} className={`py-1 rounded-md ${fira_code.className} text-white`}>{language}</p>
            ))}
          </div>
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