"use client"

 import { motion ,useScroll } from "framer-motion"
import React,{useRef} from "react"


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
            <circle cx="35" cy="50" r="30" className="  fill-none " />
            <motion.circle
              cx="35"
              cy="50"
              r="20"
              pathLength="1"
              className=" stroke-[5px] fill-dark2"
              style={{ pathLength: scrollYProgress }}
            />
             <circle cx="35" cy="50" r="10" pathLength="1" className=" animate-pulse fill-gro2 " />
          </svg>
        </figure>
      </div>
    </>
  );
}





const ExpericenCard = ({jobRole,company,timeline,description})=>{


  return(
<>


    <div  className=" text-left text-light  font-bold md:text-md flex flex-col gap-2 text-sm  sm:w-4/5  lg:w-[700px] " >
    <Item className="  "/>
    <h1  className=" capitalize  text-2xl font-bold"> {jobRole}  <span className=" text-gro2">@{company}</span> </h1>
    <h2> {timeline}</h2> 
  <p>{description}</p>

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
    
  

    <h1 className=" text-light  text-6xl font-extrabold mx-8"> experience</h1>
   
 <motion.div ref={ref} style={{ scaleY: scrollYProgress }} className=" bg-gro2 absolute mx-5 w-1 h-4/5 left-[0.25rem] md:left-[5rem] lg:left[10rem] top-[160px] origin-top "/>
 
 
  <ExpericenCard jobRole="Web devloper " company="Cool pvt lim" timeline="2020-2021" description="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." />
    <ExpericenCard jobRole=" web-designer " company=" firefood " timeline="present " description=" Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component. " />
    <ExpericenCard jobRole=" founder/CTO " company=" apka-machanic " timeline="present " description="  its my start-up which provide the machnical support to household like AC-Refrigater repair/severing  I am working in at tech-lead with my team we are devoping scalable and optimize web/moblie app for our company  " />

   
 
   
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