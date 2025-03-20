import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import Iconbox from '../components/Iconbox'
import ai_image2 from '../ImageAssets/ai_image2.png'
import {motion} from 'motion/react'

const JoinNFT = () => {
  return (
    <div  className='flex gap-[16px] flex-col items-center align-item z-50 '>

    <Uniquetitle txt="Join NFT Portfolio" />
    <motion.h1 initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}}  className="font-sans text-[32px] text-white  text-center z-50">Become a Cyfoni
    <br/> Player Now</motion.h1>
    
    <div className='flex my-[32px] gap-[32px] flex-col lg:flex-row justify-center items-center'>
    <div className='flex flex-col gap-[32px]'> 
    <Iconbox title="Connect your wallet" description="Suspendisse tristique neque a lorem
Placerat pharetra. Class patent taciti sociosqu ad litora torquent per conubia nostra, per
inceptos himenaeos
"  step="Step 1" icon="connect"/>

<Iconbox title="Connect your wallet" description="Suspendisse tristique neque a lorem
Placerat pharetra. Class patent taciti sociosqu ad litora torquent per conubia nostra, per
inceptos himenaeos
"  step="Step 2" icon="buy"/>

<Iconbox title="Buy Your NFT" description="Suspendisse tristique neque a lorem
Placerat pharetra. Class patent taciti sociosqu ad litora torquent per conubia nostra, per
inceptos himenaeos
"  step="Step 3" icon="collection"/>

<Iconbox title="Create Collection" description="Suspendisse tristique neque a lorem
Placerat pharetra. Class patent taciti sociosqu ad litora torquent per conubia nostra, per
inceptos himenaeos
"  step="Step 4" icon="sell"/>


    </div>

    <motion.div initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.7}}} className='z-50 '>
    
    <img src={ai_image2} className='w-[500px]' />
    
    </motion.div>
    
    </div>
      
    </div>
  )
}

export default JoinNFT
