import React from 'react'
import useTitle from '../../component/hook/useTitle'

import './announceMent.css'

import bg from '../../images/announcementImage/Image.png'
import blob from '../../images/announcementImage/Blob.png'
import Flow from '../../images/announcementImage/Flowmappblocks.png'
import Iphone2 from '../../images/announcementImage/iPhone2.png'
import IphoneOne from '../../images/announcementImage/iphone.png'
import Map from '../../images/announcementImage/Map.png'
import vector from '../../images/announcementImage/Vector.png'
import Mack from '../../images/announcementImage/Macbook.jpg'

import we from '../../images/announcementImage/we.png'


const Announcement = () => {

   useTitle('Announcement')
  return (
    <div>

      <div className="">

        <div  className="bg-[#3E4345] pt-[50px] pb-[150px]">
          <div className="px-[20px] lg:px-[120px]">

            <img src={we} alt="" />
            
            <div className="  relative">
            <div className='py-10 lg:w-[80%] h-auto ' >
             <img  className='w-full' src={bg} alt="" />

            </div>
         
              
              <div className="hidden lg:block absolute top-0 right-0">
              <div className="lg:w-[450px]  relative w-full mx-auto h-full ">
                <img className=' px-8 w-full h-full  z-0 mb-[-140px]' src={blob} alt="" />
                <div className="bg-white w-full absolute top-[100px] left-[60px] z-50  p-10   rounded-lg">
                  
                    <div className="h-[200px] flex justify-center items-center"  style={{ backgroundImage: `url(${Map})` }}>
                             <img src={vector} alt="" />
                  </div>
                  <h1 className='have pt-6'>Have something say?</h1>
                  <p className='let text-center py-6 text-[#3E4345]'>Let us tell the world about your <br /> next big thing • 
                    <span className='text-[#57CBAF]'>Were open now</span></p>
                  <button className='BTbg py-3 px-4 sm:px-8 md:px-0 2xl:px-8 rounded-md w-full'>
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
                             <img src={vector} alt="" />
                  </div>
                  <h1 className='have pt-6'>Have something say?</h1>
                  <p className='let text-center py-6 text-[#3E4345]'>Let us tell the world about your <br /> next big thing • 
                    <span className='text-[#57CBAF]'>Were open now</span></p>
                  <button className='BTbg py-3 px-4 sm:px-8 md:px-0 2xl:px-8 rounded-md w-full'>
                 <span className='book justify-center'> Book your ad space!</span>
                  </button>
                  

                </div>
              
                      </div>
                 </div>

            </div>

         </div>
        
       </div>

    </div>
  )
}

export default Announcement