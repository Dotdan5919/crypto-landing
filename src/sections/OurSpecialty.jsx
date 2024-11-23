import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import IconDisplay from '../components/IconDisplay'

const OurSpecialty = () => {
  return (
    <div className=' flex justify-center gap-[16px] items-center flex-col my-[156px] py-[48px] z-50 '>
      

    <Uniquetitle txt="Our Specialty" />

    <div className='flex flex-col gap-[8px]'> 
    <h1 className="font-sans text-white text-[32px] items-center text-center">Complete Solutions <br/> for your NFTs</h1>
<p className="text-white text-xs max-w-96 text-center items-center  align-middle">Cyfoni is the premier market place for NFTs, which are digital items you can truly own yourself</p>

</div>

<div className='flex justify-center gap-[100px] lg:gap-[32px] items-center mt-[100px] lg:flex-row flex-col'>


<IconDisplay   number="01" title="Huge Collection" 
description="this is a huge collection" />
<IconDisplay   number="02" title="High Quality" 
description="this is a high Quality" />
<IconDisplay   number="03" title="Top Resource" 
description="this is a huge collection" />
<IconDisplay   number="04" title="Big Community" 
description="this is a huge collection" />



</div>




    </div>
  )
}

export default OurSpecialty
