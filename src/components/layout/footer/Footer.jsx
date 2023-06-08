
import Social from "@/components/Common/social/Social"
export default function Footer() {
  return (
    <div className=" w-full  bg-black text-light px-10 py-12 flex justify-between items-center flex-col lg:flex-row gap-5">
      
   <h1>Designed and Developed by Abhishek Pandey </h1>
   <h1>&#169; 2023 - 2025  Abhishek Pandey. All rights reserved. </h1>
        <Social gap="8" fontSize="3xl" className="  text-lg"/>
      
    </div>
  )
}
