import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import Textbox from '../components/Textbox'

const Roadmap = () => {
  return (
    <div className="flex flex-col mx-auto mt-[54px]">
      
    <div className="flex flex-col gap-2 items-center text-center justify-center w-full ">

<Uniquetitle txt="Road Map" />

<h1  className="font-sans text-[32px] text-white  text-center">The Journey of Cyfonii NFT</h1>
</div>


<div className='grid grid-cols-3 grid-rows-7 w-full mt-[48px] justify-center justify-items-center  '>
<div className="flex   items-center   col-start-1 row-start-1  bg-red-600  justify-self-end">
<Textbox title="idea Generation" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem quos quod vel temporibus consectetur nihil accusantium eveniet reiciendis error provident, " txt="Feburary 01, 2022"/>

<hr className='border-[1px] w-20 opacity-10 '/>
</div>
<div className="flex   items-center   col-start-1 row-start-2 bg-red-600  justify-self-end">
<Textbox title="idea Generation" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem quos quod vel temporibus consectetur nihil accusantium eveniet reiciendis error provident, " txt="Feburary 01, 2022"/>

<hr className='border-[1px] w-20 opacity-10 '/>
</div>
<div className="flex   items-center   col-start-1 row-start-3 bg-red-600   justify-self-end">
<Textbox title="idea Generation" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem quos quod vel temporibus consectetur nihil accusantium eveniet reiciendis error provident, " txt="Feburary 01, 2022"/>

<hr className='border-[1px] w-20 opacity-10 '/>
</div>


<div className="flex flex-col   items-center  col-start-2 row-span-7 bg-black justify-items-center  w-10 "> 

<span className="w-2 h-2 p-2 bg-my-blue rounded-full"></span>
<div className='border-r border-gray-300 h-40'> </div>
<span className="w-6 h-6  flex items-center justify-center p-2  bg-slate-100/5 rounded-full">
<span className="w-2 h-2 p-2 bg-my-blue rounded-full"></span>
</span>
<div className='border-r border-gray-300 h-40'> </div>
<span className="w-6 h-6  flex items-center justify-center p-2  bg-slate-100/5 rounded-full">
<span className="w-2 h-2 p-2 bg-my-blue rounded-full"></span>
</span>


<div className='border-r border-gray-300 h-40'> </div>
<span className="w-6 h-6  flex items-center justify-center p-2  bg-slate-100/5 rounded-full">
<span className="w-2 h-2 p-2 bg-my-blue rounded-full"></span>
</span>


<div className='border-r border-gray-300 h-40'> </div>
<span className="w-6 h-6  flex items-center justify-center p-2  bg-slate-100/5 rounded-full">
<span className="w-2 h-2 p-2 bg-my-blue rounded-full"></span>
</span>




</div>


<div className="flex   items-center   col-start-3 row-start-2 bg-red-600  justify-self-start   ">
<hr className='border-[1px] w-20 opacity-10 '/>
<Textbox title="idea Generation" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem quos quod vel temporibus consectetur nihil accusantium eveniet reiciendis error provident, " txt="Feburary 01, 2022"/>


</div>
<div className="flex   items-center   col-start-3 row-start-3  bg-red-600  justify-self-start">
<hr className='border-[1px] w-20 opacity-10 '/>
<Textbox title="idea Generation" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem quos quod vel temporibus consectetur nihil accusantium eveniet reiciendis error provident, " txt="Feburary 01, 2022"/>


</div>

</div>



    </div>
  )
}

export default Roadmap
