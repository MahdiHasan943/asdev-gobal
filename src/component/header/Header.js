import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaCentos } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { BsCartCheck,BsArrowRightShort } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

import './header.css'
import { motion } from "framer-motion"


import Logo from '../../images/homeImage/ASDEVLogo.png'



const Header = () => {





  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  
    const menu = <React.Fragment>
      
        
     

    <li className=' py-2 lg:py-0'>
              <NavLink
                to='/about'
                aria-label='About'
                title='About'
                className={({ isActive }) =>
                  isActive
                    ? ' font1 navmenuTrack px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]  rounded-full    duration-200 '
                    : 'navmenuUnTrack  font1 px-[12px] py-[8px]        xl:px-[10px] xl:py-[10px]      transition-colors duration-200'
                }
              >
             About the Club
              </NavLink>
        </li>
        
        <li className=' py-2 lg:py-0'>
              <NavLink
                to='/community'
                aria-label='The Community'
                title='The Community'
                className={({ isActive }) =>
                  isActive
                    ? 'font1 navmenuTrack px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]    rounded-full    duration-200'
                    : 'navmenuUnTrack  font1 px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]      transition-colors duration-200'
                }
              >
         The Community
              </NavLink>
            </li>
           
            <li className=' py-2 lg:py-0'>
              <NavLink
                to='/activities'
                aria-label='Our Activities'
                title='Our Activities'
                className={({ isActive }) =>
                  isActive
                    ? 'font1 navmenuTrack px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]    rounded-full    duration-200'
                    : 'navmenuUnTrack  font1  px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]     transition-colors duration-200'
                }
              >
        Our Activities
              </NavLink>
        </li>
        

        <li className=' py-2 lg:py-0'>
              <NavLink
                to='/announcements'
                aria-label='Announcements'
                title='Announcements'
                className={({ isActive }) =>
                  isActive
                    ? 'font1 navmenuTrack px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]    rounded-full    duration-200'
                    : 'navmenuUnTrack  font1 px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]      transition-colors duration-200'
                }
              >
        Announcements
              </NavLink>
            </li>

        

        <li className=' py-2 lg:py-0'>
              <NavLink
                to='/events'
                aria-label='Events'
                title='Events'
                className={({ isActive }) =>
                  isActive
                    ? 'font1 navmenuTrack px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]    rounded-full    duration-200'
                    : 'navmenuUnTrack  font1 px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]      transition-colors duration-200'
                }
              >
        Events
              </NavLink>
            </li>


        <li className=' py-2 lg:py-0'>
              <NavLink
                to='/contact'
                aria-label='Contact'
                title='Contact'
                className={({ isActive }) =>
                  isActive
                    ? 'font1 navmenuTrack px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]    rounded-full    duration-200'
                    : 'navmenuUnTrack  font1 px-[10px] py-[8px]        xl:px-[10px] xl:py-[10px]      transition-colors duration-200'
                }
              >
      Contact
              </NavLink>
            </li>



  </React.Fragment>
  

  return (
    <>
      
          <header className='px-10  sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[120px] 2xl:px-[144px]'>
          <div className="sm:flex  borders  justify-between py-[12px]  ">
         
        <div className="flex  justify-center sm:justify-start items-center">
            <Link to={'/'}><img className='HeaderLogo animate-pop-in' src={Logo} alt="" /></Link>
            <h1 className='animate-pop-in ASDEV'>ASDEV 81 Club Global</h1>

        </div>
        <div className="flex justify-center sm:justify-start items-center">
            <p className='download rounded-full sm:mx-4'>DOWNLOAD</p>
            <p className='register rounded-full mx-4 '>Register</p>
            <p className='signIn  rounded-full  sm:mx-4'>Sign In</p>

        </div>
 
    </div>
    

 
      </header>
      <div className='nav shadow-md lg:shadow-sm px-10  py-6 sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[120px] 2xl:px-[144px]'>
        <div className='  flex it py-6 mx-auto  '>
       
           
            

      
            
  
         
    <div className='flex    items-center justify-between'>
        <div className="flex  items-center"> 
        <ul className=' items-center hidden space-x-8 lg:flex '>
        {menu}
      
        
     <div className="flex items-center">
       
    
    </div>
  

</ul>
  
     
      </div>
            
     

           
            </div>
            

            
                
 
     
     
     
  
    <div className=" ml-auto lg:px-[20px]">
   
    <label class="hidden  lg:block relative block">
<span class="sr-only">Search</span>
<span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#78909C"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>


</svg>
</span>
<input class=" placeholder:text-[#919699] block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-[#E3E5E5]  focus:[#E3E5E5]  focus:ring-1 sm:text-sm" placeholder="Search " type="text" name="search"/>
</label>
               
                <div className='lg:hidden py-4 overflow-hidden  flex justify-between'>
                <div class="mr-[20px] sm:mr-[200px] relative">
<span class="sr-only">Search</span>
<span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#78909C"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>


</svg>
</span>
<input class=" placeholder:text-[#919699] block bg-white w-full border border-slate-300 rounded-full py-3 pl-9 pr-3 sm:pl-16 sm:pr-10 shadow-sm focus:outline-[#E3E5E5]  focus:[#E3E5E5]  focus:ring-1 sm:text-sm" placeholder="Search " type="text" name="search"/>
</div>
     
              <div className="">
              {isMenuOpen ? (
          
          <motion.button
          animate={{
            // scale: [1,1.2,1.4,1],
              rotate: [ 40, 30, 0 , 30 ,0],
              
        
            // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
                      aria-label='Close Menu'
                      className=' px-3 py-2 retalive -mr-2  rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                      >
                      <svg className='svg   w-8 text-white' viewBox='0 0 24 24'>
                          <path
                          fill='#098b99'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                      </svg>
            </motion.button> 
            
                
              
                    )
                        : (
            <div className="flex items-center">


                 
                <button
                aria-label='Open Menu'
                title='Open Menu'
                className='open px-3 py-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline bg-[#e0eafd]'
                onClick={() => setIsMenuOpen(true)}
            >
                <svg className='w-8 text-white' viewBox='0 0 24 24'>
                <path
                    fill='#367bf5'
                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                    fill='#367bf5'
                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                    fill='#367bf5'
                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
                </svg>
                            </button>
              
              
              
                       </div>
                         )
                        
                        
                        
     }
       </div>
                    
    
                </div>
            </div>
          
          

                                
 

            
        </div>
     
        {isMenuOpen && (
        <div className='absolute bg-[white] shadow-xl  top-30 left-0 w-[100%] z-40'>
         
                    <div className=" m px-8 pb-4 ">
                        <ul className='block lg:hidden border-t-[1px] border-[#eee]'>
          {menu}
          
        </ul>
        

        
        
     
                  </div>
                    


        </div>
      )}
</div>
         
      </>
  )
}

export default Header