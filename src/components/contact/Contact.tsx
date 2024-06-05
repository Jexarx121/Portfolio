import Separator from "../helpers/separator/Separator";
import Title from "../helpers/title/title";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="lg:w-[80%] sm:w-[90%] w-[100%] m-auto sm:mb-60 mb-48 sm:p-0 px-8" id="contact">
      <Title title="Connect"/>
      <Separator/>
      <p className="xl:w-[50%] lg:w-[60%] md:w-[75%] sm:w-[90%] w-[100%] mb-5 text-[20px]">
        If you want to get in touch, my inbox is always open. Feel free to ask any questions and I&#39;ll try my best to get back to you!
      </p>
      <Link className="text-[20px] text-white border-[#2E9CCA] border-2 px-5 py-2 rounded-md hover:bg-[#2E9CCA] hover:font-bold transition duration-300 cursor-pointer" href="mailto:zjchen402@email.com">Message</Link>
    </div>
  )
}

export default Contact;