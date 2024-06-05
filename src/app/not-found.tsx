import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h2 className="text-[200px] font-bold text-[#2E9CCA]">404</h2>
      <p className="text-[40px] my-10">Whoops, this page doesn't exist</p>
      <Link href="/" className="text-white text-[20px] border-[#2E9CCA] border-2 px-5 py-2 rounded-md mx-10 hover:bg-[#2E9CCA] hover:font-bold transition duration-300">
        Return Home
      </Link>
    </div>
  )
}

export default NotFound;