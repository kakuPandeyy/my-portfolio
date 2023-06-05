'use client';

import Link from "next/link"
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import styled from "styled-components";

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export default function Navigation({href,name}) {
  
 const currentPage = usePathname()
  return (
    <div>
    <motion.div variants={itemVariants}>
<Nav  underline={currentPage===href?"0":"100"} >
   <Link href={href} className=  {`  nav-link `} > <h2>{name}</h2> <div className=" h-[1.7px] w-full bg-white nav-item"></div> </Link>
</Nav>

    </motion.div>
   
 </div>
  )
}

const Nav = styled.div`

.nav-item{
   clip-path: ${props => `inset( 0% ${props.underline}% 0% 0% );` }; 
}
.nav-link:hover > .nav-item {
    
    animation: underling infinite;
    animation-duration: 1s;
   
   
  }
@keyframes underling {
    from{clip-path: inset( 0% 100% 0% 0% );}
    to{clip-path: inset( 0% 0% 0% 0% );}
}
`