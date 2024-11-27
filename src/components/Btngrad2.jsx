import React from 'react'

const Btngrad2 = ({txt}) => {
  return (
    <div className='hover:border-white  border-transparent border-2 rounded-md p-1 transition-all transition-slow  ease-in w-fit'>
      
  <button className='flex justify-center items-center bg-gradient-to-r from-orange-500 to-yellow-400  rounded-md px-[16px]  py-[8px] text-white font-sans text-xs '>{txt} </button>


  </div>
  )
}

export default Btngrad2
