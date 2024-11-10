import React from 'react';
import ai_image from '../ImageAssets/ai_image.png';
import Smallbox1 from './Smallbox1';
import Purpleball from './Purpleball';
import Smallbox2 from './Smallbox2';

const RightSideHero = () => {
  return (
    <div className='relative  flex w-auto h-[452px]  justify-center z-10 '>

    <Purpleball classes=" top-44  -right-20 z-20 w-10 h-10" />
    <Smallbox1 smalltext="Current Bid"  largetext="2.26 ETH" classes=" z-20 -right-20 top-24  w-[180px] h-[80px]"/>
      
  <Smallbox2 largetext="Lesie Alexander" smalltext="@lesie754" classes="z-20 -left-20 bottom-24  w-[230px] h-[80px]" />
<img src={ai_image}   className='z-10 h-[452px] w-[350px]  min-w-[300px]'/>

<div className="w-[350px] rounded-[52px] h-[450px] z-0 -rotate-8 bg-white p-7 absolute opacity-30">

</div>
<div className="w-[350px] rounded-[52px] h-[450px] z-0 -rotate-6 bg-white p-7 absolute opacity-30">

</div>

    </div>
  )
}

export default RightSideHero
