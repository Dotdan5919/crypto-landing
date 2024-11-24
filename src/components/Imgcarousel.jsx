import React, { useEffect, useState,useRef } from 'react'
import carousel1 from '../ImageAssets/carousel_1.jpg'
import CarouselElement from './CarouselElement'
import { FaArrowLeft, FaArrowRight, FaCircle, FaEllipsisH, FaEllipsisV } from 'react-icons/fa'
import {Collection} from '../Data/Data.js'
const Imgcarousel = () => {

  
  const [deactivateBtn,setDeactivateBtn]=useState();
  
  // const [slider,setSlider]=useState(document.getElementById('slider'));

  const [scrollposition,setScrollposition]=useState(0);
  const sliderRef = useRef(null);


  useEffect(()=>{


  //  if(deactivateBtn==="Left"){

  //   setDeactivateBtn("Right");
  //  }
  
 console.log(deactivateBtn)

  });


  const handleClickLeft=()=>{
    
    // 
    if(sliderRef.current){ 
    // let slider=document.getElementById('slider');
    if(sliderRef.current.scrollLeft>0){
      sliderRef.current.style.scrollBehavior="smooth";
      sliderRef.current.scrollLeft-=sliderRef.current.clientWidth;

    console.log(sliderRef.current.scrollLeft);
  console.log('client Width'+sliderRef.current.clientWidth); 
  setDeactivateBtn("");
  
}

else{

  

  setDeactivateBtn("Left")
}
    }
  }
  const handleClickRight=()=>{

    if(sliderRef.current){  
    if(sliderRef.current.scrollLeft<sliderRef.current.clientWidth){

 
      sliderRef.current.style.scrollBehavior="smooth";
      sliderRef.current.scrollLeft+=sliderRef.current.clientWidth;

console.log(sliderRef.current.scrollLeft);
console.log('client Width'+sliderRef.current.clientWidth);
setDeactivateBtn("");
}


else{

  

  setDeactivateBtn("Right")
}
}
  }
  

const handleClickDot=(x)=>
{

  if(sliderRef.current){


 sliderRef.current.scrollBehavior="smooth";
  // let slider=document.getElementById('slider');
  // slider.style.scrollBehavior="smooth";
  if(scrollposition!==x){
    sliderRef.current.scrollLeft+=(sliderRef.current.clientWidth*x);
    // sliderRef.current.scrollLeft-=(sliderRef.current.clientWidth*x); 
  }
    
    

  setScrollposition(x);
   console.log(x);
}



}

  
  return (
    <div className='flex gap-[16px] w-full flex-col '>
      
<div   className='flex gap-[16px] w-full overflow-hidden' id='slider' ref={sliderRef} >
  
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

  if(index>=Math.floor(Collection.length/2)){ 

}


else{

  if(scrollposition===index){
console.log(index);
    return (
    <FaCircle className='text-white' key={index}  size={9} onClick={()=>handleClickDot(index)}/>
    )
  }
  else{
    
console.log(index);
  
    return(
    <FaCircle className='text-white  opacity-20' size={9} onClick={()=>handleClickDot(index)}/>
  )
  
  }  


}

  

})



}


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
