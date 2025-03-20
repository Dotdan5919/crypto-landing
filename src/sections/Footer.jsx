import React, { useState } from 'react'
import { FaBars, FaFacebook, FaHamburger, FaLinkedin, FaSearch, FaSearchengin, FaTwitter, FaYoutube } from 'react-icons/fa'
import Btngrad from '../components/Btngrad'
import Navlist from '../components/Navlist'
import { FaBarsStaggered, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    
    <div  className='flex  justify-between items-center my-[36px]   w-full text-white  list-none h-[48px] px-[32px] py-[16px] z-50'>

<div className='z-50'>CYpC</div>


<div className=' flex flex-col items-center text-center justify-center gap-2'>
<div className="hidden gap-[24px] cursor-pointer flex-row md:flex font-sans "> 
    <Navlist name="Home"/>
    <Navlist name="Explore"/>
    <Navlist name="About"/>
    <Navlist name="Roadmap"/>
    <Navlist name="Team"/>
    <Navlist name="Contact"/>

    </div>
    <div className="flex gap-4 text-gray-600">
    Copyright © 2022, Cyfonii. Designed by Themesflat</div>

    
    </div>

    <div className="flex gap-4 text-xl">
    
    
    <FaXTwitter/>
    <FaFacebook/>
    <FaLinkedin/>
    <FaYoutube/>

    </div>

    








    </div>
  
  )
}

export default Footer
