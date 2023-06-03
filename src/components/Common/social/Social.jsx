import React from 'react'
import {FaGithub} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
export default function Social({gap,fontSize,className}) {
  return (
    <div className= {` flex ${className} gap-${gap} text-${fontSize} `}>
    <FaGithub className=" hover:text-black hover:bg-white rounded-md hover:cursor-pointer"/>
        <AiFillLinkedin className=" hover:text-blue3 hover:bg-white rounded-md  hover:cursor-pointer" />
        <GrInstagram className=" hover:text-orange-300 hover:cursor-pointer" />
    </div>
  )
}
