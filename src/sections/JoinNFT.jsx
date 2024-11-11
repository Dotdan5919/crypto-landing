import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import Iconbox from '../components/Iconbox'

const JoinNFT = () => {
  return (
    <div className='flex gap-[16px] flex-col items-center align-item '>

    <Uniquetitle txt="Join NFT Portfolio" />
    <h1 className="font-sans text-[32px] text-white  text-center">Become a Cyfoni
    <br/> Player Now</h1>
    
    <div>
    <div> 
    <Iconbox title="Connect your wallet" description="Suspendisse tristique neque a lorem
Placerat pharetra. Class patent taciti sociosqu ad litora torquent per conubia nostra, per
inceptos himenaeos
"  />

    </div>

    <div> </div>
    
    </div>
      
    </div>
  )
}

export default JoinNFT
