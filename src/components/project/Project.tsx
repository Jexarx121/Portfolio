import Separator from "../helpers/separator/Separator"
import Title from "../helpers/title/title"
import FeaturedProject from "./FeaturedProject";
import FolderProjects from "./FolderProjects";

const Project = () => {
    return (
        <div className="lg:w-[80%] sm:w-[90%] w-[100%] m-auto sm:mb-60 mb-48 sm:p-0 px-8" id="projects">
            <div className="mb-8">
                <Title title="Personal Ventures" />
                <Separator />
                <p className="lg:w-[60%] md:w-[80%] sm:w-[90%] w-[100%] text-[20px]">
                    I enjoy working on projects as an outlet for my creativity. As well as that, it provides a fun way to learn new technologies or improve on my current skills (At least that&#39;s what I tell myself before my code breaks). Below are some of my favourite ones.
                </p>
            </div>
            <FeaturedProject
                title="Mern Estate"
                description="Fullstack responsive real estate website with user authentication, post CRUD functionality with Prisma and MongoDB, map view with react-leaflet, protected routes with react-router-dom and Node Express backend server."
                languages={["React", "MongoDB", "Node", "Express", "Primsa ORM"]}
                imageLink="/mernestate.png"
                githubLink="https://github.com/Jexarx121/MernEstate"
                projectLink="https://mern-estate-ui.vercel.app/" />
            <FeaturedProject
                title="Trace"
                description="Website for volunteers to record their efforts and rewarded redeemable crypto credits. They can redeem this credits in future to request assistance of their own. Implemented custodial wallets with psuedo meta-transactions along with ERC-20 smart contract created in OpenZeppelin."
                languages={["React", "TypeScript", "Figma", "Supabase", "Solidity"]}
                imageLink="/trace.png"
                githubLink="https://github.com/Jexarx121/Trace"
                projectLink="https://trace-sand.vercel.app/" />
            <div className="items-center flex flex-col justify-center mb-10">
                <Title title="Older Projects" />
                <Separator />
            </div>
            <div className="lg:w-[80%] md:w-[90%] sm:w-[95%] w-[100%] m-auto">
                <FolderProjects />
            </div>
        </div>
    )
}

export default Project;
