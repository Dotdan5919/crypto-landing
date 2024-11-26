import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import Textbox from '../components/Textbox'
import Btngrad from '../components/Btngrad'

const Roadmap = () => {
  return (
    <div className="flex flex-col mx-auto my-[200px] gap-20 justify-center items-center">
      
    <div className="flex flex-col gap-2 items-center text-center justify-center w-full ">

<Uniquetitle txt="Road Map" />

<h1  className="font-sans text-[32px] text-white  text-center">The Journey of Cyfonii NFT</h1>
</div> 

{/* End Header div*/}


<div className='  w-full my-[48px] '>







{/*middle line*/}
<div className="flex flex-col   items-center    w-full "> 

<span className="w-2 h-2 p-2 bg-my-blue rounded-full"></span>
<div className='border-r border-gray-300 h-60'> </div>

{/*firstbox*/}
<div  className='relative flex items-center'>
<div className="flex   items-center  absolute l right-5">
<Textbox title="idea Generation" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem quos quod vel temporibus consectetur nihil accusantium eveniet reiciendis error provident, " txt="Feburary 01, 2022"/>

<hr className='border-[1px]  w-32 opacity-10 '/>
</div>
<span className="w-6 h-6  flex items-center justify-center p-2  bg-slate-100/5 rounded-full">
<span className="w-2 h-2 p-2 bg-my-blue rounded-full"></span>
</span>

</div>
<div className='border-r border-gray-300 h-60'> </div>

{/*secondbox*/}

<div className="relative flex justify-center items-center">

<span className="w-6 h-6  flex items-center justify-center p-2  bg-slate-100/5 rounded-full">
<span className="w-2 h-2 p-2 bg-my-blue rounded-full"></span>
</span>
<div className="flex   items-center absolute  left-5  ">
<hr className='border-[1px] w-32 opacity-10 '/>
<Textbox title="idea Generation" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem quos quod vel temporibus consectetur nihil accusantium eveniet reiciendis error provident, " txt="Feburary 01, 2022"/>


</div>
</div>


<div className='border-r border-gray-300 h-60'> </div>

{/*thirdbox*/}
<div className="relative flex justify-center items-center"> 
<div className="flex   items-center absolute right-5 ">
<Textbox title="idea Generation" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem quos quod vel temporibus consectetur nihil accusantium eveniet reiciendis error provident, " txt="Feburary 01, 2022"/>

<hr className='border-[1px] w-32 opacity-10 '/>
</div>
<span className="w-6 h-6  flex items-center justify-center p-2  bg-slate-100/5 rounded-full">
<span className="w-2 h-2 p-2 bg-my-blue rounded-full"></span>
</span>
</div>




<div className='border-r border-gray-300 h-60'> </div>
{/*fourthbox*/}
<div className="relative flex justify-center items-center">  
<div className="flex   items-center absolute  right-5 ">
<Textbox title="idea Generation" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem quos quod vel temporibus consectetur nihil accusantium eveniet reiciendis error provident, " txt="Feburary 01, 2022"/>

<hr className='border-[1px] w-32 opacity-10 '/>
</div>
<span className="w-6 h-6  flex items-center justify-center p-2  bg-slate-100/5 rounded-full">
<span className="w-2 h-2 p-2 bg-my-blue rounded-full"></span>
</span>
</div>




</div>

{/*end middle line*/}




</div>

<div className="flex justify-center items-center mt-5">

<Btngrad  txt="View full Roadmap" type={1}/>


</div>


    </div>
  )
}

export default Roadmap
