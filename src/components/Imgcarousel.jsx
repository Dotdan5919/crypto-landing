import React from 'react'
import carousel1 from '../ImageAssets/carousel_1.jpg'
import CarouselElement from './CarouselElement'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Imgcarousel = () => {
  return (
    <div className='flex gap-[16px] w-full flex-col'>
      
<div   className='flex gap-[16px] w-full overflow-hidden' >
  

    <CarouselElement name="King of pirates"/>
    <CarouselElement name="King of pirates"/>
    <CarouselElement name="King of pirates"/>
    <CarouselElement name="King of pirates"/>
    <CarouselElement name="King of pirates"/>
    <CarouselElement name="King of pirates"/>
    <CarouselElement name="King of pirates"/>

    </div>
<div className="flex gap-5">

<div className="rounded-full border-solid border-white
border-[1px] w-10  h-10 text-white flex justify-center items-center  hover:scale-110 transition-all duration-100 ease-in">
<FaArrowLeft className='text-xl'/>
</div>

<div className="rounded-full border-solid border-white
border-[1px] w-10  h-10 text-white flex justify-center items-center hover:scale-110 transition-all duration-100 ease-in ">
<FaArrowRight className='text-xl'/>
</div>




</div>


    </div>
  )
}

export default Imgcarousel
