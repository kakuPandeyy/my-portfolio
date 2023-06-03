export default function Loading() {
  return (
    <div className='flex flex-col animate-pulse md:flex-row lg:flex-row xl:flex-row min-h-screen justify-center items-center pt-24 gap-10 lg:gap-0 xl:gap-0' >
    <div className="flex w-1/2   justify-center items-center  lg:order-1 xl:order-1  ">
      <div className=" h-60 w-60 rounded-3xl  bg-slate-700"></div>
    </div>
     <div className="flex w-1/2 justify-center items-center  flex-col ">
    <div className="w-auto lg:w-1/2  justify-center items-center gap-10">
    <div className="  bg-slate-700 h-4 w-12 mt-10 rounded-lg"></div>
      <div className="  bg-slate-700 h-8 w-36 mt-10 rounded-lg"> </div>
      <div className=" bg-slate-700  h-8 w-36 mt-10 rounded-lg"></div>
      <div className="   bg-slate-700 h-4 mt-10 rounded-lg"></div>
   

    </div>
    </div>
    </div>
  )  
  
}