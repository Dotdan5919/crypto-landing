import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const FaqComponent = ({number,txt, description,extraClass}) => {


    const[active, setActive]=useState(false);

  return (
    <div className={'p-3 flex flex-col items-between  bg-gradient-to-b from-white/20 to-white/20 border-2 border-solid border-white border-opacity-40  w-full  rounded-2xl h-fit my-5 ' + (active && '')} >

   <div className="flex justify-around items-center gap-10"> <h1 className="font-sans">{number}</h1>
      <h1 className="font-sans w-full   text-sm">{txt}</h1>
     

      <FaPlus onClick={()=>{setActive(!active)}} className={'hover:scale-110 transition-all duration-700  ease-out cursor-pointer  ' + '' + (active && 'rotate-45') }/>
      </div>
{active &&(
    <div className='mt-2 flex flex-col gap-2 items-center'>
    <hr className="w-full border-[1px] opacity-25 bg-white rounded-full"/>
    <p className='text-sm   w-96 transition-all'>{description}</p>
    </div>
)}
      
    </div>
  )
}

export default FaqComponent
