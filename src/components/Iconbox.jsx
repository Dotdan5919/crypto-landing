import React from 'react'
import { FaBoxes } from 'react-icons/fa'

const Iconbox = ({title,description}) => {
  return (
    <div className='flex  max-w-[500px] justify-cente gap-[16px] items-center bg-gradient-to-b  from-blue-950 rounded-2xl to-transparent px-[32px]  py-[16px]'>
     
    <div className='rounded-3xl shadow-xl'> <h1>Step 1</h1></div>

    <FaBoxes className='text-[200px] text-white ' />

    <hr  className='border-2  border-gray-600 h-28' />
    <div className='flex flex-col gap-[8px]'>
<h1 className="font-sans text-2xl text-white">{title}</h1>
<p className='text-white'>{description}</p>
</div>

    </div>
  )
}

export default Iconbox
