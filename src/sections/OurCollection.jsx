import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import Imgcarousel from '../components/Imgcarousel'
import {motion} from 'motion/react'
const OurCollection = () => {
  return (
    <div id="collection" className='flex flex-col gap-[32px] items-center justify-center z-50  mt-24'>

<Uniquetitle txt='Our Collection' />
    <motion.h1 initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}} className='font-sans text-white text-[32px]'>Our Collection</motion.h1>
      <Imgcarousel/>





    </div>
  )
}

export default OurCollection
