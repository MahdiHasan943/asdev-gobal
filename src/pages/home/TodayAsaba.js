import React from 'react'

import Tbg from '../../images/homeImage/asabaatnight.png'
import { BsChevronRight } from "react-icons/bs";
import './todayasaba.css'
import ImageOne from '../../images/homeImage/Image.png'
import Imagetwo from '../../images/homeImage/image2.png'
import Imagethree from '../../images/homeImage/Image3.png'
import ImageFour from '../../images/homeImage/Image4.png'
import ImageFive from '../../images/homeImage/Image5.png'
import ImageSix from '../../images/homeImage/Image6.png'
import ImageSeven from '../../images/homeImage/Image7.png'
import ImageEight from '../../images/homeImage/Image8.png'


const TodayAsaba = () => {
  return (
      <div className='py-10 lg:flex h-auto bg-no-repeat bg-cover bg-center	items-center min-h-screen '  style={{ backgroundImage: `url(${Tbg})` }}>
          
         
              <div className=" lg:w-[50%]">
              <div className=" hero-overly flex justify-center">
              <div className="">
                
            
              <h1 className='text-start mt-[100px]  today'>
              Today Asaba is one of the <br /> most diverse society in Nigeria
              </h1>
              <p className='text-start  mt-[50px] mb-[100px] One'>
                  
                  One of ASDEV81 Club major objective is to <br />
                  promote and organize activities that will <br />
                              enhance the welfare of members and of <br />
                              Asaba people in general.
              </p>
              <div className="    flex items-center py-8">
                  <button className='discoverbtn mx-auto    mb-[-90px]   flex justify-between py-6 px-12'>
                          <span className='discoverText'>
                              Discover ASDEV81 Community </span>
                         <span className='text-[black] font-bold mx-4'> <BsChevronRight />  </span>
                 
                  </button>
                
                  </div>
                  </div>
              
        </div>
              </div>


              <div className="lg:w-[50%] ">
                  
              <div className="flex justify-center lg:justify-end  mt-[120px]  lg:mt-[-00px]">
                  <div className="">
                      <img className='mr-[20px] mt-[50px]' src={ImageOne} alt="" />
                  </div>
                  <div className="">
                      <img src={Imagetwo} alt="" />
                      <img src={Imagethree} alt="" />
                  </div>
              </div>


              <div className="">
                  <div className="flex justify-center lg:justify-end mt-[30px]">
                      <img className='mx-4' src={ImageFour} alt="" />
                      <img src={ImageFive} alt="" />
                  </div>

                  <div className="flex justify-center lg:justify-end mt-[30px]">
                      <img src={ImageSix} alt="" />
                      <img className='mx-4' src={ImageSeven} alt="" />
                      <img src={ImageEight} alt="" />
                  </div>
                  
              </div>
          </div>

    </div>
  )
}

export default TodayAsaba