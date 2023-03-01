import React from 'react'
import useTitle from '../../component/hook/useTitle'

import './announceMent.css'
import { BsArrowRightShort ,BsChevronRight} from "react-icons/bs";

import bg from '../../images/announcementImage/Image.png'
import blob from '../../images/announcementImage/Blob.png'
import Flow from '../../images/announcementImage/Flowmappblocks.png'
import Iphone2 from '../../images/announcementImage/iPhone2.png'
import IphoneOne from '../../images/announcementImage/IphoneOne.png'
import Map from '../../images/announcementImage/Map.png'
import vector from '../../images/announcementImage/Vector.png'
import Mack from '../../images/announcementImage/Macbook33.png'

import we from '../../images/announcementImage/we.png'
import GoToTop from '../../component/GoToTop';
                 


const Announcement = () => {

   useTitle('Announcement')
  return (
    <div>

      <div className="">

        <section>
        <div  className="bg-[#3E4345] pt-[50px] pb-[150px]">
          <div className="px-[20px] lg:px-[120px]">

            {/* <img src={we} alt="" /> */}
            
            <div className="  relative">
            <div className='py-10 lg:w-[80%] h-auto ' >
             < img  className='w-full' src={bg} alt="" />

            </div>
         
              
              <div className="hidden lg:block absolute top-0 right-0">
              <div className="lg:w-[450px]  relative w-full mx-auto h-full ">
                < img className=' px-8 w-full h-full  z-0 mb-[-140px]' src={blob} alt="" />
                <div className="bg-white w-full absolute top-[100px] left-[60px] z-50  p-10   rounded-lg">
                  
                    <div className="h-[200px] flex justify-center items-center"  style={{ backgroundImage: `url(${Map})` }}>
                             < img src={vector} alt="" />
                  </div>
                  <h1 className='have pt-6'>Have something say?</h1>
                  <p className='let text-center py-6 text-[#3E4345]'>Let us tell the world about your <br /> next big thing • 
                    <span className='text-[#57CBAF]'>Were open now</span></p>
                  <button className='BTbg FBT py-3 px-4 sm:px-8 md:px-0 2xl:px-8 rounded-md w-full'>
                 <span className='book'> Book your ad space!</span>
                  </button>
                  

                </div>
              
                      </div>
                 </div>
            </div>
            <div className="block lg:hidden mx-auto">
              <div className="  w-full mx-auto py-10 lg:flex  h-[500px] bg-no-repeat bg-cover bg-center	items-center  "  style={{ backgroundImage: `url(${blob})` }}>
                <div className="bg-white w-[80%] mx-auto z-50   p-4 rounded-lg">
                  
                 
                <div className="h-[200px] flex justify-center items-center"  style={{ backgroundImage: `url(${Map})` }}>
                             < img src={vector} alt="" />
                  </div>
                  <h1 className='have pt-6'>Have something say?</h1>
                  <p className='let text-center py-6 text-[#3E4345]'>Let us tell the world about your <br /> next big thing • 
                    <span className='text-[#57CBAF]'>Were open now</span></p>
                  <button className='BTbg FBT py-3 px-4 sm:px-8 md:px-0 2xl:px-8 rounded-md w-full'>
                 <span className='book justify-center'> Book your ad space!</span>
                  </button>
                  

                </div>
              
                      </div>
                 </div>

            </div>

        </div>
        </section>
        {/* 2 */}

        <section className="">
        <div  className="bg-[white] pt-[50px] pb-[150px]">
          <div className="px-[20px] lg:px-[120px]">
              <h1 className='Reach'>
              Reach the world beyond borders...
              </h1>
              <p className=' py-6 Promote'>
              Promote you business, events and all types of occasion on ASDEV81 Club website
              </p>
                 
              <div className="grid grid-cols-1 my-6 lg:grid-cols-2 gap-5">
                <div className="GridOne pt-6">
                  <p className='Apps py-4 text-center'>
                  FOR APPS HIGHLIGHTS
                  </p>
                  <p className='most py-3 text-center'>
                  Represent your apps in a most <br /> convenient way to achieve installs
                  </p>
                  <p className='smart py-4 text-center'>
                  For smart teams who want to release apps faster with <br /> Setproduct items by publishing into a library
                  </p>
                  < img className='mx-auto' src={Iphone2} alt="" />
                </div>
                <div className="GridTwo py-4">

                  <img className='mx-auto' src={Flow} alt="" />

                <p className='Apps py-4 text-center'>
                FOR A BETTER SHOWCASE
                  </p>
                  <p className='most py-3 text-center'>
                  App UI pieces as a feature
                  </p>
                  <p className='smart py-4 text-center'>
                  Copy and paste into most storytelling UI pieces <br /> from your appliaction and equip with a description.
                  </p>
                  <div className="flex justify-center">
                  <button className=' border bottom-1 FBT rounded-full border-[white] flex justify-between py-6 px-12'>
                                <span className='text-white'>
                                Use this method </span>
                               <span className='text-white font-bold mx-4'> <BsChevronRight />  </span>
                       
                        </button>

                   </div>
                </div>
              </div>
              {/* 2 grid */}

              <div className="grid overflow-hidden grid-cols-1 lg:grid-cols-2 gap-5">

              <div className="GridThree py-6">

         <img className='mx-auto' src={Mack} alt="" />

          <p className='Apps mt-[-200px] py-4 text-center'>
          FOR PRODUCT SCREENS
          </p>
            <p className='most py-3 text-center'>
            Editable Mockups are here
            </p>
            <p className='smart py-4 text-center'>
            For smart teams who want to release apps faster <br /> with Setproduct items by publishing into a library
            </p>
              <div className="flex justify-center">
              <button className='FBT border bottom-1 rounded-full border-[white] flex justify-between py-6 px-12'>
                            <span className='text-white'>
                            Quickstart your project </span>
                          <span className='text-white font-bold mx-4'> <BsChevronRight />  </span>
     
      </button>

 </div>
</div>


                <div className="GridFour flex  pt-6">
                  <div className="ml-[30px] w-[50%]">
                  <p className='Apps py-4 '>
                  RESCALABLE BLOCKS
                  </p>
                  <p className='most py-3 '>
                  Move nested objects. <br />
Create more layouts. <br />
Impact users better. <br />
                  </p>
                  <p className='smart py-4 '>
                  • Components-driven constrained <br /> and incredibly organized to quick <br /> start without docs or Figma <br /> knowledge <br /> <br />

• Contains a lot of UI patterns to <br /> quickly deploy a brandy product <br /> design website <br /> <br />

• Several Google.Fonts declared as <br /> Figma styles for base typography. <br /> You are free to choose!
                  </p>
                  <div className="flex justify-center">
                  <button className='FBT border bottom-1 rounded-full border-[white] flex justify-between py-6 px-4'>
                                <span className='text-white'>
                                Download Fapapp now! </span>
                               <span className='text-white font-bold mx-4'> <BsChevronRight />  </span>
                       
                        </button>

                   </div>
                  </div>
                  <div className="w-[50%]">
                    < img className='h-[600px] w-full' src={IphoneOne} alt="" />
                  </div>
                </div>
               
              </div>
              




            </div>

        </div>
        </section>
        {/* 3 */}

        <section>
        <div  className="bg-[#3E4345] pt-[100px] pb-[150px]">
          <div className="px-[20px] lg:px-[120px]">

              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                <div className="mt-8 my-6 lg:my-0">
                  <h1 className='what'>
                  What’s Up?
                  </h1>
                  <p className='Thinking my-6'>
                    Thinking of letting the world in on your business or
                    updoming events?

                  </p>
                  <p className='offers'>
                    ASDEV 81 Club offers people and business all over the world
                    a platform to promote their business or announce any upcoming
                    solcial or business events, Take advantage of our far reaching
                    platform and showcase your new business or let the world know
                    when you are celebrating an achievement.</p>
                </div>
                <div className=" h-[100%] mt-12 2xl:mt-0">
                  <div className="FormHeader py-4 text-center">
                    <p className='Contact'>Contact us for our Ad placing pricing</p>
                  </div>
                  <div className="cardBody bg-[#242728] card-body">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 form-control">
                      <div className="">
                      
          <input type="text" placeholder="First Name" className="input py-8 w-full text-white bg-[#242728] border-[#F6D365] input-bordered" />
                      </div>
                      <div className="">
                    
          <input type="text" placeholder="Last Name" className="input py-8 w-full text-white bg-[#242728] border-[#919699] input-bordered" />
                 </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 form-control">
                      <div className="overflow-hidden">
                    
          <input type="text" placeholder="Email Address" className="input py-8 w-full text-white bg-[#242728] border-[#919699] input-bordered" />
                      </div>
                      <div className="overflow-hidden">
        
          <input type="text" placeholder="Phone Number" className="input py-8 w-full text-white bg-[#242728] border-[#919699] input-bordered" />
                 </div>
                    </div>
                    
                    <div className=" overflow-hidden">
        
                    <textarea className="textarea bg-[#242728] border-[#919699] text-white w-full" placeholder="Write A Massage"></textarea>
                    </div>
                    
        <div className="form-control mt-6">
                      <button className="btn FBT relative text-black btngold">Submit
                      <span className='text-[black] font-bold mx-4 absolute right-0'> <BsArrowRightShort className='text-[30px]' />  </span>
                      </button>
                      <p className='text-center py-3 text-[#C6CACC]'>
                      You have to read our website <span className='text-[#367BF5] '>Terms and Services</span>
                      </p>
                     
        </div>
      </div>

                </div>

                    </div>
            </div>

        </div>
         </section>


        
      </div>
      <GoToTop></GoToTop>

    </div>
  )
}

export default Announcement