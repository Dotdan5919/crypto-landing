import React from 'react'
import Btngrad from '../components/Btngrad'
import Aboutus1 from '../ImageAssets/Aboutus1.png'
import Aboutus2 from '../ImageAssets/Aboutus2.png'
import Aboutus3 from '../ImageAssets/Aboutus3.png'
import Aboutus4 from '../ImageAssets/Aboutus4.png'
import blueblur from '../ImageAssets/blueblur.png'
import Uniquetitle from '../components/Uniquetitle'
import {motion} from 'motion/react'


const Aboutus = () => {



  const motionVariant={

    hidden:{
  
      x:-10,
      opacity:0,
  
  
  
   },
  
  visible_1:{
  
  x:0,
  opacity:1,
  trasition:{
  
  type:'spring',

  duration:6,
  delay:1.3,
  
  
  }
  },
  
  visible_2:{
    
    x:0,
    opacity:1,
    trasition:{
    
    type:'spring',
     duration:6,
    delay:1.5,
    stiffness:100
    
    }
    }
  
  }
  ;








  return (
    <div id="about" className='flex lg:flex-row flex-col justify-around gap-[32px] items-center w-full z-50 h-fit my-[56px]'>
      
    {/* Left side     */}
    <div className='w-40 p-5 flex justify-center items-center relative scale-75 lg:scale-100 '>
    
    <motion.img initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0,transition:{type:'spring',duration:2,delay:.3}}}  src={Aboutus1} className='z-10 h-[452px] w-[370px]  min-w-[350px] ' />
    <div className="w-[350px] rounded-[52px] h-[450px] z-0 rotate-8 bg-white p-7 absolute opacity-30">

</div>
    <motion.img initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0,transition:{type:'spring',duration:.6,delay:.4}}} src={Aboutus2}  animate={{y:1,trasition:{duration:.2,repeat:Infinity}}} whileHover={{scale:1.1,transition:{duration:.3}}} className='absolute  w-36 z-50 top-80 left-52'/>
    <motion.img initial={{y:-30}}  src={Aboutus3} animate={{y:0,transition:{duration:9,delay:5, repeat:Infinity}}} className='absolute w-24 z-50 top-10 -left-52 '/>
    <motion.img initial={{x:-30}}  src={Aboutus4} animate={{x:0,transition:{duration:9,delay:4, repeat:Infinity}}} className='absolute w-40 z-0 -bottom-20 -left-32 '/>


    
    
    
    </div>


    <div className='max-w-96 flex gap-[16px] flex-col z-50'>
     
    <Uniquetitle txt="About us"/>
        <motion.h1 variants={motionVariant} initial="hidden" whileInView="visible_1" className="font-sans text-white text-[22px]">High Quality <br/> NFT Collection</motion.h1>
   
   <motion.p variants={motionVariant} initial="hidden" whileInView="visible_2" className='text-white font-sans font-light text-[10px] flex flex-col gap-3'>
   <motion.p variants={motionVariant} initial="hidden" whileInView="visible_1"  >Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself
<br/>  
</motion.p>
Duis aute irure dolor in reprehenderit in voluptate 
velit esse cllium dolore eu fugait nulla pariatur. 
Excepteur sint occae cat cupidatat non provident, 
sunt in culpa qui official dese runt mollit anim id est
 laborum velit esse cillum dolore eu fugiat nulla pariatu 
 epteur sint occaecat </motion.p>
 <Btngrad txt="More about us" type={1}/>
        </div>
     

        <img src={blueblur} className='absolute  -top-96 -left-80 z-0 rotate-180' />
    </div>
  )
}

export default Aboutus
