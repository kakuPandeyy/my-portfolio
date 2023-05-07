"use client"
import { motion } from "framer-motion"
export default function Logo() {
  return (
    <>
    <motion.div
    className=" bg-background-theme w-14 h-14 rounded-full absolute -z-10 blur-sm "
    animate={{
      scale: [1, 1.3, 1.4, 1.3, 1,2,1.6],
      rotate: [0, 0, 180, 180,0,180,90],
      filter:["blur(5px)","blur(5px)","blur(5px)","blur(5px)","blur(5px)","blur(100px)","blur(5px)"],
      borderRadius: ["100%","3rem","4rem","3rem","100%","100%","100%"]
      
    }}
    transition={{
      duration: 7,
      ease: "easeInOut",
      times: [0, 0.2, 0.4,0.5, 0.6,0.7, 1],
      repeat: Infinity,
      repeatDelay: 1
    }}
  />
    <div className="  flex justify-center items-center w-14 h-14 text-xl bg-dark font-bold rounded-full text-light " >AB</div>
    </>
  )
}
