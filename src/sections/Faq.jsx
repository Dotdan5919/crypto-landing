import React, { useEffect, useState } from 'react'
import Uniquetitle from '../components/Uniquetitle'
import Btngrad from '../components/Btngrad'
import FaqComponent from '../components/FaqComponent'
import { CryptoQ } from '../Data/CryptoQ.ts'
import { CollectionQ } from '../Data/CollectionQ.ts'
import { NftQ } from '../Data/NftQ.ts'
import { TradingQ } from '../Data/TradingQ.ts'
import {motion} from 'motion/react'


const Faq = () => {

const [activeFaq,setActiveFaq]=useState("Cryptocurrency");

const [faqs,setFaqs]=useState(CryptoQ);




useEffect(()=>{


console.log(activeFaq);
switch(activeFaq){

case "Cryptocurrency":
    setFaqs(CryptoQ);
    break;
    case "Collection":
        setFaqs(CollectionQ);
        break;
        case "Nft Tokens":
            setFaqs(NftQ);
            break;
            case "Crypto Trading":
                setActiveFaq(TradingQ);
                break;
                default:
                    setFaqs(CryptoQ);
                    break;


}


},[activeFaq])

  return (
    <div id="faq" className='flex flex-col gap-3 text-white text-center items-center justify-center mx-8'>
      
    <Uniquetitle txt="FAQs" />

<motion.h1 initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}} className='font-sans text-[30px]'> Frequently Asked <br/> Questions</motion.h1>

<motion.p initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}}>Below is a list of Frequently asked questions and answers questions and 
answers from partners and 3D artist <br/> Please check this FAQ first before contacting us</motion.p>


<div className="flex flex-col gap-5">
<div className="flex w-full items-center justify-center">
<Btngrad txt="Cryptocurrency"  active={(activeFaq==="Cryptocurrency"?true:false)}  Click={()=>{setActiveFaq("Cryptocurrency")}}/>


<Btngrad txt="Nft Tokens"   active={(activeFaq==="Nft Tokens"?true:false)} Click={()=>{setActiveFaq("Nft Tokens")}}/>
<Btngrad txt="Collection"   active={(activeFaq==="Collection"?true:false)} Click={()=>{setActiveFaq("Collection")}}/>
<Btngrad txt="Crypto Trading"   active={(activeFaq==="Crypto Trading"?true:false)} Click={()=>{setActiveFaq("Crypto Trading")}}/>




</div>
<hr className='w-full border-[1px] opacity-30 rounded-full border-white'/>

<div class="flex sm:gap-5 gap-5 flex-col sm:flex-row">
  <div class="flex flex-col gap-5">  {faqs.slice(0, 4).map((Faq) => (
      <FaqComponent key={Faq.id} number={Faq.number} txt={Faq.Question} description={Faq.description} />
    ))}
  </div>
  <div class="flex flex-col gap-5">  {faqs.slice(4).map((Faq) => (
      <FaqComponent key={Faq.id} number={Faq.number} txt={Faq.Question} description={Faq.description} />
    ))}
  
  </div>
</div>



</div>





    </div>
  )
}

export default Faq
