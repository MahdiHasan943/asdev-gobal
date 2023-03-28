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

import { motion } from 'framer-motion';

import './hero.css'
import {slideIn,fadeIn , zoomIn,staggerContainer, textVariant } from '../../motion/motion.js'
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
        <SwiperSlide><motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" hero w-full flex justify-center pb-4   min-h-screen" style={{ backgroundImage: `url()` }}>
       
       
        
       
       <div className="grid lg:grid-cols-2">
       <motion.div variants={fadeIn('down', 'tween', 0.2, 1)} className=" text-center lg:pl-4 mt-[100px] ">
        
       <p className='meeting1'>                 <span className='text-[red]'>Upcoming Event</span> <br /> <span className='text-[orange]'> ASDEV81 General Meeting
                on Saturday the  <br />   8th of April 2023</span></p>
              
                 <motion.h1  variants={textVariant(0.4)} className='py-4 animate-pop-in text-[86px] heroH1'>
              Welcome to <br /> ASDEV81 <br /> Club Asaba 
                 </motion.h1>
                 <motion.p variants={textVariant(0.6)} className='py-4 animate-pop-in september'>
       Founded in 1981 <br /> 
          </motion.p>
                 <motion.p variants={textVariant(0.8)} className='py-4 animate-pop-in herop'>
                     
                 asdev jikebe nu - ka odili <br /> ahaba nma
                 </motion.p>
                 
            </motion.div>
            <motion.div  variants={fadeIn('down', 'tween', 0.2, 1)}  className="">
              <img className='w-full ' src="ALLANAH.jpg" alt="" />
              <div className='text-center'>
              <p className='pt-4 text-center animate-pop-in herop'>
                     
                     Ogbueshi Sydney Chinedu Allanah
                     </p>
                     <span className='PRESIDENT text-center'>               President ASDEV81 Club Asaba</span>
                    
              </div>
            </motion.div>
       </div>
        </motion.div></SwiperSlide>
        
{/* 2 */}
        
        <SwiperSlide><motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          
          className="hero  flex justify-center pb-4    min-h-screen" style={{ backgroundImage: `url()` }}>
       
       
        
       
       <div className="grid lg:grid-cols-2">
       <motion.div variants={fadeIn('down', 'tween', 0.2, 1)} className=" text-center lg:pl-4 mt-[100px] ">
        
       <p className='meeting2'>             <span className='text-[red]'>Upcoming Event</span> <br /> <span className='text-[orange]'> ASDEV81 General Meeting
                on Saturday the  <br />   8th of April 2023</span></p>
              
                 <motion.h1  variants={textVariant(0.4)} className='py-4 animate-pop-in text-[86px] heroH2'>
              Welcome to <br /> ASDEV81 <br /> Club Asaba 
                 </motion.h1>
        <motion.p variants={textVariant(0.6)} className='py-4 animate-pop-in september'>
Founded in 1981 <br /> 
 </motion.p>
        <motion.p variants={textVariant(0.8)} className='py-4 animate-pop-in herop'>
            
        asdev jikebe nu - ka odili <br /> ahaba nma
        </motion.p>
        
   </motion.div>
            <motion.div  variants={fadeIn('down', 'tween', 0.2, 1)} className="w-[100%] h-[100%]">
              <img className='w-[100%] ' src="ASAGBA1.jpg" alt="" />
              <div className='text-center'>
              <p className='pt-4 text-center animate-pop-in herop'>
                     
              Obi (Prof) Joseph Chike Edozien
                     </p>
                     <span className='PRESIDENT text-center'>             Asagba of Asaba</span>
                    
              </div>
            </motion.div>
       </div>
        </motion.div></SwiperSlide>
        

        {/* 3 */}
     <SwiperSlide><motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" hero  flex justify-center pb-4    min-h-screen" style={{ backgroundImage: `url()` }}>
       
       
        
       
       <div className="grid lg:grid-cols-2">
       <motion.div variants={fadeIn('down', 'tween', 0.2, 1)} className=" text-center lg:pl-4 mt-[100px] ">
        
       <p className='meeting3'>     <span className='text-[red]'>Upcoming Event</span> <br /> <span className='text-[orange]'> ASDEV81 General Meeting
                on Saturday the  <br />   8th of April 2023</span></p>
              
                 <motion.h1  variants={textVariant(0.4)} className='py-4 animate-pop-in text-[86px] heroH3'>
              Welcome to <br /> ASDEV81 <br /> Club Asaba 
                 </motion.h1>
        <motion.p variants={textVariant(0.6)} className='py-4 animate-pop-in september'>
Founded in 1981 <br /> 
 </motion.p>
        <motion.p variants={textVariant(0.8)} className='py-4 animate-pop-in herop'>
            
        asdev jikebe nu - ka odili <br /> ahaba nma
        </motion.p>
        
   </motion.div>
            <motion.div variants={fadeIn('down', 'tween', 0.2, 1)} className="">
              <img className='mx-auto' src="OKOWA1.jpg" alt="" />
              <div className='text-center'>
              <p className='pt-4 text-center animate-pop-in herop'>
                     
              Ifeanyichukwu Arthur Okowa CON 
                     </p>
                     <span className='PRESIDENT text-center'>             Governor of Delta State
</span>
                    
              </div>
            </motion.div>
       </div>
     </motion.div></SwiperSlide>
       
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