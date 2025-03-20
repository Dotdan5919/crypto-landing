import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import timg from '../ImageAssets/timg.jpg'
import {motion} from 'motion/react'

const Testimonial = () => {
  return (
    <div id="testimonial" className='flex flex-col gap-10 text-white text-center items-center my-40 bg-gradient-to-b from-slate-500/30 rounded-3xl p-20 mx-5 '>
      
    <Uniquetitle txt="Testimonial" />

    <motion.h1 initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}} className='font-sans text-white text-[40px]'>What People Say</motion.h1>

    
<FaQuoteRight className='text-[70px]'/>



    <motion.p initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}} className='max-w-[600px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod error distinctio, iusto quaerat molestiae laborum impedit, obcaecati est atque eligendi consectetur quos tenetur assumenda ipsam incidunt neque, totam sint itaque.
    Ratione ex, voluptatum hic omnis amet delectus odio? Necessitatibus accusamus eum eaque quaerat quisquam officia deleniti fugiat, sit modi blanditiis ratione atque ex. Odit nesciunt iusto optio inventore aliquid modi?
    Maiores, eum sapiente a quo voluptates voluptate ex dolores laborum consectetur qui modi assumenda nihil obcaecati expedita, sed blanditiis. Facilis amet minus explicabo placeat aliquam nobis fugit id totam numquam.</motion.p>

<div className="flex flex-col gap-2 justify-center items-center">
<motion.div  initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}}  className="rounded-full w-20 h-20 bg-cover  flex overflow-hidden shadow-md">

<img className=' ' src={timg} />

</motion.div>
<motion.div initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}}  className="flex flex-col justify-center items-center gap-2">
<motion.h1 initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}}  className='font-sans'>Jacob Jones</motion.h1>
<motion.p initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:.6}}} >Chief Product officer</motion.p>
</motion.div>
</div>


    </div>
  )
}

export default Testimonial
 