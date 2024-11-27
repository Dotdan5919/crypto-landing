import React from 'react'
import carousel1 from '../ImageAssets/carousel_1.jpg'
import { FaFacebook, FaXTwitter } from 'react-icons/fa6'
import { FaFacebookF, FaTelegram, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
const TeamMember = ({name,img,position}) => {

  
  return (

    <div className='flex text-center flex-col gap-[16px]'>
    <div className=' min-w-[200px] min-h-[80px]  rounded-2xl backdrop-blur-2xl 
    [ bg-gradient-to-b from-white/20 to-white/20 ]
[ border-[1px] border-solid border-white border-opacity-30 ]
[ shadow-black/70 shadow-2xl ] p-[16px] '>
<div className="rounded-2xl  overflow-hidden justify-center items-center grid grid-cols-1 grid-rows-1 relative ">

{/*<img src={carousel1} className='rounded-2xl row-end-1 col-end-1  '/>
  */}
 
  
  <img src={img} className='rounded-2xl row-end-1 col-end-1 h-[200px] w-[200px]  object-cover'   />


</div>




</div>
<h1 className='font-sans text-[17px] text-white'>{name}</h1>
<p className='text-white text-[12px]'>{position}</p>

<div className="socials flex gap-2 justify-center items-center text-white text-[16px]">

<div className="rounded-full flex justify-center items-center bg-gray-800/30 w-10 h-10 shadow-sm hover:scale-110 duration-300 transition-all ease-in-out">
<FaFacebookF />
</div>
<div className="rounded-full flex justify-center items-center bg-gray-800/30 w-10 h-10 shadow-sm hover:scale-110 duration-300 transition-all ease-in-out">

<FaXTwitter />
</div>
<div className="rounded-full flex justify-center items-center bg-gray-800/30 w-10 h-10 shadow-sm hover:scale-110 duration-300 transition-all ease-in-out">

<FaTelegramPlane />
</div>
</div>

</div>

  )
}

export default TeamMember
