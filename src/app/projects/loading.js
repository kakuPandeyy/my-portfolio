export default function Loading() {
  return (
    <div className=" min-h-screen w-full flex justify-center items-center animate-pulse  relative  ">
    <div className="  h-5 w-28 top-[150px]  absolute "> Projects </div>
 <div className=" bg-dark  grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3 gap-20 ">  

 <div className=" flex flex-col w-72 h-72 rounded-[4rem]  "> </div>
 <div className=" flex flex-col w-72 h-72 rounded-[4rem]  "> </div>
 <div className=" flex flex-col w-72 h-72 rounded-[4rem]  "> </div>
 </div>
    </div>
  )  
  
}