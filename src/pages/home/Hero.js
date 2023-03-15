import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import hero from '../../images/homeImage/imagenewjpg.jpg'
import test from '../../images/homeImage/1.png';


import './hero.css'
const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (

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
          className:"page",
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><div className=" hero  flex justify-center lg:justify-start xl:h-[615px] 2xl:h-[900px]  min-h-screen"  style={{ backgroundImage: `url(${hero})` }}>
       
       
        
       
       <div className="">
       <div className="text-center lg:pl-4 mb-[200px] ">
                 <h1 className='py-4 animate-pop-in heroH1'>
                 Welcome to <br /> ASDEV81 <br /> Club Asaba
                 </h1>
                 <p className='py-4 animate-pop-in september'>
       Founded in 1981 <br /> 
          </p>
                 <p className='py-4 animate-pop-in herop'>
                     
                 asdev jikebe nu - ka odili <br /> ahaba nma
                 </p>
                 
             </div>
       </div>
     </div></SwiperSlide>
        <SwiperSlide><div className=" hero  flex justify-center lg:justify-start xl:h-[615px] 2xl:h-[900px]  min-h-screen"  style={{ backgroundImage: `url(${hero})` }}>
       
       
        
       
       <div className="">
       <div className="text-center lg:pl-4 mb-[200px] ">
                 <h1 className='py-4 animate-pop-in heroH1'>
                 Welcome to <br /> ASDEV81 <br /> Club Asaba
                 </h1>
                 <p className='py-4 animate-pop-in september'>
                 Founded in 1981 <br /> 
          </p>
                 <p className='py-4 animate-pop-in herop'>
                     
                 asdev jikebe nu - ka odili <br /> ahaba nma
                 </p>
                 
             </div>
       </div>
     </div></SwiperSlide>
        <SwiperSlide><div className=" hero  flex justify-center lg:justify-start xl:h-[615px] 2xl:h-[900px]  min-h-screen"  style={{ backgroundImage: `url(${hero})` }}>
       
       
        
       
       <div className="">
       <div className="text-center lg:pl-4 mb-[200px] ">
                 <h1 className='py-4 animate-pop-in heroH1'>
                 Welcome to <br /> ASDEV81 <br /> Club Asaba
                 </h1>
                 <p className='py-4 animate-pop-in september'>
                 Founded in 1981 <br /> 
          </p>
                 <p className='py-4 animate-pop-in herop'>
                     
                 asdev jikebe nu - ka odili <br /> ahaba nma
                 </p>
                 
             </div>
       </div>
     </div></SwiperSlide>
       
        <div className=" autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      
    </>

  
  )
}

export default Hero