import React from 'react'
import Btngrad from '../components/Btngrad'
import Purpleball from '../components/Purpleball'
import lines2 from '../ImageAssets/lines2.png'
import { FaBitcoin, FaEthereum, FaStripe } from 'react-icons/fa'


const LeftSideHero = () => {
  return (
    <div  className='flex flex-col w-auto  gap-[48px] z-10'>

    <div className='flex  flex-col max-w-[580px] h-auto gap-[16px] relative'>
    <h1 className='text-white font-sans  text-[50px]  line-clamp-none relative'>
    Collect Next <br/>
Generation<br/>
Today

<img src={lines2} className='absolute w-60 left-80 top-32'/> 
</h1>
<Purpleball classes={" top-80 left-60"}/>

<p className='text-white'>  Cyfonii is the premier marketplace for nitches, which are digital items you can truly 
own for yourself</p>

<Btngrad txt="Get Connected"/>

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
