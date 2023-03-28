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
              
              <div className="px-14 shadow-lg mb-10 lg:mb-0 py-10 bg-[#DAF5F2] rounded-[16px] w-full h-auto ">
              
                  <p className='Create py-6'><></>1. ASDEV81 is a club of like-minded indigenes aspired to contribute towards and participate in all aspects of the development Asaba and its environment.</p>
                  <p className='Create py-6'><></>2. To Co-operate in any way possible with existing Clubs and association with similar objectives in working for the overall progress of Asaba Town.</p>
                  <div className="relative">
                  
                  </div>
                  {/* className='h-[220px] z-50 w-[300px] absolute top-[380px] bottom-0' */}
              </div>
              <div className="bg-[#E5EFFF] shadow-lg mb-12 lg:mb-0 px-14 py-10 rounded-[16px] w-full h-auto">
        
                  <p className='Create py-6'>3. To promote unity and cooperation among various ideological groups in Asaba.</p>
                  <p className='Create py-6'>4. To foster the spirit of cooperation and greater understanding among the people of Asaba.</p>

                     
              </div>


          </div>

          <div className="flex w-[100%] px-4  relative lg:px-[40px] justify-center sm:px-[100px]  ">
          <div className="bg-[#FCF3D7] z-0 mt-6 sm:mt-14 w-full sm:w-[93%] mx-auto  mb-12 lg:mb-0 px-14 py-10 rounded-[46px] h-auto">
             
                  <p className='existing py-8'>5. To generate funds for self help in various ways.</p>
                  <p className='existing py-8'>6. To promote and organise activities that will enhance the welfare of memebers and of Asaba people such funding education for the less privileged, job creation for youths, providing health facilities and sports promotion/sponsorship.</p>
                  <p className='existing py-8'>7. To promote and project Asaba heritage, history and culture through high profile activities that could attract national and international recognition</p>
                  <div className="relative">
    
                  </div>
              </div>
             
             
             

            
          
          </div>
            
    </div>
  )
}

export default Club