import React from 'react'
import {FaGithub} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import { RiTwitterXLine } from "react-icons/ri";
import Link from 'next/link'
export default function Social({gap,fontSize,className}) {
  return (
    <div className= {` flex ${className} gap-${gap} text-${fontSize} `}>
<Link href="https://github.com/kakuPandeyy/" > <FaGithub className=" hover:text-black hover:bg-white rounded-md hover:cursor-pointer"/></Link>
<Link href="https://www.linkedin.com/in/abhishek-pandey-49375825a/" >   <AiFillLinkedin className=" hover:text-blue3 hover:bg-white rounded-md  hover:cursor-pointer" /> </Link>
<Link href="https://google.com" >  <RiTwitterXLine className=" hover:text-blue text-white rounded-md hover:cursor-pointer  hover:bg-black " /> </Link>
   
      
       
    </div>
  )
}
