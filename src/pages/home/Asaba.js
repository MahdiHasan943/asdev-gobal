import React from 'react'


import './asaba.css'
import bg from '../../images/homeImage/clean.png'

const Asaba = () => {
  return (
      <div className="hero  flex justify-start xl:h-[715px] 2xl:h-[900px] mb-12 min-h-screen    bgImg " style={{ backgroundImage: `url(${bg})` }}>
          
          <div className="bgP hero-overly ">
              <div className="">
                  
              <p className='text-start py-4 pride'>
                  We pride ouself as the most elite Asaba social club
              </p>
            
              <h1 className='text-start py-4 asabaH1'>
              Asaba is our home!
              </h1>
              <p className='text-start Global'>
                  
                  As a Global Socio-Cultural Club we
                  aim to <br /> create a forum for members to contribute <br />
                  towards the general progress and <br /> aspirations of
                  Asaba people.
              </p>
              <div className="text-start sm:flex items-center py-8">
                  <button className='button FBT py-4 px-16'>
                          <span className='btText'>
                          CLUB ACTIVITIES
                 </span>
                      </button>
                  
                  <span className=' opacity-80 font-light px-4 sm:px-8 jump'>
                  JUMP IN
                  </span>
                  </div>
                  </div>
              
        </div>

    </div>
  )
}

export default Asaba