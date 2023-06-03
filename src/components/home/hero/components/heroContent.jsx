import Button from "@/components/Common/Button/Button"
import Social from "@/components/Common/social/Social"
import {AiOutlineMail} from "react-icons/ai"
import {BsDownload} from "react-icons/bs"
import "./heroContent.scss"
export default function HeroContent() {
  return (
    <div className="flex w-1/2 justify-center items-center text-light flex-col ">
    <div className="w-auto lg:w-1/2 leading-6 justify-center items-center text-center lg:text-left xl:text-left gap-10">
    <h1 className=" font-semibold">hey!</h1>
      <h1 className=" font-extrabold text-4xl"> I&apos;m <span className=" bg-text-yellow bg-clip-text fill-transparent">Abhishek</span> </h1>
      <h1 className="font-extrabold text-5xl bg-text-theme">web developer</h1>
      <p className=" text-gray-400">passion for making better world</p>
      <div className="social text-lg flex flex-row my-6 gap-4 justify-center items-center lg:justify-start">
      <div>follow me</div>
      <Social gap="3" fontSize="2xl" />
      </div>
      <div className="flex gap-8 mt-16  justify-center items-center lg:justify-start">
<Button>
<AiOutlineMail/>
Mail
</Button>
<Button outline >
<BsDownload/>
Resume
</Button>
      </div>
    </div>
     

    </div>

  )
  }