import React, { useEffect, useState } from 'react'
import carousel1 from '../ImageAssets/carousel_1.jpg'
import CarouselElement from './CarouselElement'
import { FaArrowLeft, FaArrowRight, FaCircle, FaEllipsisH, FaEllipsisV } from 'react-icons/fa'
import {Collection} from '../Data/Data.js'
const Imgcarousel = () => {

  const[collection,setCollection]=useState();
  const [deactivateBtn,setDeactivateBtn]=useState();
  
  const [slider,setSlider]=useState(document.getElementById('slider'));

  


  useEffect(()=>{


  //  if(deactivateBtn==="Left"){

  //   setDeactivateBtn("Right");
  //  }
  
 console.log(deactivateBtn)

  });


  const handleClickLeft=()=>{
    
    // 
      
    let slider=document.getElementById('slider');
    if(slider.scrollLeft>0){
    slider.style.scrollBehavior="smooth";
    slider.scrollLeft-=slider.clientWidth;

    console.log(slider.scrollLeft);
  console.log('client Width'+slider.clientWidth); 
  setDeactivateBtn("");
  
}

else{

  

  setDeactivateBtn("Left")
}

  }
  const handleClickRight=()=>{

    let slider=document.getElementById('slider');
    if(slider.scrollLeft<slider.clientWidth){

 
    slider.style.scrollBehavior="smooth";
    slider.scrollLeft+=slider.clientWidth;

console.log(slider.scrollLeft);
console.log('client Width'+slider.clientWidth);
setDeactivateBtn("");

}
else{

  

  setDeactivateBtn("Right")
}

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

{deactivateBtn==="Left"?(<div className={"rounded-full border-solid border-white  border-[1px] w-10  h-10 text-white flex justify-center items-center   opacity-10"  } onClick={handleClickLeft}>
  <FaArrowLeft className='text-xl ' />
  </div>):
  
  (<div className={"rounded-full border-solid border-white hover:border-my-blue border-[1px] w-10  h-10 text-white flex justify-center items-center  hover:scale-110 transition-all duration-100 ease-in"  } onClick={handleClickLeft}>
    <FaArrowLeft className='text-xl hover:text-my-blue' />
    </div>)}


<div>
<div className="flex gap-[3px]">

{Collection.map((_,index)=>




{

  return (
  <FaCircle className='text-white'  size={9}/>

);
  

})



}
<FaCircle className='text-white ' size={9}/>
<FaCircle className='text-white  opacity-20' size={9}/>
<FaCircle className='text-white opacity-20  opacity-20' size={9}/>
<FaCircle className='text-white opacity-20 ' size={9}/>
<FaCircle className='text-white  opacity-20' size={9}/>



</div>
</div>

{deactivateBtn==="Right"?(<div className="rounded-full border-solid border-white 
  border-[1px] w-10  h-10 text-white flex justify-center items-center opacity-15 " onClick={handleClickRight}>
  <FaArrowRight className='text-xl '/>
  </div>):
(
  <div className="rounded-full border-solid border-white hover:border-my-blue
border-[1px] w-10  h-10 text-white flex justify-center items-center hover:scale-110 transition-all duration-100 ease-in " onClick={handleClickRight}>
<FaArrowRight className='text-xl hover:text-my-blue'/>
</div>
)}





</div>


    </div>
  )
}

export default Imgcarousel
