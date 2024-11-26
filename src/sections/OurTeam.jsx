import React from 'react'
import Uniquetitle from '../components/Uniquetitle'
import TeamMember from '../components/TeamMember'
import Member1 from '../ImageAssets/member1.jpg'
import Member2 from '../ImageAssets/member2.jpg'
import Member3 from '../ImageAssets/member3.jpg'
import Member4 from '../ImageAssets/member4.jpg'
import logo1 from '../ImageAssets/partners_logo/logo1.png'
import logo2 from '../ImageAssets/partners_logo/logo2.png'
import logo3 from '../ImageAssets/partners_logo/logo3.png'
import logo4 from '../ImageAssets/partners_logo/logo4.png'
import logo5 from '../ImageAssets/partners_logo/logo5.png'
import logo6 from '../ImageAssets/partners_logo/logo6.png'





const OurTeam = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[32px]'>
      
    <Uniquetitle txt="Team Members"/>

    <h1 className="font-sans text-white text-center text-[32px]">
    Our Amazing Team
       <br/>  Members</h1>  
       
       

       <div className="flex gap-10 mx-auto w-40  justify-center items-center">
       
       
       
       <TeamMember name="Jane Cooper" img={Member1} position="Founder & CEO" />
       <TeamMember name="Jenny Wilson" img={Member2} position="Designer" />
       <TeamMember name="Ralph Edwards" img={Member3} position="Developer" />
       <TeamMember name="Cody Fisher" img={Member4} position="3D Artist" />



       
       </div>


       <div className="[ bg-gradient-to-b from-white/20 to-white/20 ]
[ border-[1px] border-solid border-white border-opacity-40 ] rounded-full  p-3">
       
       <h1 className='font-sans text-white text-[10px]'> We are Partnered with Top brands</h1>
       
       
       
       </div>

       <div className="flex gap-10"> 
       <img src={logo1} className='w-12 opacity-20'/>
       <img src={logo2} className='w-12 opacity-20'/>
       <img src={logo3} className='w-12 opacity-20'/>
       <img src={logo4} className='w-12 opacity-20'/>
       <img src={logo5} className='w-12 opacity-20'/>
       <img src={logo6} className='w-12 opacity-20'/>

       </div>


    </div>
  )
}

export default OurTeam
