import Image from "next/image"
import Div from "@/components/Common/div/Div"
import hero2 from "../../../assets/heo2.png"
import Social from "@/components/Common/social/Social"
export default function Intro() {
  return (
    <div className=" w-full  flex flex-col lg:flex-row xl:flex-row text-center lg:text-left  justify-center items-center px-6 lg:px-20 lg:justify-between gap-12 py-20 relative" >
 <Image src={hero2} height={300} width={250} alt="hero"/>
 <div className=' max-w-4xl flex justify-center items-center py-12 relative  lg:-order-1 xl:-order-1'>
     <div className='  max-w-6xl px-8 text-lg font-medium leading-8 lg:pt-32 '>
    
         <h1 className="font-extrabold text-5xl  text-red-300 ">Namaste World</h1>
           
        
    
          <h2 className=' text-gray-400'>   Hi there! Thanks for visiting my portfolio.</h2>
     <p className=' text-gray-400'>

I&apos;m
 <span  className='bg-clip-text text-transparent  bg-background-noon2 text-lg font-semibold ' > Abhishek Pandey</span> from 
 <span className="bg-clip-text text-transparent  bg-background-noon2 text-lg font-semibold  "> Delhi,India</span>
 , a <span className='bg-clip-text text-transparent  bg-background-noon2 text-lg font-semibold '> Full Stack Developer</span> , and a passionate learner. I am pursuing my 
<span className='bg-clip-text text-transparent bg-background-noon2 text-lg font-semibold     '> bachelor In Computer Science  </span> from  Institute of Technology and Science. I have worked on a wide range of technologies and have worked on projects ranging from small to large scale. I am a self-motivated and self-driven individual who is always looking for new challenges and opportunities. I love participating in hackathons and engaging in communities.
     
        </p>
        <div className=" text-light text-xl mt-16 flex gap-4 justify-center items-center lg:justify-normal lg:items-start flex-col ">
 <h2 className=" text-light">social</h2>
 <Social className=" text-xl gap-4"/>
 </div>
     </div>
   
     </div>
  <hr className=" mb-6  left-[40%] w-1/3 absolute justify-self-center self-center bottom-0  " />
  </div>
  )
}
{/* <div className=" lg:mt-24 max-w-sm  lg:-order-1 flex gap-12 lg:gap-8 flex-col">
<div>
<h1 className="text-light text-4xl font-bold "> Abhishek Pandey</h1>
  <p className=" text-zinc-400 text-md font-semibold">Full Stack Developer, mobile app Developer, and a passionate learner.</p>
</div>
 <div className=" text-light text-lg">
Email Me
<div className=" bg-background-green2  hover:bg-dark  duration-300 transition-all  px-4  w-48 rounded-2xl"> <h2 className=" text-light"> xxx@gmai.com</h2></div>
 </div>
 <div className=" grid grid-cols-3">
 <Div background="bg-background-blue" contant="Work" className=" hover:bg-background-blue" />
<Div background="bg-background-green" contant="Contact" className="  hover:bg-background-green"/>
<Div background="bg-background-brown" contant="profile" className="hover:bg-background-brown" />
 </div>

 
</div>  */}