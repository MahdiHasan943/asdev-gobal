import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
import { Link } from 'react-router-dom';


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
                          <Link to={'/community'}>
                          <button className='discoverbtn mx-auto  FBT  mb-[-90px]   flex justify-between py-6 px-12'>
                          <span className='discoverText'>
                              Discover ASDEV81 Community </span>
                         <span className='text-[black] font-bold mx-4'> <BsChevronRight />  </span>
                 
                              </button>
                          </Link>
                
                  </div>
                  </div>
              
        </div>
              </div>


              <div className="lg:w-[50%] ">
                  
              <div className="sm:flex justify-center lg:justify-end  mt-[120px]  lg:mt-[-00px]">
                  <div className="">
                      <LazyLoadImage className='mx-auto sm:mr-[20px] mt-[50px]' src={ImageOne} alt="" />
                  </div>
                  <div className="">
                      <LazyLoadImage className='mx-auto' src={Imagetwo} alt="" />
                      <LazyLoadImage className='mx-auto' src={Imagethree} alt="" />
                  </div>
              </div>


              <div className="">
                  <div className="sm:flex justify-center lg:justify-end mt-[30px]">
                      <LazyLoadImage className='mx-auto sm:mx-4' src={ImageFour} alt="" />
                      <LazyLoadImage className='mt-4 sm:mt-0 mx-auto sm:mx-[1px]' src={ImageFive} alt="" />
                  </div>

                  <div className="sm:flex  justify-center lg:justify-end mt-[30px]">
                      <LazyLoadImage className='mx-auto sm:mx-[0.1px]' src={ImageSix} alt="" />
                      <LazyLoadImage className='mx-auto my-3 sm:my-0 sm:mx-4' src={ImageSeven} alt="" />
                      <LazyLoadImage className='mx-auto sm:mx-[0.1px]' src={ImageEight} alt="" />
                  </div>
                  
              </div>
          </div>

    </div>
  )
}

export default TodayAsaba