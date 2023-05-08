import React from 'react'
import HeroPic from './components/HeroPic'
import HeroContent from './components/heroContent'
export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen justify-center items-center pt-24 gap-10 lg:gap-0 xl:gap-0' >
      <HeroPic/>
      <HeroContent/>
    
    </div>
  )
}
