import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import IconDisplay from '../components/IconDisplay'
import {motion} from 'motion/react'

const OurSpecialty = () => {
  return (
    <div className=' flex justify-center gap-[16px] items-center flex-col my-[156px] py-[48px] z-50 '>
      

    <Uniquetitle txt="Our Specialty" />

    <motion.div initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}} className='flex flex-col gap-[8px]'> 
    <motion.h1  className="font-sans text-white text-[32px] items-center text-center">Complete Solutions <br/> for your NFTs</motion.h1>
<p className="text-white text-xs max-w-96 text-center items-center  align-middle">Cyfoni is the premier market place for NFTs, which are digital items you can truly own yourself</p>

</motion.div>

<motion.div initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}} className='flex justify-center gap-[100px] lg:gap-[32px] items-center mt-[100px] lg:flex-row flex-col'>


<IconDisplay   number="01" title="Huge Collection" 
description="this is a huge collection" />
<IconDisplay   number="02" title="High Quality" 
description="this is a high Quality" />
<IconDisplay   number="03" title="Top Resource" 
description="this is a huge collection" />
<IconDisplay   number="04" title="Big Community" 
description="this is a huge collection" />



</motion.div>




    </div>
  )
}

export default OurSpecialty
