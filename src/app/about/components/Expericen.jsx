"use client"

 import { motion ,useScroll } from "framer-motion"
import React,{useRef} from "react"
import {BiLinkExternal} from  "react-icons/bi"



const techStacksOfChatApp = [
              "React",
              "Node.js",
              "Express",
              "Socket.IO",
              "MongoDB",
              "Cloudinary",
              "TailwindCSS",
              "bcrypt",
            ]



function Item({className}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <>
      <div ref={ref}  className=" absolute left-[0.25rem] md:left-[5rem] lg:left[10rem] " >
        <figure className= {`${className}  stroke-gro2 `} >
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100"  >
            <circle cx="35" cy="50" r="30" className="  fill-dark " />
            <motion.circle
              cx="35"
              cy="50"
              r="20"
              pathLength="1"
              className=" stroke-[5px] fill-dark"
              style={{ pathLength: scrollYProgress }}
            />
             <circle cx="35" cy="50" r="10" pathLength="1" className=" animate-pulse fill-gro2 " />
          </svg>
        </figure>
      </div>
    </>
  );
}





const ExpericenCard = ({name,subDescription,techStacks,demoLink,githubLink})=>{

  console.log(techStacks)

  return(
<>


    <div  className=" text-left text-light  font-bold md:text-md flex flex-col gap-2 text-sm  sm:w-4/5  lg:w-[700px] " >
    <Item className="  "/>
    <h1 className=" text-blue text-lg"> <a href={demoLink} className="flex flex-row gap-1 cursor-pointer" ><BiLinkExternal/>{name}</a> </h1> 
   <h1 className=" text-lg  text-gray-300 " > {subDescription} </h1>
     <h1 className=" text-green-400 text-xl mt-3">Tech Stacks </h1>
      <div className="flex flex-wrap gap-2">
            { techStacks &&techStacks.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-800 cursor-pointer text-gray-700 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}

          </div>

      <div className="flex gap-4 mt-5">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="  border-gray-700  border-2 px-5 py-2 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition "
            >
              🚀 Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-xl shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              💻 GitHub
            </a>
          )}
        </div>
    </div>
  
  </>
 
  

  )
  
}


export default function Expericen() {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
   {
     target: ref,
     offset: ["start end", "center start"]
   }
  )
  return (
    <>
    <div className=" flex flex-col gap-32 p-16 justify-center items-center text-center relative ">
    
  

    <h1 className=" text-gro2  text-3xl font-extrabold mx-8">My Projects & There Tech Stacks</h1>
   
 <motion.div ref={ref} style={{ scaleY: scrollYProgress }} className=" bg-gro2 absolute mx-5 w-1 h-4/5 left-[0.25rem] md:left-[5rem] lg:left[10rem] top-[160px] origin-top "/>
 
 
  <ExpericenCard   name=" Chat Application " subDescription="Its ONE TO ONE real time chating app based on Socket.io " demoLink="https://chat0-kaku.netlify.app" githubLink="https://github.com/kakuPandeyy/chat-application" techStacks={[
              "React",
              "Node.js",
              "Express",
              "Socket.IO",
              "MongoDB",
              "Cloudinary",
              "style components",
              "bcrypt",
            ]}/>
    <ExpericenCard  demoLink="https://looklike-nu.vercel.app/" githubLink="https://github.com/kakuPandeyy/looklike"  name=" looklike " subDescription=" Its short video watching and sharing platform like instagram reels" techStacks={[
              "Next js",
              "Redux toolkit",
              "Next-Auth",
              "O-AUTH",
              "JWT",
              "Cloudinary",
              "MongoDB",
              "TailwindCSS",
              
            ]}/>
    <ExpericenCard name=" Video Call App "  demoLink="https://web-video-call.netlify.app" githubLink="https://github.com/kakuPandeyy/videoCall-client"  subDescription="Its ONE TO ONE video calling or live streaming platform  with screen sharing based on WEBrtc" techStacks={[
              "Web Rtc",
              "React",
              "Node.js",
              "Express",
              "Socket.IO",
              "twoilo",
            ]}/>

   
 
   
    </div>
    </>
  )
}

{/* <div className=" flex flex-col gap-32 p-16 justify-center items-center text-center ">
<h1 className=" text-light  text-6xl font-extrabold mx-14"> education</h1>
<ExpericenCard jobRole=" class-10 " company="RSBV-vinod nagar" timeline="2018-2022" description=" 86%" />
<ExpericenCard jobRole=" class-12  " company=" RSBV-vinod nagar " timeline="2021-2022" description=" 82%" />
<ExpericenCard jobRole=" Bachelor Of Science In Computer " company=" ITS " timeline="present" description="i have deep interste in new technology and computers which incourage me to pursuing this   " />
</div> */}