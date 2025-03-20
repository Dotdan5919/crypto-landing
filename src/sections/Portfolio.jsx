import React from 'react'
import Btngrad2 from '../components/Btngrad2'
import ai_image_3 from '../ImageAssets/ai_image_3.png'
import {motion} from 'motion/react'


const Portfolio = () => {
  return (
    <div className='relative flex  justify-start gap-3  bg-gradient-to-r from-blue-500  to-purple-400 mx-auto  w-2/3 rounded-2xl p-7 my-14  mt-24 pt-12'>
    <div className="flex w-3/4 flex-col gap-2 "> 
    <motion.h1 initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}} className="font-sans text-white text-2xl">Create your NFT Portfolio</motion.h1>
      <motion.p initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}} className='text-white'> Get updated with news, tips and tricks</motion.p>

      <Btngrad2 txt="Join Now" />
      </div>
      <div className="flex  w-[50%] relative ">

      <div className="flex absolute"> 

      <div className="   -left-16 rounded-full w-52 h-52 bg-gradient-to-r from-orange-700 to-yellow-300 p-4">
    
      </div>
      <div className="  -left-24 top-2 rounded-full w-4 h-4 border-2 border-gray-200 z-50"></div>
      <div className=" absolute top-32 rounded-full w-24 h-24 border-2 border-gray-200 z-50"></div>
      <motion.img initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:.6}}}  src={ai_image_3} alt='Ai Image' className='absolute   w-64  -top-20 -left-26 z-30'/>
      </div>
 
    </div>
      </div>
  )
}

export default Portfolio
