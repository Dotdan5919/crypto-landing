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

function App() {
  return (
    <div className="w-full md:px-[120px] relative  bg-b-blue flex-col justify-center  gap-2 overflow-hidden ">
     
   <Hero/>
   <img src={blueblur} className='absolute  -top-80  left-80 z-0' />
   <Aboutus/>
   <img src={blueblur} className='absolute  -top-280  left-80 z-0' />
   <OurSpecialty/>
   <img src={blueblur} className='absolute  -top-380  left-80 z-0' />
   <JoinNFT/>
   <img src={blueblur} className='absolute  -top-580  left-80 z-0' />
   <OurCollection/>
   
    </div>
  );
}

export default App;
