import Image from "next/image"
import {BsCodeSlash} from "react-icons/bs"
import {BiLinkExternal} from  "react-icons/bi"
import chatSS from "../../assets/projectSS.png"
import keeperSS from "../../assets/keeperSS.png"
import Crd from "../../assets/CRADSS.png"
import Link from "next/link"
function ProjectCard({src,code,link}){
  return(
<div className=" flex flex-col w-72 h-72 rounded-[4rem] overflow-hidden ">
  <div className=" h-3/4 p-2  ">
  <Image
  src={src}
 className=" h-full w-full "
  alt="ss"
   />
  </div>
 <div className="h-1/4 flex gap-0 flex-row text-light bg-dark3">
  <Link target="_blank"   href={link} className=" w-1/2  font-semibold flex flex-col justify-center items-center hover:text-gro2 "><BiLinkExternal/> Link</Link>
  <Link target="_blank" href={code} className=" w-1/2 font-semibold flex flex-col justify-center items-center hover:text-gro2 "> <BsCodeSlash/> code </Link>

 </div>
 </div>
  )
} 

 export default function page() {
   return (
    <main>

    <div className=" min-h-screen w-full flex justify-center items-center text-center  relative  ">
    <h1 className=" text-2xl font-bold top-[150px] text-light absolute "> Projects </h1>
 <div className=" bg-dark  grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3 gap-20 ">  
 <ProjectCard src ={chatSS}  code="https://github.com/kakuPandeyy/chat-application" link="https://chat0-kaku.netlify.app"/>
 <ProjectCard src ={keeperSS} code="https://github.com/kakuPandeyy/keepers-app"  link="https://keepers-kaku.netlify.app/" />
 <ProjectCard src ={Crd} code=""  link="https://dead-blue-goat-hat.cyclic.app/" />
 </div>
    </div>
    </main>
   )
 }
 