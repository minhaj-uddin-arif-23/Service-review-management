import React, { useEffect } from 'react'
import HomeCard from './HomeCard'
import FramerMotion from '../Components/FramerMotion'
import Lotie from '../Components/Lotie'
import Countup from './Countup'
// import Pagination from '../Components/pagination'

export default function Home() {

  return (
    <div className='my-20'>
      
      {/* photo anr write moving */}
      {/* <Pagination /> */}
      {/* carousal */}
      <FramerMotion />
     <Lotie />
      <HomeCard />
      <Countup />
      {/* faq */}
    </div>
  )
}
