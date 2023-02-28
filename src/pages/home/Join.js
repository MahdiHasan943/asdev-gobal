import React from 'react'
import './join.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import one from '../../images/homeImage/1.png'
import two from '../../images/homeImage/2.png'
import three from '../../images/homeImage/3.png'


const Join = () => {
  return (
      <div className='pt-20 pb-[120px]'>
          
          <div className="text-center mx-auto">
              
              <div className="flex justify-center">
              <h1 className='join py-6 text-center'>
              Why join ASDEV 81 Club?
              </h1>
               </div>
          </div>
          <div className="grid pt-[80px] grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="mx-auto">
                  <LazyLoadImage className='mx-auto'  src={one} alt="" />
                  <p className='numberText'>
                      Promote and project <br /> Asaba heritage <br />
                      at all times</p>
              </div>
              <div className="mx-auto">
              <LazyLoadImage className='mx-auto' src={two} alt="" />
              <p className='numberText'>
                      
                  Generate funds for  <br /> self-help in various <br /> ways
                </p>
              </div>
              <div className="mx-auto">
              <LazyLoadImage className='mx-auto'  src={three} alt="" />
                  <p className='numberText'>
                  Working for the <br /> overall progress of <br /> Asaba 
                 </p>
              </div>
          </div>

    </div>
  )
}

export default Join