import React from 'react'
import Btngrad2 from '../components/Btngrad2'
import ai_image from '../ImageAssets/ai_image3.png'


const Portfolio = () => {
  return (
    <div className='relative flex  justify-start gap-3  bg-gradient-to-r from-blue-500  to-purple-400 mx-auto  w-2/3 rounded-2xl p-7 my-14'>
    <div className="flex flex-col"> 
    <h1 className="font-sans text-white text-2xl">Create your NFT Portfolio</h1>
      <p className='text-white'> Get updated with news, tips and tricks</p>

      <Btngrad2 txt="Join Now" />
      </div>
      <div className="flex relative">
      <div className=" absolute right-0 rounded-full w-52 h-52 bg-gradient-to-r from-orange-700 to-yellow-300 p-4">
    
      </div>
      <img src={ai_image} className='absolute w-32 left-10 z-50'/>
    <div className="absolute right-10 rounded-full w-24 h-24 border-2 border-gray-200"></div>
 
    </div>
      </div>
  )
}

export default Portfolio
