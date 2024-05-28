import Image from "next/image";
import Separator from "../helpers/separator/Separator";
import Title from "../helpers/title/title";

const About = () => {
  return (
    <div className="w-[80%] m-auto mb-48" id="about">
      <Title title="About"/>
      <Separator/>
      <div className="flex flex-row ">
        <div className="w-[50%] mr-10">
          <p className="my-5 text-[20px]">
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p className="my-5 text-[20px]">
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
          </p>
          <p className="my-5 text-[20px]">
            I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
          </p>
          <p className="my-5 text-[20px]">
            Here are a few technologies I've been working with recently:
          </p>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <Image src="/profile.png" alt="Self profile image" width={500} height={500} className="object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default About;