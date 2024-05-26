import Separator from "../helpers/separator/Separator"
import Title from "../helpers/title/title"
import ArchivedProject from "./ArchivedProject";
import FeaturedProject from "./FeaturedProject";

const Project = () => {
  return (
    <div className="w-[80%] m-auto my-24">
      <div className="mb-8">
        <Title title="Personal Ventures"/>
        <Separator/>
        <p className="w-[60%] text-[20px]">
          I enjoy working on projects as an outlet for my creativity. As well as that, it provides a fun way to learn new technologies or improve on my current skills. Below are some of my favourite ones.
        </p>
      </div>
      <FeaturedProject title="Trace" description="Website for volunteers to record their efforts and receive redeemable  credits as a reward. They can redeem this credits in future to request assistance of their own. Implemented custodial wallets with psuedo meta-transactions." languages={["React", "TypeScript", "Supabase", "Solidity", "Smart Contracts"]} githubLink="https://github.com/Jexarx121/Trace" imageLink="/trace.png"/>
      <FeaturedProject title="Trace" description="Website to learn Next.js and MongoDB. Allows blog post interactions through CRUD operations in admin dashboard via custom NextAPI. Implemented authentication through credentials and OAuth with NextAuth." languages={["React", "Next.js", "JavaScript", "MongoDB", "NextAuth"]} githubLink="https://github.com/Jexarx121/next-posts" imageLink="/next-posts.png"/>
      <ArchivedProject/>
    </div>
  )
}

export default Project;