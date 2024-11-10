import React from 'react'

const Iconbox = ({title,description}) => {
  return (
    <div className='flex bg-gradient-to-r from-gray-600 to-transparent '>
      

<h1 className="font-sans text-lg text-white">{title}</h1>
<p className='text-white'>{description}</p>


    </div>
  )
}

export default Iconbox
