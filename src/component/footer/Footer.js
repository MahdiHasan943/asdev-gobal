import React from 'react'

import './footer.css'
import logo from '../../images/homeImage/ASDEVLogo.png'
import blob from '../../images/homeImage/Blob.png'
import { BiEnvelope } from "react-icons/bi";
import { SiFacebook,SiTwitter,SiInstagram } from "react-icons/si";


import { BsEnvelope,BsEnvelopeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className= 'px-8 py-[80px]'>
     
      <div className="flex justify-center">
        <div className="flex items-center ">
          <img src={logo} alt="" />
          <h1 className='text-[20px] sm:text-[34px] footerH1'>ASDEV 81 Club Global</h1>
          
        </div>
        

      </div>
      <div className="flex text-center footermenu justify-center pt-10">
        <p>
         <Link className='' to={'/home'}> Home</Link>  <span className='dot mx-[4px] sm:mx-[10px] '>•</span> <Link className='fmenu' to={'/about'}> About Us </Link> <span className='dot mx-[4px] sm:mx-[10px]'>•</span>
         <Link className='fmenu' to={'/community'}> Community </Link> <span className='dot mx-[4px] sm:mx-[10px]'>•</span>  <Link className='fmenu' to={'/activities'}>Activities</Link>
          <span className='dot mx-[4px] sm:mx-[10px]'>•</span>  <Link to={'/announcements'}>Announcements</Link> <span className='dot mx-[4px] sm:mx-[10px]'>•</span>
          <Link className='fmenu' to={'/events'}>Events </Link> <span className='dot mx-[4px] sm:mx-[10px]'>•</span> <Link className='fmenu' to={'contact'}> Contact Us</Link>
          </p>
      </div>
      <div className="">
      
        <div className="flex FBT  justify-center py-20 rounded-[4px]">
        <label class="relative box  block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 bottom-0 top-1 left-1 flex items-center pl-2">
            <svg class="h-10 w-7  fill-slate-300" viewBox="0 0 20 20">
      
              <BsEnvelopeFill className="text-[#919699] fill-[#919699] opacity-30  h-10 w-20" /></svg>
            </span>
            <span className='absolute hidden inset-y-0 bottom-2 top-2 right-3 rounded-md px-16  shadow-lg font-bold text-[15px] sm:flex items-center bg-[#367BF5] text-[white]'>I am in!</span>
  <input class="  h-[70px] boxInpt  z-50 font-[500] placeholder:text-slate-400 block bg-white  text-[20px] rounded-md py-2 pl-12 pr-3  shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Start Your Journey" type="text" name="search"/>
        </label>
        </div>
        <img className='z-0 ml-auto mr-[350px] mt-[-180px]' src={blob} alt="" />
        
      </div>

      <div className="">
        <div className="mx-auto flex justify-center items-center text-center">
          
          <span className=''>
            
            <SiFacebook className='mx-4 icon text-[40px] sm:w-[56px] sm:h-[56px]  rounded-full text-[#4267B2]  ' /></span>
              
          <span className='mx-4 sm:w-[56px] sm:h-[56px] flex justify-center items-center bg-[#1DA1F2] rounded-full'>
          <SiTwitter className='icon rounded-full text-white text-[40px]'/> 

          </span>
          <span className='mx-4 sm:w-[56px] sm:h-[56px] flex justify-center items-center bg-[#78909C] rounded-full'>
          <SiInstagram className='icon rounded-full text-white text-[40px]'/> 

          </span>         </div>
          
        <p className='text-center reserve pt-20 pb-8'>© asdev81.org | All rights reserved </p>
      </div>


    </div>
  )
}

export default Footer