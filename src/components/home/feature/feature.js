import FeatureComponents from "./components/Feature"

export default function Feature() {
  return (
    <div className=' w-full px-4 lg:px-28 xl:px-28 py-16 text-center'>
    <h1 className=" font-semibold text-2xl text-lime-50">why me <span className='text-teal-400 '>?</span></h1>
      <div className=" my-32  ">
     <FeatureComponents/>
    
      </div>
    </div>
  )
}
