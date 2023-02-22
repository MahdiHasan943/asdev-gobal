import React from 'react'
import useTitle from '../../component/hook/useTitle'
import ChapterBrief from './ChapterBrief'
import ChapterChair from './ChapterChair'


import './community.css'
import discover from '../../images/communityImage/Discover.png' 
import chero from '../../images/communityImage/Chero.png' 
import blob from '../../images/communityImage/Blob.png' 
import img1 from '../../images/communityImage/LouieVolkman.png' 
import img2 from '../../images/communityImage/FernandoPidrilio.png' 

import img3 from '../../images/communityImage/MadalineGibson.png' 
import img4 from '../../images/communityImage/Screenshot_1.jpg' 
import img5 from '../../images/communityImage/EdwardPowlowski.png' 
import img6 from '../../images/communityImage/Vector.png' 
import img7 from '../../images/communityImage/TobyHalvorson.png' 
import img8 from '../../images/communityImage/ASDEV-Logo.png' 
import { BsChevronRight } from "react-icons/bs";

import Download from '../../images/communityImage/Vector (1).png'

import { motion, useScroll } from "framer-motion"
import GoToTop from '../../component/GoToTop'

const Community = () => {
  const { scrollYProgress,scrollRef } = useScroll();

  useTitle('Community')

  return (
    <>
    <div>
          
        <div className="Discover bg-black px-8 lg:px-[100px] py-[80px]">


          <div className="lg:flex ">
            <div className="my-8 md:my-0"><img className='mx-auto my-6 lg:my-0' src={chero} alt="" />
            <div className="   mb-[120px] lg:mb-0 mx-auto flex justify-center ">
                        <button className='downloadBt FBT   mb-[-90px]   flex justify-between items-center py-[16px] px-6'>
                
                    <img className='m-0 mb-[-15px] bottom-0 left-0 p-0' src={Download} alt="" /> <span className='downloadText'>
                                Download ASDEV81 History Book </span>
                             
                       
                        </button>
                      
                        </div>
            </div>

            <div className="mx-auto">
            
              <h1 className='say text-center text-[white]'>
                
                Say, <span className='text-[#F9567E]'> hello</span>
                to <br /> the Execs!
              </h1>
              <p className='chapter py-6'>
                We present the ASDEV Global Executives and <br /> their mission statements.
                Here, you can find <br /> information about the individual Chapter <br /> formation.
              </p>

              <img className="mx-auto" src={blob} alt="" />

          
            </div>
          </div>
        </div>



        <div className="px-8 lg:px-[100px] pb-[100px] bg-[#3E4345] py-10">
          <div className="">
            <h1 className='national py-8'>The National Executive</h1>
                 {/* 1 grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
              <motion.div
               whileHover={{
    x: 0,
    y: -7,
    scale: 1,
    rotate: 0,
  }}  className="bg  py-12 px-6">
                <img className=' shadow-2xl z-50' src={img1} alt="" />
                  <p className='need py-4'>“Needless to say we are extremely satisfied with the results. Setproduct is the real deal! I don't know what else to say. No matter where you go, Setproduct is the coolest, most happening thing around!”</p>
                <div className="flex ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className='Og'>OGBUESHI CHINEDU ALLANAH</p>
                    <p className='president'>PRESIDENT</p>
                  </div>
                   </div>
              </motion.div>
              {/* 2 */}
              <motion.div
                whileHover={{
                  x: 4,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                }} 
                className="bg  py-12 px-6">
                <img className=' shadow-2xl z-50' src={img2} alt="" />
                  <p className='need py-4'>"Great job, I will definitely be ordering again! Setproduct is the most valuable business resource we have EVER purchased. Needless to say we are extremely satisfied with the results. Great job, I will definitely be ordering again!"</p>
                <div className="flex ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className='Og'>MR SUNNY ELUAKA</p>
                    <p className='president'>VICE PRESIDENT</p>
                  </div>
                   </div>
              </motion.div>
             </div>
               {/* 2 grid */}
               <div className="grid mt-[50px] grid-cols-1 gap-6 lg:grid-cols-3 ">
              <motion.div
              whileHover={{
                x: 0,
                y: -7,
                scale: 1,
                rotate: 0,
              }}   className="bgBlue  py-6 px-6">
                <img className=' shadow-2xl z-50' src={img3} alt="" />
                  <p className='need py-4'>"Nice work on your Setproduct. Thank you for making it painless, pleasant and most of all hassle free! It's incredible."</p>
                <div className="flex mt-6 ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className='Og'>MR PASCAL ATTOH</p>
                    <p className='president'>FINANCIAL SECRETARY</p>
                  </div>
                   </div>
              </motion.div>
              {/* 2 */}
              <motion.div
              whileHover={{
                x: 0,
                y: -7,
                scale: 1,
                rotate: 0,
              }}   className="bg  py-6 px-6">
                <img className=' shadow-2xl  z-50' src={img5} alt="" />
                  <p className='need py-4'>"No matter where you go, Setproduct is the coolest, most happening thing around! Setproduct is awesome!"</p>
                <div className="flex mt-6 ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className='Og'>MR EMMA DIALI</p>
                    <p className='president'>INTERIM SECRETARY</p>
                  </div>
                   </div>
              </motion.div>

               {/* 3 */}
              <motion.div
               whileHover={{
                x: 0,
                y: -7,
                scale: 1,
                rotate: 0,
              }}  className="bg  py-6 px-6">
                <img className=' shadow-2xl z-50' src={img7} alt="" />
                  <p className='need py-4'>"I have gotten at least 50 times the value from Setproduct. It's exactly what I've been looking for. I just can't get enough of Setproduct.”</p>
                <div className="flex mt-6 ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className='Og'>OGBUESI RICHIE OMO</p>
                    <p className='president'>PUBLICITY SECRETARY</p>
                  </div>
                   </div>
              </motion.div>
                  

             </div>

            
                  </div>
        </div>

    </div>
      <ChapterChair></ChapterChair>
      
      <ChapterBrief></ChapterBrief>
      <GoToTop></GoToTop>
    </>
  )
}

export default Community