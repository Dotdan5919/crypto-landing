import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import {motion} from 'motion/react'

const Smallbox1 = ({smalltext,largetext,classes}) => {
  return (
    <motion.div  initial={{x:-10}}  whileInView={{x:0,transition:{type:'spring',duration:.3,delay:.2,stiffness:120}}} className={'bg-white  px-[16px] py-[24px]  absolute  rounded-xl flex gap-[16px] items-center shadow-2xl ' + '' + classes}>

    <div className="rounded-full p-2  w-12  h-12  flex justify-center items-center text-[20px] text-white bg-gradient-to-r from-my-blue to-my-offblue ">
    <FaEthereum/>
    </div>
    <div>
    
    <p className=' text-[12px]'>{smalltext}</p>
    <h1 className='font-sans text-sm'>{largetext}</h1>
    </div>
      
    </motion.div>
  )
}

export default Smallbox1
