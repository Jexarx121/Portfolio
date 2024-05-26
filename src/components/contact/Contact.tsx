import Separator from "../helpers/separator/Separator";
import Title from "../helpers/title/title";

const Contact = () => {
  return (
    <div className="w-[80%] m-auto my-24">
      <Title title="Connect"/>
      <Separator/>
      <p className="w-[50%] mb-5 text-[20px]">
        If you want to get in touch, my inbox is always open. Feel free to ask any questions and I'll try my best to get back to you!
      </p>
      <button className="text-[20px] text-white bg-[#2E9CCA] px-5 py-2 rounded-md">Message</button>
    </div>
  )
}

export default Contact;