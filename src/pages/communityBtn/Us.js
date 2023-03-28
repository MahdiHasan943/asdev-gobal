import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img1 from '../../images/communityImage/LouieVolkman.png' 
import img2 from '../../images/communityImage/FernandoPidrilio.png' 
import { BsEnvelopeFill,BsArrowRightShort ,BsPersonFill,BsHouseDoor,BsPerson} from "react-icons/bs";

import img3 from '../../images/communityImage/MadalineGibson.png' 
import img4 from '../../images/communityImage/Screenshot_1.jpg' 
import img5 from '../../images/communityImage/EdwardPowlowski.png' 
import img6 from '../../images/communityImage/Vector.png' 
import img7 from '../../images/communityImage/TobyHalvorson.png' 
import img8 from '../../images/communityImage/ASDEV-Logo.png' 
import { motion, useScroll } from "framer-motion"
import GoToTop from '../../component/GoToTop'
import './us.css'
import '../community/community.css'
import blob1 from '../../images/CommunityBtnImages/Vector.png'
import faq from '../../images/CommunityBtnImages/Title.png'
import useTitle from '../../component/hook/useTitle';

const Us = () => {

  useTitle('community-US')
  return (
    <div>
    {/* 1 */}
 
    {/* <div className="exasababg" >
        <div className="reacAngle" >
        <div className="text-center lg:pl-4 mb-[200px] " >
                 <h1 className='py-4 leading-[70px] lg:leading-[101px]  text-[50px] sm:text-[50px] lg:text-[92px] animate-pop-in usheroH1'>
                 Welcome to <br /> ASDEV81 <br /> US Chapter
                 </h1>
                 <p className='py-4 text-[25px] sm:text-[25px] lg:text-[34px] animate-pop-in asabaseptember'>
       September 1967 was when it all <br /> started with our first meeting.
          </p>
                 <p className='py-4 text-[14px] sm:text-[14px] lg:text-[20px] animate-pop-in asabaherop'>
                     
                 asdev jikebe nu - ka odili <br /> ahaba nma
                 </p>
                 
             </div>
          
      </div>
      </div> */}

      

<div className="bg-cover bg-center h-auto lg:h-[1400px] 2xl:h-[1600px]  flex justify-center shadow-sm  lg:justify-start  min-h-screen"  style={{ backgroundImage: `url(ASDEVUKHeroCollage.png)` }}>
       
       
        
       
       <div className="flex justify-center h-[100%] items-center  hero-overlay bg-opacity-40 ">
       <div className="text-center lg:pl-4 mb-[50px] " >
                 <h1 className='py-4 leading-[70px] lg:leading-[101px]  text-[50px] sm:text-[50px] lg:text-[92px] animate-pop-in usheroH1'>
                 Welcome to <br /> ASDEV81 <br /> US Chapter
                 </h1>
                 <p className='py-4 text-[white!important] text-[25px] sm:text-[25px] lg:text-[34px] animate-pop-in asabaseptember'>
       Inaugurated in May 2009.
               </p>
                 <p className='py-4 text-[14px] sm:text-[14px] lg:text-[20px] animate-pop-in asabaherop'>
                     
                 asdev jikebe nu - ka odili <br /> ahaba nma
                 </p>
                 
             </div>
            {/* <div className="">
              <img className='h-full' src="ASDEVUKHeroCollage.png" alt="" />
            </div> */}
       </div>
     </div>


      {/* 2 */}
      
      <div className="px-8 mx-auto lg:mx-[100px] py-20">
        <div className="flex justify-start 2xl:ml-[100px] mx-auto">
          <div className="">
          <img className='' src={blob1} alt="blob" />
          <h1 className='ASDEV81'>
            <span className='commitment'>ASDEV81  Club US Chapter <br /> commitment to the Club is to <br /></span>
              <span className='accelerate'> Accelerate!</span>
          </h1>
          </div>


        </div>

        <div className="py-10 grid  grid-cols-1 lg:grid-cols-2 gap-4 mx-auto ">
          <div className="py-10 mx-auto  lg:py-0">
            <h1 className='driven '>Components-driven system</h1>

            <p className=' flex'>
              <p>●</p>
              <p className='px-6'>Twenty years from now you will be more today is <br /> disappointed by the things that</p>
            </p>

            <p className='py-4 flex'>
              <p>●</p>
              <p className='px-6'>Go confidently in the direction of your dreams. Live the <br /> life you have imagined</p>
            </p>


            <p className='py-4 flex'>
              <p>●</p>
              <p className='px-6'>When one door of happiness closes, another opens, <br /> but often we look so long at the closed door that we <br /> do not see the one that has been opened for us. By <br /> famous I don’t know who Helen Keller.</p>
            </p>
          </div>
          <div className="mx-auto">
            <h1 className=' driven'>Scalable web blocks</h1>


            <p className='flex pt-4 j'>
              <p>●</p>
              <p className='px-6'>First, have a definite, clear practical ideal; a goal, an <br /> objective. Second, have the necessary means to <br /> achieve your ends; wisdom, money, materials, and <br /> methods. Third, adjust all your means to that end.</p>
            </p>

            <p className='py-4 flex'>
              <p>●</p>
              <p className='px-6'>I have been impressed with the urgency of doing. <br /> Knowing is not enough; we must apply. Being willing is <br /> not enough; we must do.</p>
            </p>


            <p className='py-4 flex'>
              <p>●</p>
              <p className='px-6'>Knowing is not enough; we must apply.</p>
            </p>
          </div>
        </div>

      </div>
    {/* 3 */}
    <div className="px-8 exasaba lg:px-[100px] pb-[100px] bg-[#3E4345] py-10">
    <div className="">
      <h1 className='national py-8'>The Us Executive</h1>
           {/* 1 grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
        <motion.div
         whileHover={{
x: 0,
y: -7,
scale: 1,
rotate: 0,
}}  className="bg bgHover  py-12 px-6">
         <LazyLoadImage className='w-[80px] h-[80px] rounded-full shadow-2xl z-50' src={'ARINZE_NEW_80X80.png'} alt="" />
            <p className='need py-4'>“Needless to say we are extremely satisfied with the results. Setproduct is the real deal! I don't know what else to say. No matter where you go, Setproduct is the coolest, most happening thing around!”</p>
          <div className="flex ">
          <LazyLoadImage className='w-[80px] h-[80px]shadow-2xl z-50'src={'ASDEV81_LOGO.png'} alt="" />
            <div className="mx-4 ">
              <p className='Og'>OGBUESHI ANTHONY EMEKA ARINZE</p>
              <p className='president'>CHAIRMAN</p>
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
          className="bg bgHover py-12 px-6">
          <LazyLoadImage className='w-[80px] h-[80px] rounded-full shadow-2xl z-50' src={'CHIOKONKWO_80X80.jpg'} alt="" />
            <p className='need py-4'>"Great job, I will definitely be ordering again! Setproduct is the most valuable business resource we have EVER purchased. Needless to say we are extremely satisfied with the results. Great job, I will definitely be ordering again!"</p>
          <div className="flex ">
          <LazyLoadImage className='w-[80px] h-[80px]shadow-2xl z-50'src={'ASDEV81_LOGO.png'} alt="" />
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
        }}   className="bg bgHover  py-6 px-6">
         <LazyLoadImage className='w-[80px] h-[80px] rounded-full shadow-2xl z-50' src={'PETERCLAVER_80X80.png'} alt="" />
            <p className='need py-4'>"Nice work on your Setproduct. Thank you for making it painless, pleasant and most of all hassle free! It's incredible."</p>
          <div className="flex mt-6 ">
          <LazyLoadImage className='w-[80px] h-[80px]shadow-2xl z-50'src={'ASDEV81_LOGO.png'} alt="" />
            <div className="mx-4 ">
              <p className='Og'>DR PETER-CLAVER NWANZE</p>
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
        }}   className="bg bgHover py-6 px-6">
       <LazyLoadImage className='w-[80px] h-[80px] rounded-full shadow-2xl z-50' src={'CHIOKONKWO_80X80.jpg'} alt="" />
            <p className='need py-4'>"No matter where you go, Setproduct is the coolest, most happening thing around! Setproduct is awesome!"</p>
          <div className="flex mt-6 ">
          <LazyLoadImage className='w-[80px] h-[80px]shadow-2xl z-50'src={'ASDEV81_LOGO.png'} alt="" />
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
        }}  className="bg bgHover  py-6 px-6">
          <LazyLoadImage className='w-[80px] h-[80px] rounded-full shadow-2xl z-50' src={'CHIOKONKWO_80X80.jpg'} alt="" />
            <p className='need py-4'>"I have gotten at least 50 times the value from Setproduct. It's exactly what I've been looking for. I just can't get enough of Setproduct.”</p>
          <div className="flex mt-6 ">
          <LazyLoadImage className='w-[80px] h-[80px]shadow-2xl z-50'src={'ASDEV81_LOGO.png'} alt="" />
            <div className="mx-4 ">
              <p className='Og'>OGBUESI RICHIE OMO</p>
              <p className='president'>PUBLICITY SECRETARY</p>
            </div>
             </div>
        </motion.div>
            

       </div>

      
            </div>
  </div>



    {/* 4 */}
    <div className="py-20 px-8 mx-auto lg:mx-[100px]">

<img className='mx-auto' src={faq} alt="" />


<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
  <div className="">
    <div className="bg-[#F7F9FA] p-5">
      <h1 className='text-[#000] text-[25px] font-bold'>Can a non Asaba indigene join ASDEV81 Club?</h1>
      <p className='py-4 text-[18px] '>Helen provided excellent customer service <br /> and made our introduction
        to a new company <br /> an wonderful experience. Your checklist <br />
        helped us to avoid leaving off important <br /> information.
        Thank you for your thoughtful <br /> and thorough customer service.</p>
    </div>

    <div className="bg-[#F7F9FA] mt-6 p-5">
      <h1 className='text-[#000] text-[25px] font-bold'>I live in a country that has no Chapter, <br /> can I join the closest to me?</h1>
      <p className='py-4 text-[18px] '>It was my first time working with this <br /> company.
        I couldn't be more pleased with my <br /> purchase. The team was great to work
        with <br /> and the gift is everything I expected. Looking <br /> forward to doing more
        business in the future.</p>
    </div>

    <div className="bg-[white] shadow-lg hover:bg-[#F7F9FA] mt-6 p-5">
      <h1 className='text-[#367BF5] text-[25px] font-bold'>What else is expected from an ASDEV81 <br /> Club member?</h1>
      <p className='py-4 text-[18px] '>This block is probably onhovered. Great <br />
        experience from start
        to finish. Not only was <br /> the price
        great to begin with but Steve <br /> followed up to confirm the purchase.</p>
    </div>

  </div>
  <div className="">
    <div className="bg-[#F7F9FA] p-5">
      <h1 className='text-[#000]  text-[25px]  font-bold'>What is the age to become ASDEV81 Club member?</h1>
      <p className='text-[18px]'>
        Excellent all around! What stood out most <br /> was Jake's excellent
        service. He made sure <br /> our order was placed in time, even though we <br />
        were ordering on a holiday. He followed <br /> through at every step of the process.
      </p>
      <p className='pt-6 text-[18px]'>
        

        Fantastic experience with Kevin! Wasn't so <br /> happy with the quality
        of my purchase... no <br /> questions asked, they immediately <br /> exchanged
        it at no charge. The replacement  <br /> is perfect and I couldn't be
        happier! I will <br /> purchase from them again for sure!
        </p>
    </div>

    <div className="bg-[#F7F9FA] mt-5 p-5">
      <h1 className='text-[#000] text-[25px] font-bold'>How often do ASDEV81 Club hold meetings?</h1>
      <p className='py-4 text-[18px] '>
        Fantastic experience with Kevin! Wasn't so <br />
        happy with the quality of my purchase... no <br />
        questions asked, they immediately <br />
        exchanged it at no charge. The replacement <br /> is perfect
        and I couldn't be happier! I will <br /> purchase from them again for sure!
      </p>
    </div>


  </div>
</div>
</div>
      {/* 5 */}
      
      <div className="px-8 exasaba lg:px-[120px] pb-[100px] bg-[#3E4345] py-10">
        <div className="text-center">
          
        <h1 className='inquary text-[35px] sm:text-[60px]'>Membership Inquiry</h1>
        <p className='below py-4 text-[25px] sm:text-[34px]'>Show your interest in joining ASDEV81 Club US Chapter by <br />
         completing simple form below.  
</p>
        <p className='you text-[25px] sm:text-[34px]'>We will contact you.</p>
        </div>
        
        <form className="bg-[#5E6366] px-4 sm:px-8 lg:px-10 py-10  mt-8 rounded-md">
          {/* 1 */}
          <div className="grid pb-8 grid-cols-1 gap-10 sm:grid-cols-2">
            <input className='px-4 py-3 rounded-[5px] text-white bg-[#373a3c] focus:bg-[#5E6366] focus:border-1 border focus:outline-none focus:border-[#7DE88C] focus:ring-1 focus:ring-[#7DE88C]' placeholder='FirstName' type="text" />
            <input className='px-4 py-3 rounded-[5px] text-white  bg-[#373a3c] focus:bg-[#5E6366] focus:border-1 border focus:outline-none focus:border-[#7DE88C] focus:ring-1 focus:ring-[#7DE88C]' placeholder='LastName' type="text" />
            <input className='px-4 py-3 rounded-[5px] text-white  bg-[#373a3c] focus:bg-[#5E6366] focus:border-1 border focus:outline-none focus:border-[#7DE88C] focus:ring-1 focus:ring-[#7DE88C]' placeholder='Phone Number' type="text" />
            <input className='px-4 py-3 rounded-[5px] text-white  bg-[#373a3c] focus:bg-[#5E6366] focus:border-1 border focus:outline-none focus:border-[#7DE88C] focus:ring-1 focus:ring-[#7DE88C]' placeholder='Email Address' type="text" />
            <input className='px-4 py-3 rounded-[5px] text-white  bg-[#373a3c] focus:bg-[#5E6366] focus:border-1 border focus:outline-none focus:border-[#7DE88C] focus:ring-1 focus:ring-[#7DE88C]' placeholder='Home Address' type="text" />
            <div className="">
          <select className="select  h-[55px] textarea bg-[#3E4345] rounded-[5px] text-white focus:text-[black] w-full focus:bg-[white] focus:outline-[#098b99] select-ghost ">
  <option  selected>Choose Closest Chapter</option>
  <option>Abuja   </option>
  <option>Asaba</option>
              <option>Lagos</option>
              <option>Port Harcourt</option>
              <option>United Kingdom</option>
              <option>United State</option>
              

            </select>

        

          
          
              
          </div>
              
          </div>
          {/* 2 */}
           <h1 className=' Quarter py-6'>Asaba Quarter</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3  gap-10 lg:grid-cols-4">


          <div className="flex   items-center gap-4">
                <input type="radio" name="radio-10" className="radio border-[#CFF37D] checked:bg-[#7DE88C]" checked />
                <p className='text-white'>Umuezei</p>
            </div>
            
            <div className="flex   items-center gap-4">
                <input type="radio" name="radio-10" className="radio border-[#CFF37D] checked:bg-[#7DE88C]" checked />
                <p className='text-white'>Umuagu</p>
            </div>
            
            <div className="flex   items-center gap-4">
                <input type="radio" name="radio-10" className="radio border-[#CFF37D] checked:bg-[#7DE88C]" checked />
                <p className='text-white'>       Ugbomanta</p>
            </div>
            
            <div className="flex   items-center gap-4">
                <input type="radio" name="radio-10" className="radio border-[#CFF37D] checked:bg-[#7DE88C]" checked />
                <p className='text-white'>       Umuaji</p>
            </div>
            
            <div className="flex   items-center gap-4">
                <input type="radio" name="radio-10" className="radio border-[#CFF37D] checked:bg-[#7DE88C]" checked />
                <p className='text-white'>   Umuonaje</p>
               </div>
          </div>

          {/* 3 */}
        
          

          {/* <h1 className=' Quarter py-6'>Choose what best describes your reason for joining ASDEV81 Club</h1> */}
                 {/* <div className="flex   items-center gap-4">
                <input type="radio" name="radio-1" className="radio my-4 border-[#CFF37D] checked:bg-[#7DE88C]" />
                <p className='text-white'>I want to create perfect UI solutions for new or existing software product</p>
            </div>
            <div className="flex   items-center gap-4">
                <input type="radio" name="radio-1" className="radio my-4 border-[#CFF37D] checked:bg-[#7DE88C]"  />
                <p className='text-white'>I want to create components-based design system to blow the scene</p>
            </div>
            <div className="flex   items-center gap-4">
                <input type="radio" name="radio-1" className="radio my-4 border-[#CFF37D] checked:bg-[#7DE88C]" />
                <p className='text-white'>I want to create custom styles for the UI from nearest future</p>
            </div>
            <div className="flex   items-center gap-4">
                <input type="radio" name="radio-1" className="radio my-4 border-[#CFF37D] checked:bg-[#7DE88C]" />
                <p className='text-white'>Something else, I can’t explain now</p>
            </div> */}
  
          <div className="">
       

            <textarea className="textarea py-10 mt-4 bg-[#3E4345] rounded-none text-white focus:text-[black] w-full focus:bg-[white] focus:outline-[#098b99] " placeholder="Write anything else you would like us to consider in your application"></textarea>
                 
            <div className="flex justify-center   lg:justify-end  ">
            <div className="   py-8">
                        <button className='AsabaBTnArrow mx-auto    flex items-center justify-between py-6 px-12'>
                                <span className='text-[black] font-bold leading-3 space-x-3'>
                                Send message </span>
                               <span className='text-[black] text-[30px] font-extrabold mx-4'> <BsArrowRightShort />  </span>
                       
                        </button>
                      
                        </div>
           </div>

          </div>


          


        </form>
  </div>
    
<GoToTop></GoToTop>

</div>
  )
}

export default Us