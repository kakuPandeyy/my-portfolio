"use client";
import { useEffect,useState } from "react";
import Navigation from "./component/Navigation"
import Logo from "./component/Logo.jsx"
import { MenuToggle } from "@/components/Common/toggleMenu/MenuToggle";
import { motion ,useCycle } from "framer-motion";



const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const sidebar = {
  open:  {
  
    clipPath: "circle(550px  at  90% 5%)",
    transition: {
      type: "spring",
      duration: 4,
  
      restDelta: 2,
      stiffness: 400,
   
    }
  },
  closed: {
    clipPath: "circle(40px  at 90% 5%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 200,
   
    }
  }
};

function NavBar() {

  const [isOpen, toggleOpen] = useCycle(true, false);
  const [isWindowAvailable, setIsWindowAvailable] = useState(false);
  const [width, setWidth] = useState(globalThis.window?.innerWidth);
  const handleResize = () => setWidth(globalThis.window?.innerWidth);
 
  useEffect(() => {
   
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
useEffect(()=>{setIsWindowAvailable(true)},[])


if (!isWindowAvailable) {
  return null
} else {
  return (

    
    <div className=" backdrop-blur-sm bg-transparent flex flex-row justify-between items-center w-full px-10 lg:px-20 md:px-10 py-5 fixed top-0 border-b-1 z-10 ">
         <Logo/>
  
         {width<770? 
         <motion.nav className="background " initial={  {clipPath: "circle(40px  at 90% 7%)"} } animate={isOpen? "closed" : "open"} variants={  sidebar} >
      
         <motion.div onClick={()=>toggleOpen()}  className={`btn `}   >
         
         <MenuToggle width="30" height="30"/>

         </motion.div>
          <motion.div variants={navVariants}  className= {`flex flex-col gap-6 text-5xl font-semibold text-light absolute top-1/4 right-1/4 `}>
         <Navigation onClick={()=>toggleOpen(false)}  href="/" name="Home" />
         <Navigation onClick={()=>toggleOpen(false)} href="/about" name="About"/>
         <Navigation onClick={()=>toggleOpen(false)} href="/projects" name="projects"/>
          </motion.div>


         </motion.nav>
        :
         <nav className= {`flex flex-row lg:gap-20  text-lg font-semibold md:gap-6 text-light `}>
         <Navigation href="/" name="Home"/>
         <Navigation href="/about" name="About"/>
         <Navigation href="/projects" name="projects"/>

          </nav>
          }
         
    </div>

  )
}
 
}

export default NavBar