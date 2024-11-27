import React, { useState } from 'react'
import { useEffect } from 'react';

const  Btngrad = ({txt,type,active,Click}) => {
  
  const [NewClass,setNewClass]=useState('flex justify-center items-center hover:bg-gradient-to-r hover:from-my-blue hover:to-my-offblue  bg-gradient-to-b from-white/20 to-white/20 rounded-md px-4  py-2 text-white font-sans text-xs transition-all  duration-700 ease-in');

useEffect(()=>{


  active ? setNewClass('flex justify-center items-center bg-gradient-to-r from-my-blue to-my-offblue   rounded-md px-4  py-2 text-white font-sans text-xs transition-all  duration-700 ease-in'):setNewClass('flex justify-center items-center hover:bg-gradient-to-r hover:from-my-blue hover:to-my-offblue  bg-gradient-to-b from-white/20 to-white/20 rounded-md px-4  py-2 text-white font-sans text-xs transition-all  duration-700 ease-in');

  
},[active])

  return (

    <>
{type===1?(<div className='hover:border-white  border-transparent border-2 rounded-md p-1 transition-all transition-slow  ease-in w-fit'>
      
  <button className='flex justify-center items-center bg-gradient-to-r from-my-blue to-my-offblue   rounded-md px-[16px]  py-[8px] text-white font-sans text-xs '>{txt} </button>


  </div>):(
    

    <div className='  border-transparent border-2 rounded-md p-1 transition-all transition-slow  ease-in w-fit' onClick={Click}>
      
    <button className={NewClass}>{txt} </button>
  
  
    </div>


  )
}





  </>

    
  )
}

export default Btngrad
