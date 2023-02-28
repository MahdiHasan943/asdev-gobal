import React from 'react'

import hero from '../../images/homeImage/imagenewjpg.jpg'
import './hero.css'
const Hero = () => {
  return (

    <>
      <div className=" hero  flex justify-center lg:justify-start xl:h-[615px] 2xl:h-[900px]  min-h-screen"  style={{ backgroundImage: `url(${hero})` }}>
        <div className="">
        <div className="text-center lg:pl-4 mb-[200px] ">
                  <h1 className='py-4 animate-pop-in heroH1'>
                  Welcome to <br /> ASDEV 81 <br /> Club Global
                  </h1>
                  <p className='py-4 animate-pop-in september'>
        September 1967 was when it all <br /> started with our first meeting.
           </p>
                  <p className='py-4 animate-pop-in herop'>
                      
                  asdev jikebe nu - ka odili <br /> ahaba nma
                  </p>
                  
              </div>
        </div>
      </div>
    </>

  
  )
}

export default Hero