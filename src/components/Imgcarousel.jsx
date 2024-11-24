import React, { useEffect, useState } from 'react'
import carousel1 from '../ImageAssets/carousel_1.jpg'
import CarouselElement from './CarouselElement'
import { FaArrowLeft, FaArrowRight, FaCircle, FaEllipsisH, FaEllipsisV } from 'react-icons/fa'
import {Collection} from '../Data/Data.js'
const Imgcarousel = () => {

  const[collection,setCollection]=useState();

  

  useEffect(()=>{


    

  });


  const handleClickLeft=()=>{


    let slider=document.getElementById('slider');
    slider.style.scrollBehavior="smooth";
    slider.scrollLeft-=1000;

    console.log(slider.scroll)

  }
  const handleClickRight=()=>{


    let slider=document.getElementById('slider');
    slider.style.scrollBehavior="smooth";
    slider.scrollLeft+=1000;

console.log(slider.scroll)
  }
  

  const Inactive="opacity-5 text-gray-200";

  
  return (
    <div className='flex gap-[16px] w-full flex-col '>
      
<div   className='flex gap-[16px] w-full overflow-hidden' id='slider' >
  
<div className=' ml-52'></div>

{Collection.map((item)=>{


return(<CarouselElement img={item.img} name={item.name}/>)
}
)
}



    </div>
<div className="flex gap-5 w-full  items-center justify-center">

<div className={"rounded-full border-solid border-white hover:border-my-blue border-[1px] w-10  h-10 text-white flex justify-center items-center  hover:scale-110 transition-all duration-100 ease-in" + ''+ {Collection}} onClick={handleClickLeft}>
<FaArrowLeft className='text-xl hover:text-my-blue'/>
</div>

<div>
<div className="flex gap-[3px]">

<FaCircle className='text-white ' size={9}/>
<FaCircle className='text-white  opacity-20' size={9}/>
<FaCircle className='text-white opacity-20  opacity-20' size={9}/>
<FaCircle className='text-white opacity-20 ' size={9}/>
<FaCircle className='text-white  opacity-20' size={9}/>



</div>
</div>
<div className="rounded-full border-solid border-white hover:border-my-blue
border-[1px] w-10  h-10 text-white flex justify-center items-center hover:scale-110 transition-all duration-100 ease-in " onClick={handleClickRight}>
<FaArrowRight className='text-xl hover:text-my-blue'/>
</div>




</div>


    </div>
  )
}

export default Imgcarousel
