import logo from './logo.svg';
import './App.css';
import Btngrad from './components/Btngrad.jsx'
import Newbtn from './components/Newbtn.jsx'
import Navigation from './components/Navigation.jsx';
import Hero from './sections/Hero.jsx';
import Aboutus from './sections/Aboutus.jsx';
import OurSpecialty from './sections/OurSpecialty.jsx';
import JoinNFT from './sections/JoinNFT.jsx';
import OurCollection from './sections/OurCollection.jsx';
import blueblur from './ImageAssets/blueblur.png';
import Roadmap from './sections/Roadmap.jsx'
import OurTeam from './sections/OurTeam.jsx'
import Testimonial from './sections/Testimonial.jsx'
import Faq from './sections/Faq.jsx';



function App() {
  return (
    <div className="w-full md:px-[120px] relative  bg-b-blue flex-col justify-center  gap-2 overflow-hidden ">
     
   <Hero/>
   <img src={blueblur} className='absolute  -top-80  left-80 z-10' />
   <Aboutus/>
   <img src={blueblur} className='absolute  -top-280  left-80 z-10' />
   <OurSpecialty/>
   <img src={blueblur} className='absolute  -top-380  left-80 -z-10' />
   <JoinNFT/>
   <img src={blueblur} className='absolute  -top-580  left-80 -z-10' />
   <OurCollection/>
   <img src={blueblur} className='absolute  -top-580  left-80 -z-10' />
   <Roadmap/>
   <img src={blueblur} className='absolute  -top-580  left-80 -z-10' />

   <OurTeam/>
<Testimonial/>
<Faq/>


    </div>
  );
}

export default App;
