import Loader from './Loader';
import  { useState, useEffect } from 'react';
import Person from '../assets/person.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import {AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import {BsPerson} from 'react-icons/bs'; 
import { Link } from 'react-router-dom';


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate data loading or asynchronous operations
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace this with your actual data loading logic
  }, []);

  // text transition
  useEffect(()=>{
    AOS.init({duration: 2000});
  })


  return (
    <>
    <div>
      {

      isLoading ? <Loader /> : 
      <div className="bg-black">
         
          
      <div className="h-screen flex justify-center items-center text-white">
        <div className='absolute'>
        <h1 className='md:text-8xl text-4xl font-bold ' data-aos='fade-right'>I&apos;m Jayasundar</h1>
        <h1 data-aos='fade-right'>
        <TypeAnimation 
                 sequence={[
                   // Same substring at the start will only be typed out once, initially
                   'full stack developer',
                   2000, // wait 1s before replacing "Mice" with "Hamsters"
                   'blockchain solidity',
                   2000,
                   'web 3.0',
                   2000,
                   'dApps',
                   2000
                 ]}
                 wrapper="div"
                 cursor={true}
                 speed={50}
                 style={{ fontSize: '1em', paddingLeft: '5px' }}
                 repeat={Infinity}
                 />
        </h1>
        </div>

      <video  autoPlay={true}
      loop={true}
      controls={false} 
      playsInline={false}
      muted >
      <source  src={Person} type="video/mp4"/>
      </video>


      </div>
      <div className="sticky bottom-0 p-3 w-full bg-white/10 text-white">
          <div className='md:text-center flex justify-center gap-8 font-bold text-white'>
          <Link link to={'/'}><AiOutlineHome size={20} className='cursor-pointer  hover:text-white' /></Link>
          <Link link to={'/skills'}><AiOutlineProject size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
          <Link link to={'/about'}><BsPerson size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
          <Link link to={'/contact'}><AiOutlineMail size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
          </div>
          </div>      
      </div>
    }
    </div>
       
    </>
  )
}

export default Home;