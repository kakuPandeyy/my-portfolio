"use client"

import { motion } from "framer-motion"
import Coin from "../../../assets/coin.png"
 import Image from "next/image"
import techData from "./techData"
import { useState,useEffect } from "react"
 const FactcSkillData = ({int,end}) => { 
  return (
    <div  className={ `flex flex-row gap-12 lg:gap-24 md:gap-24 ` }>
    { techData.slice(int,end).map((item,i)=>{
      return(
        <TechCard key={i} imageUrl={item.imageUrl} title={item.techName} bg={item.bg} />
      )
   
    })}
   
</div>
  )
 }

const TechCard = (props)=>{
  return(
    <div   className={` hover-css flex flex-col h-12 w-12  ${props.bg===true&&`bg-white rounded-3xl`}`}>
  <Image 
  src={props.imageUrl}
    height="100"
    width="100"
alt={props.title}
  />
   <p className=" text-white hidden" > {props.title}</p>
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
    <motion.div className=" text-light w-full mt-14 flex justify-center items-center flex-col gap-0" >
    <h1 className=" text-light  text-6xl font-extrabold mx-14"> skills</h1>
<motion.div className=" triangle sm:w-[50rem]   flex justify-center items-center relative "
initial={{
  clipPath: "polygon(50% 100%,50% 100%,50% 100%)",
  width:"1px",
  height:"0px",


}}
transition={{
  duration: 1.5,
 delay:0.2,
 times:[0,1]

}}
 whileInView={{
 width:["1rem","65rem"],
  clipPath: "polygon(100% 0%,50% 100%,1% 0%)",
  height:["3rem","50rem"],

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
 <Image 
  src={Coin}
  height={100}
  width={100}
  alt="skill"
  
 />

    
    </motion.div>
  )
}
