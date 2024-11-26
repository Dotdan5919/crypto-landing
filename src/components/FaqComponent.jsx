import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const FaqComponent = ({number,txt, description}) => {


    const[active, setActive]=useState(false);

  return (
    <div className='py-3  flex flex-col items-center justify-center [ bg-gradient-to-b from-white/20 to-white/20 ]
[ border-[1px] border-solid border-white border-opacity-40 ] w-full  rounded-2xl h-fit'>
      
   <div className="flex justify-around p-5 items-center gap-10"> <h1 className="font-sans">{number}</h1>
      <h1 className="font-sans">{txt}</h1>
     

      <FaPlus onClick={()=>{setActive(!active)}} className={'hover:scale-110 transition-all duration-700  ease-out cursor-pointer  ' + '' + (active && 'rotate-45') }/>
      </div>
{active &&(<p className='text-sm  w-80 '>{description}</p>
)}
      
    </div>
  )
}

export default FaqComponent
