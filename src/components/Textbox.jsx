import React, { useEffect, useState } from 'react'
import { FaAnchor, FaBoxes, FaConnectdevelop, FaSellcast } from 'react-icons/fa'
import Uniquetitle  from './Uniquetitle'
import { FaBasketShopping } from 'react-icons/fa6'

const Textbox = ({title,description,txt,icon}) => {
//   let Iconclass="text-[70px] text-white ";
// const [faicon,Setfaicon]=useState(<FaAnchor className= {Iconclass} />)







  return (
    <div className='flex relative sm:max-w-[300px] max-w-[270px]  gap-[16px] items-center bg-gradient-to-b  from-blue-950 rounded-2xl to-transparent px-[32px]  py-[32px]'>
     
    <div className='absolute -top-4 '>
    <Uniquetitle txt={txt}/>
    </div>
   
   

   
    <div className='flex flex-col gap-[8px]'>
<h1 className="font-sans text-lg text-white">{title}</h1>
<hr className=' rounded-md w-20 h-2 border-none bg-gradient-to-r from-my-blue to-my-offblue'/>
<p className='text-white text-sm'>{description}</p>
</div>

    </div>
  )
}

export default Textbox
