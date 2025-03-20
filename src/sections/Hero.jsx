import React from 'react'
import Navigation from '../components/Navigation'
import Btngrad from '../components/Btngrad'
import LeftSideHero from '../components/LeftSideHero'
import RightSideHero from '../components/RightSideHero'
import blueblur from '../ImageAssets/blueblur.png'
import lines from '../ImageAssets/lines.png'


const Hero = () => {
  return (
    <div id="home" className='w-full    flex gap-[48px] flex-col relative inset-0 z-50 '>

    <Navigation/>


    <div className='flex w-full  lg:flex-row gap-[40px] flex-col justify-between px-[32px] py-[56px]  h-auto '>
    
    <LeftSideHero/>
    <RightSideHero/>
   
    
    </div>

      
    <img src={blueblur} className='absolute  -top-80  left-80 z-0' />
    <img src={lines} className='absolute  w-[300px] -right-40 top-40' />
    <img src={lines} className='absolute  w-[300px] -right-32  top-48' />

    </div>
  )
}

export default Hero
