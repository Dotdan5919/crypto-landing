import React, { useEffect, useState } from 'react'
import { FaBook, FaHome, FaMarker } from 'react-icons/fa';
import { FaDiamond, FaX } from 'react-icons/fa6';
import {motion} from 'motion/react';

const IconDisplay = ({number,title,description}) => {

    const [faicon,setfaIcon]=useState();
    


    useEffect(()=>{

        switch (title) {
            case 'Big Community':
                setfaIcon(<FaHome/>);
                break;
        
                case 'High Quality':
                    setfaIcon(<FaDiamond/>);
                    break;
                    case 'Huge Collection':
                        setfaIcon(<FaMarker/>);
                        break;
                        case 'Top Resource':
                            setfaIcon(<FaBook/>);
                            break;
                            default:
                                setfaIcon(<FaX/>);
                            }
       

    },[title])



  return (


    <motion.div  whileHover={{ scale: 1.1 }} // Increase size on hover
    whileTap={{ scale: 0.9 }} className='flex  flex-col items-center  justify-center relative z-50 cursor-pointer max-w-[270px] '>
      
    <div className="rounded-full w-50 h-50 p-5 text-white bg-gradient-to-r
    
     from-my-blue to-my-offblue text-[30px] absolute   mb-44">{faicon}</div>

     <div className='bg-gradient-to-b from-blue-950 flex flex-col text-center mt-6 h-auto ' >
     <h1 className="font-sans text-xl text-white px-[32px] py-[16px]">{title}</h1>
     <p className="text-sm text-white ">{description}</p>
     </div>
    <div className='font-sans text-white opacity-25 text-[50px]'> {number}</div>

    </motion.div>
  )
}

export default IconDisplay
