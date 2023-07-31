import html from '../assets/tech/html.png';
import css from '../assets/tech/css.png';
import javascript from '../assets/tech/javascript.png';
import reactjs from '../assets/tech/reactjs.png';
import tailwind from '../assets/tech/tailwind.png';
import typescript from '../assets/tech/typescript.png';
import redux from '../assets/tech/redux.png';
import threejs from '../assets/tech/threejs.svg';
import nodejs from '../assets/tech/nodejs.png';
import mongodb from '../assets/tech/mongodb.png';
import git from '../assets/tech/git.png';
import solidity from '../assets/tech/solidity.png';
import web3 from '../assets/tech/web3js.png';
import FL from '../assets/tech/flstudio.svg';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import {BsPerson} from 'react-icons/bs'; 
import Tilt from 'react-parallax-tilt';
import js from '../assets/jayasundarraajan.pdf';
import Background from './Background';
import express from '../assets/tech/express.svg';
import angular from '../assets/tech/angular.svg';


const Skills = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  })

  return (
    
    <div className="m-auto bg-black ">
      <div className=' h-screen '>
        
      <h1 className="text-center text-4xl font-bold text-white mb-5 pt-16"  data-aos='fade-up'>Skills</h1>
      <div className='justify-center flex'>
      <Tilt className='bg-white/20 border md:w-50 rounded-md p-5'  data-aos='fade-right'>
      <div className='rounded flex gap-5 justify-center mt-5 ' data-aos='fade-down'>
        <img src={html} className='border rounded' width={40}/>
        <img src={css} className='border rounded' width={40}/>
        <img src={javascript} className='border rounded' width={40}/>
        <img src={typescript} className='border rounded' width={40}/>
        <img src={reactjs} className='border rounded' width={40}/>
        <img src={angular} className='border rounded' width={40}/>
        <img src={tailwind} className='border rounded' width={40}/> </div>

        <div className='rounded flex gap-5 justify-center mt-5 mb-5 'data-aos='zoom-in'>
        <img src={redux} className='border rounded' width={40}/>
        <img src={threejs} className='border text-white rounded' width={40}/>
        <img src={nodejs} className='border rounded' width={40}/>
        <img src={express} className='border rounded' width={40}/>
        <img src={mongodb} className='border rounded' width={40}/>
        </div>

        <div className='rounded flex gap-5 justify-center mt-5 mb-5 'data-aos='fade-up'>
        <img src={solidity} className='border rounded' width={40}/>
        <img src={web3} className='border rounded' width={40}/>
        <img src={git} className='border rounded' width={40}/>
        <img src={FL} className='border rounded' width={40}/>
        </div>
        </Tilt></div>
        <div className='py-16 justify-center flex items-center' data-aos="fade-up">
        <a href={js} download><button className='p-3 bg-white/20 
        rounded border 
        text-center 
        text-white 
        justify-center
       hover:bg-white/50'>Resume</button></a></div>
        </div>

        

     

      <div className="sticky bottom-0 p-3 w-full bg-white/10 text-white">
          <div className='md:text-center flex justify-center gap-8 font-bold text-white'>
          <Link link to={'/'}><AiOutlineHome size={20} className='cursor-pointer  hover:text-white' /></Link>
          <Link link to={'/skills'}><AiOutlineProject size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
          <Link link to={'/about'}><BsPerson size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
          <Link link to={'/contact'}><AiOutlineMail size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
          </div>
        </div> 
        <Background className="md:absolute" />
    </div>
  )
}

export default Skills