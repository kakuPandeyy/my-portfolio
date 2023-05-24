"use client"


import "./projectCount.scss"
import AmaitedCounter from "@/components/Common/amaitedCounter/AmaitedCounter";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import workPro from "../../../assets/workholic.png"
export default function ProjectCount() {


   const offscreen=  {
       opacity: 0, scale: 0, x:-100 
    }
    const onscreen =  {
      duration: 0.7 ,
      opacity:1,
      x:0,
      scale:1,
     
        
        transition: {
         duration: 0.7 ,
         delay:0.3
        }
      }
      const offscreen1=  {
         opacity: 0, y:100 
      }
      const onscreen1 =  {
        duration: 0.7 ,
        opacity: 1,
         y:0, 
          
          transition: {
           duration: 0.7 ,
           delay:0.3
          }
        }
    
  return (
 
   <div className=' flex justify-center items-center w-full pt-36 pb-9 md:pb-5 px-5 ' >
   
<div className='project-show-off  flex lg:flex-row xl:flex-row flex-col bg-dark3 ' >
 
   <motion.div 
        initial={offscreen}
      whileInView={onscreen}
    >
 <Image
       src={workPro}
       alt="pic of working person"
   />
      </motion.div>

 

   <div  className='w-full lg:py-10 lg:px-12 px-8 py-14 bg-dark3 rounded-3xl'>
   <div  className=' text-5xl text-light flex gap-5 flex-col'>
   <div>
   <AmaitedCounter end={3} duration={1} />
   <span className=' text-gro '>+</span>
   </div>
     
      <motion.div 
          initial={offscreen1}
          whileInView={onscreen1}
   > 
    <h1 className=' text-2xl'>Completed projects</h1>
   <h1 className=' bg-clip-text text-transparent bg-gradient-to-r  from-blue to-violet-500 text-4xl font-bold'>Glad to help you!</h1>
    </motion.div> 
   
  
  
   </div>
 
   </div>


   
</div>
   </div>
  )
}
