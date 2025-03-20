import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white w-full gap-4 mt-24 pt-12 flex justify-center items-center flex-col  '>
    

    <div className="flex flex-col w-full gap-2 justify-center items-center"> 

    <h1 className='font-sans text-[30px]'>Get Newsletter</h1>

    <p>Get Updates with news, tip & tricks</p>
    </div>

    <form className='flex flex-col gap-4 w-1/3 justify-center items-center'>
    
<input type="text" name='newsletter' placeholder='Your email' className='w-full bg-red-600  px-4 py-4 rounded-md  from-gray-950 to-gray-800 bg-gradient-to-b outline-none ' />
<div className="flex hover:border-white  border-transparent border-2 rounded-md p-1 transition-all transition-slow  ease-in w-fit">
<button type="submit" className='  border-transparent border-2 rounded-md p-1 transition-all transition-slow  ease-in  justify-center items-center bg-gradient-to-r from-my-offblue to-my-blue    px-[16px]  py-[8px] text-white font-sans text-xs'>Subscribe </button>
</div>
    
    </form>

    



    </div>
  )
}

export default Newsletter
