"use client"
import {GiPlatform} from "react-icons/gi"
import { motion } from "framer-motion"
 import Image from "next/image"
import techData from "./techData"
import { useState,useEffect } from "react"
 const FactcSkillData = ({int,end}) => { 
  return (
    <div  className={ `flex flex-row gap-12 lg:gap-24 md:gap-24 ` }>
    { techData.slice(int,end).map((item,i)=>{
      return(
        <TechCard key={i} imageUrl={item.imageUrl} title={item.title} bg={item.bg} />
      )
   
    })}
   
</div>
  )
 }

const TechCard = (props)=>{
  return(
    <div   className={` flex flex-col h-12 w-12  ${props.bg===true&&`bg-white rounded-3xl`}`}>
  <Image 
  src={props.imageUrl}
    height="100"
    width="100"
alt={props.title}
  />
   <h3 className=" text-white" >{props.title}</h3>
   </div>
  )
   
}





export default function Skill() {
  const [width, setWidth] = useState(globalThis.window?.innerWidth);
  const handleResize = () => setWidth(globalThis.window?.innerWidth);
 
  useEffect(() => {
   
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <motion.div className=" text-light w-full  flex justify-center items-center flex-col gap-0" >
<motion.div className=" triangle sm:w-[50rem]   flex justify-center items-center relative "
initial={{
  clipPath: "polygon(50% 100%,50% 100%,50% 100%)",
  width:"1px",
  height:"0px",
  opacity:"0",

}}
transition={{
  duration: 1.5,
 delay:0.2,
 times:[0,0.3,1]

}}
 whileInView={{
 width:["1rem","1rem","65rem"],
  clipPath: "polygon(100% 0%,50% 100%,1% 0%)",
  height:["3rem","50rem","50rem"],
  opacity:"1"
}}>

<div className="  flex flex-col justify-center items-center md:28 lg:28  gap-20">
{
  width<=600?(
    <>
    <FactcSkillData int = {14} end={16}/>
    <FactcSkillData int = {10} end={14}/>
    </>
   
  )
  :
  (<FactcSkillData int = {10} end={16}/>)
}

<FactcSkillData int = {6} end={10}/>
<FactcSkillData int = {3} end={6}/>
<FactcSkillData int = {1} end={3}/>
<FactcSkillData int = {0} end={1}/>
</div>


</motion.div>
  <GiPlatform size={80} /> 
    
    </motion.div>
  )
}
