import React from 'react'
import Btngrad from '../components/Btngrad'
import Aboutus1 from '../ImageAssets/Aboutus1.png'
import Aboutus2 from '../ImageAssets/Aboutus2.png'
import Aboutus3 from '../ImageAssets/Aboutus3.png'
import Aboutus4 from '../ImageAssets/Aboutus4.png'
import blueblur from '../ImageAssets/blueblur.png'
import Uniquetitle from '../components/Uniquetitle'


const Aboutus = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-around gap-[32px] items-center w-full z-50 h-fit my-[56px]'>
      
    <div className='w-40 p-5 flex justify-center items-center relative  '>
    
    <img  src={Aboutus1} className='z-10 h-[452px] w-[370px]  min-w-[350px] ' />
    <div className="w-[350px] rounded-[52px] h-[450px] z-0 rotate-8 bg-white p-7 absolute opacity-30">

</div>
    <img src={Aboutus2} className='absolute  w-36 z-50 top-80 left-52'/>
    <img src={Aboutus3} className='absolute w-24 z-50 top-10 -left-52 '/>
    <img src={Aboutus4} className='absolute w-40 z-0 -bottom-20 -left-32 '/>


    
    
    
    </div>


    <div className='max-w-96 flex gap-[16px] flex-col z-50'>
     
    <Uniquetitle txt="About us"/>
        <h1 className="font-sans text-white text-[22px]">High Quality <br/> NFT Collection</h1>
   
   <p className='text-white font-sans font-light text-[10px] flex flex-col gap-3'>
   <p>Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself
<br/>  
</p>
Duis aute irure dolor in reprehenderit in voluptate 
velit esse cllium dolore eu fugait nulla pariatur. 
Excepteur sint occae cat cupidatat non provident, 
sunt in culpa qui official dese runt mollit anim id est
 laborum velit esse cillum dolore eu fugiat nulla pariatu 
 epteur sint occaecat </p>
 <Btngrad txt="More about us" type={1}/>
        </div>
     

        <img src={blueblur} className='absolute  -top-96 -left-80 z-0 rotate-180' />
    </div>
  )
}

export default Aboutus
