import React, { useRef } from 'react'
import useTitle from '../../component/hook/useTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';           

import './activities.css'
import activitiesBg from '../../images/activitiesImage/Aactivity.png'
import ImgOne from '../../images/activitiesImage/Image.png'

import ImgTwo from '../../images/activitiesImage/Image2.png'
import ImgThree from '../../images/activitiesImage/Image3.png'
import ImgFour from '../../images/activitiesImage/Image4.png'
import ImgFive from '../../images/activitiesImage/Image5.png'
import ImgSix from '../../images/activitiesImage/Image6.png'
import ImgSeven from '../../images/activitiesImage/Image7.png'
import ImgNine from '../../images/activitiesImage/Image8.png'
import Imgten from '../../images/activitiesImage/Image9.png'
import Img10 from '../../images/activitiesImage/Image10.png'


import TLetter from '../../images/activitiesImage/T.png'
import setting from '../../images/activitiesImage/setting.png'
import clock from '../../images/activitiesImage/clock1.png'
import user from '../../images/activitiesImage/user.jpg'

import arrow from '../../images/activitiesImage/arrow.jpg'

import sidebar from '../../images/activitiesImage/sidebar.png'
import GoToTop from '../../component/GoToTop'

import { LazyLoadImage } from 'react-lazy-load-image-component';




const Activities = () => {
  
  useTitle('Activities')
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent =  `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      {/* <div className='py-10 lg:flex bg-no-repeat bg-cover bg-center	items-center  min-h-screen '  style={{ backgroundImage: `url(${activitiesBg})` }}>

</div> */}
      
    <>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
         
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
          <SwiperSlide>      <div className='pt-10 m-0 min-h-screen ' >
        <LazyLoadImage height={100} width={100} className='h-[100vh] w-full' src={activitiesBg} alt="" />

            
          </div>
          </SwiperSlide>

          <SwiperSlide>      <div className='pt-10 m-0 min-h-screen ' >
        <LazyLoadImage height={100} width={100} className='h-[100vh] w-full' src={activitiesBg} alt="" />

          </div>
          </SwiperSlide>
         
   
      
       
        <div className=" autoplay-progress1" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      
    </>
      


      
      <div className="bg-[#3E4345] py-[100px]">
        <section>
        <h1 className='activityH1 justify-center'>
        Some of the ASDEV81 Club Asaba projects
        </h1>
        <p className='activityP text-center py-6 justify-center'>
        We cooperate with existing clubs and associations <br />
       with similar objectives in working for the overall progress of Asaba town.
        </p>
        </section>

        <section className='mx-auto px-8'>
          <div className="md:flex justify-center items-center ">
            <div className="">
            <LazyLoadImage  className='mx-auto h-[270px] w-full py-4 md:py-0' src={ImgOne} alt="" />
            </div>
            <div className="md:mx-8 ">
            <LazyLoadImage  className='mx-auto h-[270px] w-full py-4 md:py-0'src={ImgTwo} alt="" />
           </div>
            <div className="">
              <div className="bg-[#367BF5] h-[270px] rounded-lg flex justify-center py-10 px-8" >
                  
                <div className="bg-center bg-cover" style={{ backgroundImage: `url(${TLetter})` }} >
                <p className='Covid'>Asaba Day & <br /> COVID <br /> Outreach</p>
               </div>
                 </div>
            </div>
          </div>
          {/* 2 */}
          <div className="md:flex justify-center py-6 items-center ">


          <div className="">
              <div className="pill relative h-[270px] rounded-lg flex justify-center py-10 px-8" >
                  
                <div className="lg:w-[500px]  flex justify-center">
                  <p className='Covid'>Primary School <br /> Furniture Project</p>
                  
                </div>
                <LazyLoadImage  className='absolute h-[130px]   bottom-0 left-0' src={setting} alt="" />
                 </div>
            </div>
            <div className="md:mx-8">
            <LazyLoadImage className='mx-auto h-[270px] py-4 md:py-0 w-full' src={ImgThree} alt="" />
            </div>
            <div className=" ">
            <LazyLoadImage className='mx-auto h-[270px] py-4 w-full md:py-0'src={ImgFour} alt="" />
           </div>
           
          </div>


{/* 3 */}
          <div className="md:flex justify-center py-6 items-center ">


<div className="">
    <div className="overflow-hidden h-auto md:h-[564px]" >
        
    <LazyLoadImage className='w-full mx-auto' src={ImgFive} alt="" />
     
       </div>
            </div>
            {/* 2 */}
  <div className="md:mx-8 my-8 overflow-hidden  h-auto md:h-[564px]">
  <LazyLoadImage className='mx-auto  mb-6 md:py-0 w-full' src={ImgSix} alt="" />
              <div className="bg-[#37734A] relative flex items-center justify-center overflow-hidden py-[100px] md:py-[20px] lg:py-[40px]  xl:py-[80px] rounded-2xl  w-full">
              <LazyLoadImage className=' absolute top-14 right-6' src={clock} alt="" />
                <div className="overflow-hidden ">
                <p className='child '>Children <br /> Awareness <br /> Day
                  
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
  <div className="h-auto md:h-[564px] overflow-hidden my-4 md:my-0 ">
  <LazyLoadImage className='mx-auto  py-4 w-full md:py-0'src={ImgSeven} alt="" />
 </div>
 
          </div>
          
          {/* 4 */}


          <div className="md:flex justify-center md:mt-[-180px] lg:mt-[-0px] py-6 items-center ">
                       {/* 1 */}
            <div className="overflow-hidden md:flex  h-auto md:h-[564px]">
                 {/* 1 */}
              <div className="">
              <div className="bg-[#F3AA18] relative py-[100px] flex items-center justify-center overflow-hidden  md:h-[270px] rounded-2xl  w-full">
              <LazyLoadImage src={arrow} className='absolute top-4 left-3 h-[50px]' alt="" />
                  <div className="overflow-hidden ">
                <p className='dinner '>ASDEV Family <br /> Dinner
                  </p>
                </div>
              </div>
              <LazyLoadImage className='mt-6 w-full md:h-[270px]' src={Imgten} alt="" />

              </div>
              {/* 2*/}
              <div className="md:mx-8">
              <LazyLoadImage className='w-full mt-6 md:mt-0 md:h-[270px]' src={ImgNine} alt="" />
                <div className="md:grid grid-cols-2 gap-4 mt-6 ">
                <div className="">
              <div className="bg-[#367BF5] py-[100px]  flex items-center justify-center overflow-hidden  md:h-[270px] rounded-2xl  w-full">
                <div className="overflow-hidden h-[240px] md:h-[200px]  bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${sidebar})` }} >
                <p className='dinner1 '>Schools and <br /> Parents Day <br /> Out
                  </p>
                </div>
              </div>

              </div>
              <LazyLoadImage className='mt-6 md:h-[270px] md:mt-0 w-full' src={Img10} alt="" />

                </div>
              </div>

            </div>
                   {/* 2 */}
            <div className="mt-6  relative md:mt-0 overflow-hidden flex justify-center py-[100px] items-center linear px-[30px]  h-auto md:h-[564px]">
            <LazyLoadImage className='absolute bottom-0 h-[100px]' src={user} alt="" />
              <div className="mx-4">
              <p className='medical'>
                

                ASDEV81  <br />
                Medical <br />
                Outreach
                                    </p>
              </div>
            </div>
            
            
              </div>


          
             
        </section>
        <GoToTop></GoToTop>

</div>
    </>
  )
}

export default Activities