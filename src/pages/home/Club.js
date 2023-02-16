import React from 'react'
import './club.css'
import calender from '../../images/homeImage/cal.jpg'
import gallary from '../../images/homeImage/gal.png'

import like from '../../images/homeImage/Vector@2x.png'
import image2 from '../../images/homeImage/image2.png'

const Club = () => {
  return (
      <div>
          
          <div className="px-[20px] sm:pl-[100px]">
              
          <h1 className='py-4 clubH1'>
          Our Club Objectives
              </h1>
              <p className='clubp'>We represent a well diversed members of Asaba families but with similar objectives.</p>
          </div>

          <div className="px-[20px] relative z-50 pt-[70px] sm:px-[100px] gap-6 grid lg:grid-cols-2">
              
              <div className="px-14 shadow-lg mb-[250px] lg:mb-0 py-10 bg-[#DAF5F2] rounded-[16px] w-full h-auto ">
                  <h1 className='member'>For Members</h1>
                  <p className='Create py-6'>Create a forum for members to contribute towards the general progress and aspiration of ASABA people including member themselves</p>
                  <img className='h-[250px] shadow-sm  bg-bottom-[white] w-[300px] mb-[-190px]' src={calender} alt="" />

                  {/* className='h-[220px] z-50 w-[300px] absolute top-[380px] bottom-0' */}
              </div>
              <div className="bg-[#E5EFFF] shadow-lg mb-12 lg:mb-0 px-14 py-10 rounded-[16px] w-full h-auto">
              <h1 className='For'>For Asaba People</h1>
                  <p className='Create py-6'>Create a forum for members to contribute towards the general progress and aspiration of ASABA people including member themselves</p>
                  
                  <img className='h-[220px] shadow-lg bg-bottom-[white] w-[300px] mb-[-100px]' src={gallary} alt="" />

                     
              </div>


          </div>

          <div className="flex w-[100%] relative px-[20px] justify-center sm:px-[100px]  ">
          <div className="bg-[#FCF3D7] z-0 mt-16 lg:ml-[-180px] lg:w-[50%]  mb-12 lg:mb-0 px-14 py-10 rounded-[23px] h-auto">
              <h1 className='general'>The General Public</h1>
                  <p className='existing py-6'>Co-operate in any way possible with exiting <br /> Clubs and association with similar objectives in <br /> working for the overall progress of ASABA town.</p>
                  <div className="relative">
                  <img className='h-[180px] w-[300px] rounded-5xl mb-[-100px]' src={image2} alt="" />
                   <img className='absolute left-[250px] bottom-20' src={like} alt="" />
                  </div>
              </div>
             
              <div className="absolute px-[100px] left-[60%] hidden lg:block 2xl:left-[65%] top-[100px]">
              <div className="blue  ">
                  
                  <h1 className='we'>We are also keen on...</h1>
                  <p className='unity'>Promoting unity and co-operation among various
                      ideological groups in ASABA.</p>
                      <button className='bt'>
                          <span className='aboutbt'>                  ABOUT THE CLUB</span>
                  </button>
              </div>
              </div>
            
         </div>
    </div>
  )
}

export default Club