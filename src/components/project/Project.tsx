import Separator from "../helpers/separator/Separator"
import Title from "../helpers/title/title"
import ArchivedProject from "./ArchivedProject";
import FeaturedProject from "./FeaturedProject";

const Project = () => {
  return (
    <div className="lg:w-[80%] sm:w-[90%] w-[100%] m-auto sm:mb-60 mb-48 sm:p-0 px-8" id="projects">
      <div className="mb-8">
        <Title title="Personal Ventures"/>
        <Separator/>
        <p className="lg:w-[60%] md:w-[80%] sm:w-[90%] w-[100%] text-[20px]">
          I enjoy working on projects as an outlet for my creativity. As well as that, it provides a fun way to learn new technologies or improve on my current skills. Below are some of my favourite ones.
        </p>
      </div>
      <FeaturedProject 
        title="Trace" 
        description="Website for volunteers to record their efforts and receive redeemable  credits as a reward. They can redeem this credits in future to request assistance of their own. Implemented custodial wallets with psuedo meta-transactions along with ERC-20 smart contract." 
        languages={["React", "TypeScript", "Figma", "Supabase", "Solidity"]} 
        imageLink="/trace.png" 
        githubLink="https://github.com/Jexarx121/Trace" 
        projectLink=""/>
      <FeaturedProject 
        title="Next-Post" 
        description="Website to learn Next.js and MongoDB. Allows blog post interactions through CRUD operations in admin dashboard via custom NextAPI. Implemented authentication through credentials and OAuth with NextAuth. Details and blogs stored and fetched from MongoDB." 
        languages={["React", "Next.js", "JavaScript", "MongoDB", "NextAuth"]} 
        imageLink="/next-posts.png" 
        githubLink="https://github.com/Jexarx121/next-posts" 
        projectLink="https://next-posts-alpha.vercel.app/"/>
      <div className="items-center flex flex-col justify-center mb-10">
        <Title title="Archived Projects"/>
        <Separator/>
      </div>
      <div className="lg:w-[70%] md:w-[80%] sm:w-[90%] w-[100%] m-auto flex lg:flex-row flex-col gap-10 border-white border-2">
        <ArchivedProject 
          title="Krypto"
          description="Website integrated with blockchain and smart contract to exchange ethereum. App can connect to metamask and exchange cryptocurrency to other users through their addresses. Application keeps track of latest transactions." 
          languages={["React", "JavaScript", "Solidity", "Metamask"]} 
          githubLink="https://github.com/Jexarx121/Krypto" 
          projectLink=""/>
        <ArchivedProject 
          title="Duel Ascent" 
          description="Multiplayer university game project developed in a group of 6 using Phaser 3 game engine. Responsible for design of all sprites and scenes (in Figma). Contributed to battle scene with card activation and drag and drop functionality." 
          languages={["JavaScript", "Phaser", "Figma", ]} 
          githubLink="https://github.com/nickCompSci/teamProject" 
          projectLink=""/>
      </div>
      <div className="lg:w-[80%] md:w-[90%] sm:w-[95%] w-[100%] m-auto flex lg:flex-row flex-col gap-10 border-white border-2 mt-20">
        <div className="flex-1">
          <ArchivedProject 
            title="Krypto"
            description="Website integrated with blockchain and smart contract to exchange ethereum. App can connect to metamask and exchange cryptocurrency to other users through their addresses. Application keeps track of latest transactions." 
            languages={["React", "JavaScript", "Solidity", "Metamask"]} 
            githubLink="https://github.com/Jexarx121/Krypto" 
            projectLink=""/>
        </div>
        <div className="flex-1">
          <ArchivedProject 
            title="Duel Ascent" 
            description="Multiplayer university game project developed in a group of 6 using Phaser 3 game engine. Responsible for design of all sprites and scenes (in Figma). Contributed to battle scene with card activation and drag and drop functionality." 
            languages={["JavaScript", "Phaser", "Figma"]} 
            githubLink="https://github.com/nickCompSci/teamProject" 
            projectLink=""/>
        </div>
      </div>
    </div>
  )
}

export default Project;