import React from 'react'
import useTitle from '../../component/hook/useTitle'
import Asaba from './Asaba'
import Club from './Club'
import Hero from './Hero'
import Join from './Join'
import TodayAsaba from './TodayAsaba'

const Home = () => {
  
   useTitle('Home')

  return (
    <div className=''>
        
      <Hero></Hero>
      <Asaba></Asaba>
      <Club></Club>

      <TodayAsaba></TodayAsaba>
      <Join></Join>
          
      </div>
  )
}

export default Home