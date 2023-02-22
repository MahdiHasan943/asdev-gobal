import React from 'react'
import useTitle from '../../component/hook/useTitle'

import aboutImg from '../../images/aboutImage/asdevpng.png'
import Button from '../../images/aboutImage/ButtonBG.png'
import bob from '../../images/aboutImage/Blob.png'
import cleanpu from '../../images/aboutImage/cleanup.png'
import { BsArrowRightShort ,BsChevronRight} from "react-icons/bs";



 import './aboutUs.css'
import GoToTop from '../../component/GoToTop'

const AboutUs = () => {

  useTitle('AboutUs')
  return (
    <div>
       
      <div className="hero    flex justify-center  items-end xl:h-[615px] 2xl:h-[900px]  min-h-screen" style={{ backgroundImage: `url(${cleanpu})` }}>
           
        <div className="px-4 lg:px-0  lg:flex  lg:w-[90%]">
          <div className="lg:w-[30%] animate-pop-in rounded-sm ourStory px-10 py-10">
                  <h1 className='py-4 ourStoryH1'>
                  Elite Asaba <br /> 
                  Club since 1981
                  </h1>
                  <p className='ourStoryp py-8'>
                  Our story
                  </p>
           
                      <button className=" border FBT py-3 pl-6 pr-[100px] relative text-white bg-none  outline-none "> Contact Us
              <span className='text-[white]  font-bold mx-4 absolute bottom-0 right-0'>
              <BsArrowRightShort className='text-[50px]' /> 
                        </span>
                      </button>
                     
                     
      
          </div>
          <div className="lg:w-[70%] animate-pop-in OurStory2 py-6 px-8 rounded-sm bg-[white] ">

            <p className='founded py-6'>
              FOUNDED  <span className=' text-[gray]'>
              • SEPTEMBER 1967
            </span>
            </p>
            <h1 className='formed py-4'>
              ASDEV Club was formed based on the <span className='text-[red]'>
              burning <br /> desire </span> to offer services 
            to our home town, Asaba. 

            </h1>
            <p className='fathers'>
              The founding fathers felt that the best way to support our home town was to constitute <br />
              ourselves into a formidable group that impacts lives of their members across the world and <br />
              Asaba indigenes as a whole.

            </p>

          </div>


          
         </div>
      </div>


      {/* 1 */}
      <div className="px-6 pt-[60px] lg:pt-[150px] pb-[200px]">
      <div className="px-4 lg:px-0  shadow ">
        <div className="lg:pl-[120px]  py-20">
        <p className='AboutP '>
              Asdev 81 Club is a prominent socio-cultural club with the main
              objective of contributing to the development of <br /> Asaba and its environs
              by providing boreholes and transformers for communities and scholarship
              for indigent <br /> students, among other gestures. <br />
              The club has respected personalities of Asaba origin
              , including Ogbueshi Fred Okonta, a former chairman <br /> ICAN Abuja chapter.
              Ogbueshi Tony Idigbe is a senior advocate of Nigeria (SAN). 


              <p className='py-5'>The new president, Ogbueshi Ochuba holds a master’s degree in
              Business Administration (MBA) and is a <br /> fellow of the Institute of
              Chartered Accountants of Nigeria (ICAN).</p>
               
               <p className='py-6'>In his acceptance speech,

Ochuba promised to continue largely with the policies of the former president, <br />
Ogbueshi Tony Molokwu to lift the club’s image, raise funds for projects
and members welfare, as well as <br /> ensure accountability and inclusiveness
in governance.</p>
              He also promised to partner with waste 

              management board to keep Asaba and its environs clean,
              liaise with <br /> the Asaba Development Union (ADU) and Asagba in council
              on matters of community interest, engage in <br /> quality membership drive,
              among others.
        </p>
                </div>
      
      </div>
     </div>

      {/* 2 */}

      <div className="bg-[#3E4345] pt-[50px] pb-[150px]">
        <div className="pl-[20px] lg:pl-[120px] pr-[20px] ">
          <h1 className='history text-center py-6 lg:text-start'>The ASDEV81 Club History</h1>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            
            {/* 1 */}
            <div className="my-4 bg-[#5E6366] ourTextBg p-6 pb-[100px] shadow-lg">
              <img className='mb-[-20px]' src={Button} alt="" />
              <p className='historyP'>Asaba in the early 1970s was the headquarters 
                of the Asaba <br className='hidden lg:block' /> Urban Development Council of Bendel State. 
                With a <br className='hidden lg:block' /> population of less than 35,000 people, the town
                was slowly <br className='hidden lg:block' /> recovering from the ravages of the Nigerian
                civil war. The <br className='hidden lg:block' /> town was distressed and depressed in addition 
                to being <br className='hidden lg:block' /> bereft of infrastructure – no water, no electricity,
                no roads <br className='hidden lg:block' /> and there was little opportunity for employment as
                this was  <br className='hidden lg:block' /> limited only to the Local Government Council as well 
                as <br className='hidden lg:block' /> primary and secondary schools in the town.  There was 
                       also no social life.  
</p>
            </div>

             {/* 2 */}
            <div className="my-4">
              <p className='p-6 historyP'>This situation was the exact opposite of what Asaba had been
                before the civil war.  The small town was bubbly, social life was
                at its peak with a lot of students’ union activities.  It was fun
                going back home during the holidays for most of the young men of the
                time.  Even when their parents could not take them, they went on their
                own and created their own networks.Life was good.  Now, many of 
                the young boys who had survived the war and have now become men
                found themselves in an awkward situation.    </p>
            </div>
                 {/* 3 */}
                 <div className="my-4">
              <p className='p-6 historyP'>Asaba Development Union (ADU) is the umbrella body of all Asaba associations.  Every Asaba indigene
                was expected to belong to a Chapter of the ADU.  The leadership of the ADU at
                the time in all the Chapters were mostly elderly people, therefore, discussion
                on the development of Asaba was not pursued with gusto. Attention was paid more
                  to welfare issues of members.  <br /> <br />

                In Lagos, a youth wing of ADU was formed with the objective of addressing this deficit.
                Instead of addressing the burning issues of development of the hometown, the Youth
                wing became factionalized with two different leaders.  This shift in focus
                of the ADU led to the formation of Falcon Club.  </p>
            </div>

            {/* 4 */}
            <div className="my-4">
              <p className='p-6 historyP'>
                Falcon Club membership comprised of successful Asaba indigenes from all walks of life –
                Civil service, Professionals and Businessmen determined to change the narrative
                of ADU and develop Asaba.  It was a Club every successful indigene wanted to
                belong to in order to make the desired change.  Five young men – Onyema Ugboko,
                Ogbolu Onwuka, Dr. Patrick Okwuraiwe, Dr. Oni Idigbe and Felix Oduah, with a 
                burning desire to contribute towards the development of their hometown 
                attempted to join Falcon Club, but their applications were rejected not
                because they were not successful in their own rights, but because Falcon 
                   Club considered them too young.  
              </p>
            </div>
              {/* 5 */}

            <div className="my-4">
              <p className='p-6 historyP'>
                These five gentlemen were all under 40 years old and the average age of 
                Falcon Club members at the time was 45 years.  They got together and 
                took the decision to form a club of their own.  They invited ten other
                friends to join in their quest and ASDEV 81 Club of Asaba was born.
                The name reflected their collective goal, in other words it was an 
                acronym for Asaba Development and ’81 was to reflect the year the Club
                was formed.  The inaugural meeting of the Club was held on Sunday 
                November 1, 1981 at the Festac Town, Lagos residence of Onyema Ugboko.
                The first National meeting and the Club’s inauguration was at the 
                Governor Street, Asaba residence of Onyema Ugboko on December 25, 
                   1981.    


                </p>
            </div>
               {/* 6 */}
            <div className="my-4">
              <p className='p-6 historyP'>
                However, only Lagos remained a Chapter, because the other towns did not have
                sufficient members to constitute Chapters.
                Back in the day, all the requirements needed to ensure a smooth
                take-off for
                the Club was volunteered by members.  Odinma Okonkwo volunteered his
                office at Tafawa Balewa Crescent, Surulere, Lagos as the venue for
                subsequent meetings and official postal address of the Club.  A former
                member, Chuddy Ogeah, an artist of repute designed the ASDEV 81 Club
                logo, Sylvester Obi Okonne and Chiweta Okogba registered the Club.
                ASDEV 81 Club was formally launched at 11.00am, on Christmas Day, 
                December 25, 1982 
                 at what was the Asaba General Field, (now Asaba Arcade).  
                    </p>
            </div>
                
            

               </div>
          

              </div>
      </div>
        
      <GoToTop></GoToTop>
    </div>
  )
}

export default AboutUs