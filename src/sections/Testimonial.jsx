import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import timg from '../ImageAssets/timg.jpg'

const Testimonial = () => {
  return (
    <div className='flex flex-col gap-10 text-white text-center items-center my-40 bg-gradient-to-b from-slate-500/30 rounded-3xl p-20 '>
      
    <Uniquetitle txt="Testimonial" />

    <h1 className='font-sans text-white text-[40px]'>What People Say</h1>

    
<FaQuoteRight className='text-[70px]'/>



    <p className='w-[600px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod error distinctio, iusto quaerat molestiae laborum impedit, obcaecati est atque eligendi consectetur quos tenetur assumenda ipsam incidunt neque, totam sint itaque.
    Ratione ex, voluptatum hic omnis amet delectus odio? Necessitatibus accusamus eum eaque quaerat quisquam officia deleniti fugiat, sit modi blanditiis ratione atque ex. Odit nesciunt iusto optio inventore aliquid modi?
    Maiores, eum sapiente a quo voluptates voluptate ex dolores laborum consectetur qui modi assumenda nihil obcaecati expedita, sed blanditiis. Facilis amet minus explicabo placeat aliquam nobis fugit id totam numquam.</p>

<div className="flex flex-col gap-2 justify-center items-center">
<div className="rounded-full w-20 h-20 bg-cover  flex overflow-hidden shadow-md">

<img className=' ' src={timg} />

</div>
<div className="flex flex-col justify-center items-center gap-2">
<h1 className='font-sans'>Jacob Jones</h1>
<p>Chief Product officer</p>
</div>
</div>


    </div>
  )
}

export default Testimonial
 