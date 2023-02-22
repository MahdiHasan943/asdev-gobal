import React from 'react'
import './chair.css'


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

import { motion, useScroll } from "framer-motion"


const ChapterChair = () => {
  const { scrollYProgress,scrollRef } = useScroll();

  return (
    <div>
      <div className="py-[80px] px-8 lg:px-[70px] ">

        <h1 className='chair'>The Chapter Chairs</h1>
           {/* grid 1 */}

      <div className="grid mt-[50px] grid-cols-1 gap-6 lg:grid-cols-3 ">
          <motion.div
          whileHover={{
            x: 0,
            y: -7,
            scale: 1,
            rotate: 0,
          }}   className=" bgBlue1 bgHoverWhite  py-6 px-6">
          <img className=' shadow-2xl  z-50' src={img5} alt="" />

            <p className=' need1 py-4'>"Nice work on your Setproduct. Thank you for making it
              painless, pleasant and most of all hassle free! It's incredible."</p>
                <div className="flex mt-6 ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className=' Og1'>OGBUESHI REMI MADUEMEZIA</p>
                    <p className=' president1'>ASABA CHAPTER</p>
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
          }}  className="bg-[#F7F9FA] bgHoverWhite  shadow py-6 px-6">
              <img className=' shadow-2xl z-50' src={img3} alt="" />
                  <p className=' need1 py-4'>"No matter where you go, Setproduct is the coolest, most happening thing around! Setproduct is awesome!"</p>
                <div className="flex mt-6 ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className=' Og1'>MR EMMA DIALI</p>
                    <p className=' president1'>LAGOS CHAPTER</p>
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
          }}  className="bg-[#F7F9FA] bgHoverWhite  shadow py-6 px-6">
                <img className=' shadow-2xl z-50' src={img7} alt="" />
                  <p className=' need1 py-4'>"I have gotten at least 50 times the value from Setproduct. It's exactly what I've been looking for. I just can't get enough of Setproduct.”</p>
                <div className="flex mt-6 ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className=' Og1'> OgBUESI RICHIE OMO</p>
                    <p className=' president1'>PUBLICITY SECRETARY</p>
                  </div>
                   </div>
                   </motion.div>
                  

        </div>
        {/* 2 grid */}
          <div className="grid mt-[50px] grid-cols-1 gap-6 lg:grid-cols-3 ">
          <motion.div
          whileHover={{
            x: 0,
            y: 7,
            scale: 1,
            rotate: 0,
          }}  className=" bgBlue1 bgHoverWhite  py-6 px-6">
          <img className=' shadow-2xl  z-50' src={img5} alt="" />

            <p className=' need1 py-4'>"Nice work on your Setproduct. Thank you for making it
              painless, pleasant and most of all hassle free! It's incredible."</p>
                <div className="flex mt-6 ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className=' Og1'>OGBUESHI REMI MADUEMEZIA</p>
                    <p className=' president1'>PORT HARCOURT</p>
                  </div>
                   </div>
                   </motion.div>
              {/* 2 */}
              <motion.div
          whileHover={{
            x: 0,
            y: 7,
            scale: 1,
            rotate: 0,
          }}  className="bg-[#F7F9FA] bgHoverWhite  shadow py-6 px-6">
              <img className=' shadow-2xl z-50' src={img3} alt="" />
                  <p className=' need1 py-4'>"No matter where you go, Setproduct is the coolest, most happening thing around! Setproduct is awesome!"</p>
                <div className="flex mt-6 ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className=' Og1'>MR EMMA DIALI</p>
                    <p className=' president1'>US CHAPTER</p>
                  </div>
                   </div>
                   </motion.div>

               {/* 3 */}
               <motion.div
          whileHover={{
            x: 0,
            y: 7,
            scale: 1,
            rotate: 0,
          }}  className="bg-[#F7F9FA] bgHoverWhite  shadow py-6 px-6">
                <img className=' shadow-2xl z-50' src={img7} alt="" />
                  <p className=' need1 py-4'>"I have gotten at least 50 times the value from Setproduct. It's exactly what I've been looking for. I just can't get enough of Setproduct.”</p>
                <div className="flex mt-6 ">
                  <img src={img8} alt="" />
                  <div className="mx-4 ">
                    <p className=' Og1'> OgBUESI RICHIE OMO</p>
                    <p className=' president1'>UK CHAPTER</p>
                  </div>
                   </div>
                   </motion.div>
                  

                  

             </div>
      </div>
    </div>
  )
}

export default ChapterChair