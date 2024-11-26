import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import Btngrad from '../components/Btngrad'
import FaqComponent from '../components/FaqComponent'

const Faq = () => {
  return (
    <div className='flex flex-col gap-3 text-white text-center items-center justify-center'>
      
    <Uniquetitle txt="FAQs" />

<h1 className='font-sans text-[30px]'> Frequently Asked <br/> Questions</h1>

<p>Below is a list of Frequently asked questions and answers questions and 
answers from partners and 3D artist <br/> Please check this FAQ first before contacting us</p>


<div className="flex flex-col gap-5">
<div className="flex w-full items-center justify-center">
<Btngrad txt="Cryptocurrency" />
<Btngrad txt="Nft Tokens" />
<Btngrad txt="Collection" />
<Btngrad txt="Crypto Trading" />




</div>
<hr className='w-full border-[1px] opacity-30 rounded-full border-white'/>

<div className="grid grid-rows-4 grid-cols-2 w-full gap-5">

<FaqComponent number="01" txt="What is cryptocurrency?" description="Cryptocurrency is a digital currency that uses cryptography to secure transactions and is not controlled by a central authority like a bank or government. Instead, cryptocurrencies use a decentralized system to record transactions and manage new units."/>
<FaqComponent number="01" txt="What is cryptocurrency?" description="Cryptocurrency is a digital currency that uses cryptography to secure transactions and is not controlled by a central authority like a bank or government. Instead, cryptocurrencies use a decentralized system to record transactions and manage new units."/>

<FaqComponent number="01" txt="What is cryptocurrency?" description="Cryptocurrency is a digital currency that uses cryptography to secure transactions and is not controlled by a central authority like a bank or government. Instead, cryptocurrencies use a decentralized system to record transactions and manage new units."/>
<FaqComponent number="01" txt="What is cryptocurrency?" description="Cryptocurrency is a digital currency that uses cryptography to secure transactions and is not controlled by a central authority like a bank or government. Instead, cryptocurrencies use a decentralized system to record transactions and manage new units."/>

</div>





</div>





    </div>
  )
}

export default Faq
