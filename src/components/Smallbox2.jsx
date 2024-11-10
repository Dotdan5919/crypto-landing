import React from 'react'
import { FaEthereum } from 'react-icons/fa'

const Smallbox2 = ({smalltext,largetext,classes}) => {
  return (
    <div className={'bg-white  px-[16px] py-[24px]  absolute  rounded-xl flex gap-[16px] items-center shadow-2xl ' + '' + classes}>

    <div className="rounded-full p-2  w-12  h-12  flex justify-center items-center text-[20px]  bg-gradient-to-r from-slate-300 to-slate-100 ">
    
    </div>
    <div>
    <h1 className='font-sans text-xs'>{largetext}</h1>
    <p className=' text-[12px]'>{smalltext}</p>
    
    </div>
      
    </div>
  )
}

export default Smallbox2
