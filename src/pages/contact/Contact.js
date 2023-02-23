import React from 'react'
import useTitle from '../../component/hook/useTitle'

import './contact.css'

import asdev from '../../images/contactImage/asdev1.png'
import vector from '../../images/contactImage/Vector.png'
import BG from '../../images/contactImage/BG.png'
import { BsEnvelopeFill ,BsPersonFill,BsHouseDoor,BsPerson} from "react-icons/bs";
import GoToTop from '../../component/GoToTop'
    


const Contact = () => {

   useTitle('Contact')

  return (
    <div>

      {/* 1/ first row*/}
      
      <section className='px-8 py-6'>
        <div className="grid grid-flow-col-1 gap-4 lg:grid-cols-2">


          <div className="">
            <img className='mx-auto' src={asdev} alt="" />
          </div>
          <div className="mx-auto pt-[90px]">

            <h1 className='text-center love'>
            We love to <br /> hear from <br /> you
            </h1>
            <p className='Like'>
              Like to know more about ASDEV81 <br />
              Club or become a member?
            </p>

            <img src={vector} alt="" />
          </div>
        </div>
      </section>



      {/* 2 / second row */}
      
      <section className='px-8 bg-[#3E4345] lg:pl-[100px] py-20'>
        <div className="grid grid-flow-col-1 gap-4 lg:grid-cols-2">


          <div className=" py-10 flex h-auto bg-no-repeat bg-cover bg-center	items-center min-h-screen"   style={{ backgroundImage: `url(${BG})` }}>
            <div className="sm:pl-[40px]">
              <h1 className='job '>Our job of building Asaba and <br /> her people together never <br /> stops.</h1>
              <p className='show py-5'>Show us your interest in joining our elite <br /> club and complete a
                simple form to get <br /> started.

                      </p>
             </div>
          </div>
          <div className="mx-auto px-8  sm:px-[90px]  py-10  h-auto	 min-h-screen  contactForm">

            <h1 className='drop py-6'>
            Drop us a quick message
            </h1>
            <p className='always pb-6'>
              We are always looking to add more <br /> like-minded Asaba people to our <br /> community.
              Are you interested?
            </p>

            <form action="">
            <div className=" form-control    ">
            <label class="relative block">
  
  <input class="    bg-[#3E4345] w-full h-[55px] px-4 text-white focus:text-[black]  placeholder:text-[16px] placeholder:text-[gray]  input  rounded-sm  shadow-sm focus:bg-[white] focus:outline-[#098b99] sm:text-sm" placeholder="Email Address" type="text" name="search"/>
  
  <span class="sr-only">Search</span>
  <span class="absolute  inset-y-0 right-4 flex items-center pl-2">
                  <svg class="h-7 w-7 fill-slate-300" viewBox="0 0 20 20">
                  <BsEnvelopeFill className='text-[#F3AA18]'/>
                  </svg>
  </span>
              </label>
              </div>
              {/* 2 */}
              <div className="py-4  form-control    ">
            <label class="relative block">
  
  <input class="    bg-[#3E4345] w-full h-[55px] px-4 text-white focus:text-[black] placeholder:text-[16px] placeholder:text-[gray]  input  rounded-sm  shadow-sm focus:bg-[white] focus:outline-[#098b99] sm:text-sm" placeholder="Full Name" type="text" name="search"/>
  
  <span class="sr-only">Search</span>
  <span class="absolute  inset-y-0 right-4 flex items-center pl-2">
                  <svg class="h-7 w-7 fill-slate-300" viewBox="0 0 20 20">
                  <BsPersonFill className='text-[#78909C]'/>
                  </svg>
  </span>
              </label>
            </div>
              {/* 3 */}
              <div className=" form-control    ">
            <label class="relative block">
  
  <input class="    bg-[#3E4345] w-full h-[55px] px-4 text-white focus:text-[black]  placeholder:text-[16px] placeholder:text-[gray]  input  rounded-sm  shadow-sm focus:bg-[white] focus:outline-[#098b99] sm:text-sm" placeholder="Home Address" type="text" name="search"/>
  
  <span class="sr-only">Search</span>
  <span class="absolute  inset-y-0 right-4 flex items-center pl-2">
                  <svg class="h-7 w-7 fill-slate-300" viewBox="0 0 20 20">
                  <BsHouseDoor className='text-[#78909C]'/>

                  </svg>
  </span>
              </label>
            </div>
              {/* 4 */}
              <div className="py-4 form-control    ">
            <label class="relative block">
  
  <input class="    bg-[#3E4345] w-full h-[55px] px-4 text-white focus:text-[black]  placeholder:text-[16px] placeholder:text-[gray]  input  rounded-sm  shadow-sm focus:bg-[white] focus:outline-[#098b99] sm:text-sm" placeholder="Phone" type="text" name="search"/>
  
  <span class="sr-only">Search</span>
  <span class="absolute  inset-y-0 right-4 flex items-center pl-2">
                  <svg class="h-7 w-7 fill-slate-300" viewBox="0 0 20 20">

                  <BsPerson className='text-[#78909C]'/>
                  </svg>
  </span>
              </label>
              </div> 
              <select className="select mb-4 h-[55px] textarea bg-[#3E4345] rounded-none text-white focus:text-[black] w-full focus:bg-[white] focus:outline-[#098b99] select-ghost ">
  <option  selected>Select</option>
  <option>Best</option>
  <option>Middle</option>
  <option>Lower</option>
</select>
              <textarea className="textarea bg-[#3E4345] rounded-none text-white focus:text-[black] w-full focus:bg-[white] focus:outline-[#098b99] " placeholder="Write About You"></textarea>

              <div className="flex pt-4 pb-8">
                
              <input type="checkbox" className="border-white bg-[#3E4345] outline-[#78909C]  rounded-none checkbox" />
              
                <p className='px-4 read'>I have read and agree to everything I have to <br /> for the risk I am accepting
                  by checking this <br /> useless checkbox for your satisfaction. And <br /> for sure I did not read Terms of

                  Use</p>

              </div>
              <button className='w-full FBT btn submit py-4 px-8 hover:border-none border-none  hover:outline-none'>
                Submit
              </button>
              
            </form>
          </div>
        </div>
      </section>

        <GoToTop></GoToTop>
    </div>
  )
}

export default Contact