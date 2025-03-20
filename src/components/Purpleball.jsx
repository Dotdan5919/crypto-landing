import React from 'react'
import {motion} from 'motion/react'
const Purpleball = ({classes}) => {
  return (
    
    <motion.span initial={{scale:0,opacity:0}}   whileInView={{opacity:1,scale:1.5, transition:{type:'spring',delay:.1,duration:.2,stiffness:120}}}    className={"rounded-full bg-gradient-to-r from-my-blue to-purple-700 absolute p-6" + "" +classes}>
    </motion.span>
    
  )
}

export default Purpleball
