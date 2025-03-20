import React from 'react'
import Btngrad from '../components/Btngrad'
import Purpleball from '../components/Purpleball'
import lines2 from '../ImageAssets/lines2.png'
import { FaBitcoin, FaEthereum, FaStripe } from 'react-icons/fa'
import { motion } from "motion/react";

const LeftSideHero = () => {
  return (
    <div  className='flex items-start flex-col w-auto  gap-[48px] z-10'>

    <div className='flex  justify-center items-start  flex-col max-w-[580px] h-auto gap-[16px] relative'>
    <motion.h1  transition={{ type: "spring",duration: .6 }} initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} className='text-white font-sans  text-[50px]  line-clamp-none '>
    Collect Next <br/>
Generation<br/>
Today

<img src={lines2} className='absolute w-60 left-80 top-32'/> 
</motion.h1>
<Purpleball classes={" top-80 left-60"}/>

<motion.p className='text-white -ml-0 p-0 m-0' transition={{duration:.6}} initial={{y:10,opacity:0}}  whileInView={{y:0,opacity:1,transition:{duration:.2,type:'spring',delay:.1,stiffness:180}}}>Cyfonii is the premier marketplace for nitches, which are digital items you can truly 
own for yourself</motion.p>

<motion.div transition={{type:'spring',duration:.2,delay:.2,stiffness:160}} initial={{opacity:0,y:-10}}  whileInView={{opacity:1,y:0}}> 
<Btngrad txt="Get Connected" type={1}/>

</motion.div>
</div>


<div className='flex flex-col gap-[8px]'>

<h1 className='text-white font-sans'>We are Montena NFT</h1>

<div className='flex items-center gap-[16px] text-gray-700'>  
<h1 className=''> We accept </h1>
<div className='flex gap-[16px] list-none text-[30px]  '>

<li><FaBitcoin  /> </li>
<li><FaEthereum  /></li>
<li><FaStripe  /></li>

</div>


</div>
</div>



    </div>
  )
}

export default LeftSideHero
