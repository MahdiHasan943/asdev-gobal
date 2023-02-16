import React from 'react'

import hero from '../../images/homeImage/hero.png'
import './hero.css'
const Hero = () => {
  return (
      <div className='px-4 py-12 lg:px-12'>
          
          <div className=" lg:flex lg:flex-row-reverse ">
              
          <div className="text-center lg:w-[50%]">
                  <h1 className='py-4 heroH1'>
                  Welcome to <br /> ASDEV 81 <br /> Club Global
                  </h1>
                  <p className='py-4 september'>
        September 1967 was when it all <br /> started with our first meeting.
           </p>
                  <p className='py-4 herop'>
                      
                  asdev jikebe nu - ka odili <br /> ahaba nma
                  </p>
                  
              </div>
              <div className="lg:w-[50%]">
                  <img className=' sm:h-[604px] mx-auto' src={hero} alt="" />
              </div>
              
          </div>

    </div>
  )
}

export default Hero