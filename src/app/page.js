
  import Hero from "@/components/home/hero/hero"

 import dynamic from "next/dynamic"
 const DynamicFeature = dynamic(() => import('@/components/home/feature/feature'));
 const DynamicProjectCount = dynamic(() => import('@/components/home/ProjectCount/ProjectCount'));
export default function Home() {
  return (
  <main className=" overflow-hidden">
  <Hero/>
<DynamicProjectCount/>
<DynamicFeature/>

  </main>
  )
}
