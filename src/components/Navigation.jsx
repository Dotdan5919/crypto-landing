import React, { useState } from 'react'
import { FaBars, FaHamburger, FaSearch, FaSearchengin } from 'react-icons/fa'
import Btngrad from './Btngrad'
import Navlist from './Navlist'
import { FaBarsStaggered } from 'react-icons/fa6'

const Navigation = () => {

    const [activeNav,setActiveNav]=useState(false);

    let handleOnclick = ()=>
    {

        setActiveNav(!activeNav);
        console.log(activeNav);

    }

  return (
    <div className='flex  justify-between mt-[32px]  items-center w-full text-white  list-none font-sans h-[48px] px-[32px] py-[16px] z-50'>

<div className='z-50'>CYpC</div>


<div className='hidden gap-[24px] cursor-pointer flex-col md:flex-row md:flex '>

    <Navlist name="Home"    link="home" />
    <Navlist name="Explore"    link="collection" />
    <Navlist name="About"    link="about" />
    <Navlist name="Roadmap"    link="roadmap" />
    <Navlist name="Team"    link="team" />
    <Navlist name="Contact"    link="" />


    
    </div>

    <div className=' items-center justify-center gap-[8px] hidden md:flex'>
        <FaSearch size={16}/>
    
    <Btngrad txt="Join us"  type={1}/>

    </div>

    <div className=' items-center justify-center gap-[8px] text-[30px] z-50 flex md:hidden' onClick={ handleOnclick  }>
        
    
  
    <FaBarsStaggered/>

    </div>


{activeNav && ( <div className='flex md:hidden w-screen absolute top-0 right-0 h-screen  items-center justify-center flex-col gap-[36px] bg-gradient-to-r from-my-blue to-b-blue z-40'>

<Navlist name="Home"/>
    <Navlist name="Explore"/>
    <Navlist name="About"/>
    <Navlist name="Roadmap"/>
    <Navlist name="Team"/>
    <Navlist name="Contact"/>
    <div className=' items-center justify-center gap-[8px] flex'>
        <FaSearch size={16}/>
    
    <Btngrad txt="Join us" type={1}/>
    
    </div>
</div>) }





    </div>
  )
}

export default Navigation
