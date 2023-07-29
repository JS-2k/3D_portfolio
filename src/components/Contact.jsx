import {AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import {BsPerson} from 'react-icons/bs'; 
import { Link } from 'react-router-dom';
import Background from "./Background";

const Contact = () => {

  return (
    <div className="bg-black">
      <div className=''>
      <h1 className="text-center text-4xl font-bold text-white mb-5 pt-16"  data-aos='fade-up'>Contact</h1>
      <div className='justify-center flex items-center h-screen'>
      <form action="https://getform.io/f/7cf7adc4-c0be-4fd5-8c98-a7dafca0a095" method="POST" encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col" data-aos="fade-right">
                    <label className="uppercase text-sm py-2 font-bold text-white">Name</label>
                    <input className="border-2 bg-white/20 text-white rounded-lg p-3 flex border-gray-300" type="text" name="name" required />
                </div>
                <div className="flex flex-col" data-aos="fade-left">
                    <label className="uppercase text-sm py-2 font-bold text-white">Phone Number</label>
                    <input className="border-2 bg-white/20 text-white rounded-lg p-3 flex border-gray-300" type="text" name="phone" required/>
                </div>
            </div>
            <div className="flex flex-col py-2" data-aos="zoom-in">
                    <label className="uppercase text-sm py-2 font-bold text-white">Email</label>
                    <input className="border-2 bg-white/20 text-white rounded-lg p-3 flex border-gray-300" type="email" name="email" required />
                </div>
                <div className="flex flex-col py-2" data-aos="zoom-in">
                    <label className="uppercase text-sm py-2 font-bold text-white">Subject</label>
                    <input className="border-2 bg-white/20 text-white rounded-lg p-3 flex border-gray-300" type="text" name="subject" required />
                </div>
                <div className="flex flex-col py-2" data-aos="zoom-in">
                    <label className="uppercase text-sm py-2 font-bold text-white">Message</label>
                    <textarea className="border-2 bg-white/20 text-white rounded-lg p-3" rows='5' name="message" required></textarea>
                </div>
    
             <button  className="bg-white/60 hover:bg-white/50 border text-gray-100 mt-4 w-full p-4 rounded-lg">Submit</button>
        </form>
        </div>
        <div className="sticky bottom-0 p-3 w-full bg-white/20 text-white mt-3">
         <div className='md:text-center flex justify-center gap-8 font-bold text-white'>
         <Link link to={'/'}><AiOutlineHome size={20} className='cursor-pointer  hover:text-white' /></Link>
         <Link link to={'/skills'}><AiOutlineProject size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
         <Link link to={'/about'}><BsPerson size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
         <Link link to={'/contact'}><AiOutlineMail size={20} className='cursor-pointer  hover:text-white' href="#" /></Link>
         </div>
         </div>
      </div>
      <Background />
  </div>
  )
}

export default Contact