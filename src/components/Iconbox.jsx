import React, { useEffect, useState } from 'react'
import { FaAnchor, FaBoxes, FaConnectdevelop, FaSellcast } from 'react-icons/fa'
import Uniquetitle  from './Uniquetitle'
import { FaBasketShopping } from 'react-icons/fa6'

const Iconbox = ({title,description,step,icon}) => {
  let Iconclass="text-[70px] text-white ";
const [faicon,Setfaicon]=useState(<FaAnchor className= {Iconclass} />)




useEffect(()=>{
switch (icon){


  case "connect":
    Setfaicon(<FaBoxes className={Iconclass} />);
    break;

    case "buy":
      Setfaicon(<FaBasketShopping className={Iconclass} />);
      break;

      case "collection":
        Setfaicon(<FaConnectdevelop className={Iconclass} />);
        break;

        case "sell":
          Setfaicon(<FaSellcast className={Iconclass} />);
          break;

          Default:
          Setfaicon(<FaAnchor className={Iconclass} />);
          break;



}
}
)



  return (
    <div className='flex relative sm:max-w-[520px] max-w-[400px]  gap-[16px] items-center bg-gradient-to-b  from-blue-950 rounded-2xl to-transparent px-[32px]  py-[32px]'>
     
    <div className='absolute -top-4 '>
    <Uniquetitle txt={step}/>
    </div>
    {faicon}
   

    <hr  className='border-2  border-gray-600 h-24' />
    <div className='flex flex-col gap-[8px]'>
<h1 className="font-sans text-lg text-white">{title}</h1>
<p className='text-white text-sm'>{description}</p>
</div>

    </div>
  )
}

export default Iconbox
