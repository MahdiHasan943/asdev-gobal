import React from 'react'
import './club.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import calender from '../../images/homeImage/order.png'
import gallary from '../../images/homeImage/project.png'

import git from '../../images/homeImage/git.png'

import like from '../../images/homeImage/Vector@2x.png'
import image2 from '../../images/homeImage/image2.png'
import { Link } from 'react-router-dom'

const Club = () => {
  return (
      <div className='pb-10'>
          
          <div className="px-[20px] sm:pl-[100px]">
              
          <h1 className='py-4 clubH1'>
          Our Club Objectives
              </h1>
              <p className='clubp'>We represent a well diversed members of Asaba families but with similar objectives.</p>
          </div>





          <div className="px-[20px] relative z-50 pt-[70px] sm:px-[100px] gap-6 grid grid-cols-1 lg:grid-cols-2">
              
              <div className="px-14 shadow-lg mb-[250px] lg:mb-0 py-10 bg-[#DAF5F2] rounded-[16px] w-full h-auto ">
                  <h1 className='member'>For Members</h1>
                  <p className='Create py-6'>Create a forum for members to contribute towards the general progress and aspiration of ASABA people including member themselves</p>
                    
                  <div className="relative">
                  <LazyLoadImage className='h-[250px]    bg-bottom-[white] sm:w-[300px] mb-[-190px]' src={calender} alt="" />
                     <LazyLoadImage className='absolute right-40 top-0' src={git} alt="" />
                  </div>
                  {/* className='h-[220px] z-50 w-[300px] absolute top-[380px] bottom-0' */}
              </div>
              <div className="bg-[#E5EFFF] shadow-lg mb-12 lg:mb-0 px-14 py-10 rounded-[16px] w-full h-auto">
              <h1 className='For'>For Asaba People</h1>
                  <p className='Create py-6'>Create a forum for members to contribute towards the general progress and aspiration of ASABA people including member themselves</p>
                  
                  <LazyLoadImage className='h-[220px] shadow-lg bg-bottom-[white] sm:w-[300px] mb-[-100px]' src={gallary} alt="" />

                     
              </div>


          </div>


          

          

          <div className="flex w-[100%] relative px-[20px] justify-center sm:px-[100px]  ">
          <div className="bg-[#FCF3D7] z-0 mt-16 lg:ml-[-180px] lg:w-[50%]  mb-12 lg:mb-0 px-14 py-10 rounded-[23px] h-auto">
              <h1 className='general'>The General Public</h1>
                  <p className='existing py-8'>Co-operate in any way possible with exiting <br /> Clubs and association with similar objectives in <br /> working for the overall progress of ASABA town.</p>
                  <div className="relative">
                  <LazyLoadImage className='h-[180px] sm:w-[300px] rounded-5xl mb-[-100px]' src={image2} alt="" />
                   <LazyLoadImage className='absolute sm:left-[270px] h-[70px] bottom-20' src={like} alt="" />
                  </div>
              </div>
             
              <div className="absolute px-[100px] left-[60%] hidden lg:block 2xl:left-[65%] top-[100px]">
              <div className="blue px-8 py-10  ">
                  
                  <h1 className='we py-4'>We are also keen on...</h1>
                  <p className='unity py-5'>Promoting unity and <br /> co-operation among <br />  various
                      ideological <br /> groups in ASABA.</p>
                      <Link to={'/about'}>
                      <button className='bt my-4 bg-[white]  py-4 px-10 rounded-md'>
                          <span className='aboutbt'>                  ABOUT THE CLUB</span>
                          </button>
                      </Link>
              </div>
              </div>
            
          </div>
          <div className="flex justify-center py-10">
          <div className="   block  lg:hidden ">
              <div className="blue px-20 sm:px-[130px] py-10  ">
                  
                  <h1 className='we py-4'>We are also keen on...</h1>
                  <p className='unity py-5'>Promoting unity and <br /> co-operation among <br />  various
                      ideological <br /> groups in ASABA.</p>
                      <button className='bt my-4 bg-[white]  py-4 px-10 rounded-md'>
                          <span className='aboutbt'>                  ABOUT THE CLUB</span>
                  </button>
              </div>
              </div>
          </div>
            
    </div>
  )
}

export default Club