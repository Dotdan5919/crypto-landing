import React from 'react'
import carousel1 from '../ImageAssets/carousel_1.jpg'
const CarouselElement = ({name,image}) => {
  return (
    <div className=" min-w-[270px] min-h-[300px] rounded-2xl backdrop-blur-2xl
    [ bg-gradient-to-b from-white/20 to-white/20 ]
[ border-[1px] border-solid border-white border-opacity-30 ]
[ shadow-black/70 shadow-2xl ] p-[16px]">
<div className="rounded-2xl  overflow-hidden justify-center items-center grid grid-cols-1 grid-rows-1  ">

<img src={carousel1} className='rounded-2xl row-end-1 col-end-1  '/>

<div className='row-end-1 col-end-1 [ bg-gradient-to-b from-white/20 to-white/20 ]
[ border-[1px] border-solid border-white border-opacity-30 ]
[ shadow-black/70 shadow-2xl ] h-[50px] w-[220px]   text-white
place-self-end mx-auto mb-5 flex justify-center items-center rounded-lg
'>
<h1 className='font-sans'>{name}</h1>
</div>
</div>
</div>

  )
}

export default CarouselElement
