"use client"
import { motion  } from "framer-motion"

import Image from "next/image"
import "./feature.scss"



export default function FeatureComponents({pic,title,description,directionChange}) {
  


  const offscreen= directionChange===false ? {
    x: -200,
  }:
  {x:200} ;
  const onscreen =  {
          x: 0,
      
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        delay:0.05
      }
    }
  

  return (
  <motion.div 
     initial={offscreen}
      whileInView={onscreen}
     
  className=' py-10 rounded-3xl   flex flex-col gap-28 justify-center items-center  lg:flex-row  xl:flex-row  '>

<motion.div className= {`curvy-boarder bg-dark3 col ${directionChange&&`lg:order-2 xl:order-2`} `}

animate={{
      borderRadius: ["30% 70% 44% 56% / 43% 54% 46% 57%",
      "81% 19% 73% 27% / 29% 61% 39% 71%  ",
      "30% 70% 70% 30% / 30% 41% 59% 70%  ",
      "63% 37% 60% 40% / 68% 80% 20% 32% ",
      "30% 70% 44% 56% / 43% 54% 46% 57%",

      ]
      
    }}
    transition={{
      duration: 5,
      ease: "easeInOut",
    
      repeat: Infinity,
      repeatDelay: 0
    }}
   
> 
<Image 
  src={pic}
  width={400}
  alt="collaborative"
/>
 </motion.div>
<div className= {`  text-light flex flex-col gap-5 ${ directionChange&&`lg:-order-2  xl:-order-2`} `}>
<h1 className=" font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-violet-500 ">{title}</h1>
<p className="break-words	 lg:w-72 xl:w-72  text-md font-md"> {description}</p>
</div>
  </motion.div>
  )
}
