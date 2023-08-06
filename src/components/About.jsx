import {AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import {BsPerson} from 'react-icons/bs'; 
import { Link } from 'react-router-dom';
import { Tilt } from "react-tilt";
import yara from '../assets/yara.png';
import frigate from '../assets/frigate.jpg';
import dalle from '../assets/dalle.png';
import Background from "./Background";
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import { FaInstagram , FaLinkedinIn } from 'react-icons/fa';
import todo from '../assets/todo.png';

const About = () => {
  
  return (
    <div className="bg-black">
      
      <div className='md:h-screen'>
      <h1 className="text-center text-4xl font-bold text-white mb-5 pt-16 sm:justify-center"  data-aos='fade-up'>About</h1>
      <div className='md:flex grid grid-cols-1 place-self-center justify-center gap-5'>
        
      <div data-aos="fade-right" className="place-self-center">
      <a href="https://yaraelectronics.com/" target="blank">
      <Tilt className='bg-white/20 border rounded-md w-max p-5'  data-aos='fade-right'>
      <div className='rounded flex gap-5 justify-center mt-5 ' data-aos='fade-down'>
        <img src={yara} className="w-52" alt="" /></div> 
        <div data-aos="fade-up" className="mt-5">
        <h2 className="text-white text-center">E-commerce Web Application</h2>
        <h6 className="text-white font-[12px] text-center">html,css,bootstrap,javascript</h6></div>
        </Tilt></a></div>
        
        <div data-aos="zoom-in" className="place-self-center">
        <a href="https://www.frigate.ai/" target="blank">
        <Tilt className='bg-white/20 border rounded-md w-max p-5'  data-aos='fade-right'>
      <div className='rounded flex gap-5 justify-center mt-5 ' data-aos='fade-down'>
        <img src={frigate} className="w-52" alt="" /></div>
        <div data-aos="fade-up" className="mt-5">
        <h2 className="text-white text-center">Admin panel Web Application</h2>
        <h5 className="text-white text-center">Angular Framework</h5></div>
        </Tilt></a></div>
        
        <div data-aos="fade-left" className="place-self-center">
        <Tilt className='bg-white/20 border rounded-md w-max p-5'  data-aos='fade-right'>
      <div className='rounded flex gap-5 justify-center mt-5 ' data-aos='fade-down'>
        <img src={dalle} className="w-52" alt="" /></div>
        <div data-aos="fade-up" className="mt-9">
        <h2 className="text-white text-center">DALL-E clone Web Application</h2>
        <h5 className="text-white text-center">Mern Stack</h5></div>
        </Tilt></div>

        <div data-aos="fade-left" className="place-self-center">
        <Tilt className='bg-white/20 border rounded-md w-max p-5'  data-aos='fade-right'>
      <div className='rounded flex gap-5 justify-center mt-5 ' data-aos='fade-down'>
        <img src={todo} className="w-52" alt="" /></div>
        <div data-aos="fade-up" className="mt-9">
        <h2 className="text-white text-center">ToDo-list Web Application</h2>
        <h5 className="text-white text-center">Mern Stack</h5></div>
        </Tilt></div>
        </div>

        <div data-aos='fade-left' className="place-self-center text-center justify-center items-center flex mt-5">
        <div className='flex justify-between text-center items-center pt-5 max-w-[200px] w-full place-self-center'>
                    <a href="https://github.com/JS-2k" target='blank'><AiFillGithub className='cursor-pointer text-center text-white hover:text-purple-800' href="#" size={20} /></a>
                    <a href="https://youtube.com/@Vishnuh" target='blank'><AiFillYoutube className='cursor-pointer text-white hover:text-purple-800' size={20}/></a>
                    <a href="https://instagram.com/js_jayasundar?igshid=OGQ5ZDc2ODk2ZA==" target='blank'><FaInstagram className='cursor-pointer text-white  hover:text-purple-800' href="#" size={20}/></a>
                    <a href="https://www.linkedin.com/in/jayasundar-raajan-42475b204" target='blank'><FaLinkedinIn className='cursor-pointer text-white hover:text-purple-800' href="#" size={20}/></a>
                    </div>
                 </div>
        
        <p data-aos="fade-right" className="text-white my-12 text-center md:text-2xl text-1xl px-5 flex items-center justify-center">
        Hi, I&apos;m Jayasundar Raajan, a MERN Stack Developer passionate about building user-friendly web applications. 
        I specialize in MongoDB, Express.js, React.js, and Node.js. Problem-solving is my forte, and I love collaborating with teams to create innovative solutions.
        Now, Just expanding my skills in Blockchain solidity. 
        Let&apos;s connect and discuss exciting opportunities! Thank you for visiting my portfolio.</p>

        </div>

    <div className="sticky bottom-0 p-3 w-full bg-white/10 text-white">
         <div className='md:text-center flex justify-center gap-8 font-bold text-white'>
         <Link link to={'/'}><AiOutlineHome size={20} className='cursor-pointer  hover:text-white' /></Link>
         <Link link to={'/skills'}><AiOutlineProject size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
         <Link link to={'/about'}><BsPerson size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
         <Link link to={'/contact'}><AiOutlineMail size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
         </div>
         </div>

         <Background className="absolute w-full" />

    </div>
  )
}

export default About