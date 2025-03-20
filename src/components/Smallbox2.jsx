import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import {motion} from 'motion/react'

const Smallbox2 = ({smalltext,largetext,classes}) => {

const motionVariant={

  hidden:{
    opacity:0,
    y:-50


  },

  visible:{

    opacity:1,
    y:0,
    transition:{type:'spring',
                duration:.6,
                delay:.2,
              stiffness:160,
            
            }


  }
  





}



  return (
    <motion.div variants={motionVariant} initial="hidden" whileInView="visible" className={'bg-white  px-[16px] py-[24px]  absolute  rounded-xl flex gap-[16px] items-center shadow-2xl ' + '' + classes}>

    <div className="rounded-full p-2  w-12  h-12  flex justify-center items-center text-[20px]  bg-gradient-to-r from-slate-300 to-slate-100 ">
    
    </div>
    <div>
    <h1 className='font-sans text-xs'>{largetext}</h1>
    <p className=' text-[12px]'>{smalltext}</p>
    <div></div>
    </div>
     
    </motion.div>
  )
}

export default Smallbox2
