import React from 'react'
import Asaba from './Asaba'
import Club from './Club'
import Hero from './Hero'
import Join from './Join'
import TodayAsaba from './TodayAsaba'

const Home = () => {
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