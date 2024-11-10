import logo from './logo.svg';
import './App.css';
import Btngrad from './components/Btngrad.jsx'
import Newbtn from './components/Newbtn.jsx'
import Navigation from './components/Navigation.jsx';
import Hero from './sections/Hero.jsx';
import Aboutus from './sections/Aboutus.jsx';
import OurSpecialty from './sections/OurSpecialty.jsx';
import JoinNFT from './sections/JoinNFT.jsx';

function App() {
  return (
    <div className="w-full md:px-[120px]   bg-b-blue flex-col justify-center  gap-2 overflow-hidden ">
     
   <Hero/>
   
   <Aboutus/>
  
   <OurSpecialty/>

   <JoinNFT/>
    
   
    </div>
  );
}

export default App;
