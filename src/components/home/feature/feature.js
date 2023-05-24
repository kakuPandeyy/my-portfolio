
import Collaborative from "../../../assets/Collaborative.png"
import multitasking from "../../../assets/multitasking.png"
 import selfMotivated from "../../../assets/selfMotivated.png"
import FeatureComponents from "./components/Feature"

export default function Feature() {
  return (
    <div className=' w-full px-4 lg:px-28 xl:px-28 py-8 text-center mt-9  -z-40'>
    <h1 className=" font-semibold text-2xl text-lime-50">why me <span className='text-teal-400 '>?</span></h1>
      <div className=" my-10  ">
    
     <FeatureComponents pic={multitasking} title="Workaholic"  description="I don't wait for deadlines, deadlines wait for me." directionChange= {false} />
     <FeatureComponents pic={Collaborative} title="Collaborative" description="Teamwork makes the dream work. Collaboration first, then work." directionChange= {true} />
     <FeatureComponents pic={selfMotivated} title="Self Motivated" description="I put myself into action to achieve my goals." directionChange={false} />
    
      </div>
    </div>
  )
}
