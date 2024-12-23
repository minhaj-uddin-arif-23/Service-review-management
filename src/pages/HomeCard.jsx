import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

export default function HomeCard() {

  const [home,setHome] = useState([])

  useEffect(()=>{
    fetchHomeCard()
  },[])
  const fetchHomeCard = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/home-service`)
    setHome(data)
  }
  console.log(home)

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
          home?.map((data) => (
                    <ServiceCard key={data._id} data={data} />
                  ))
        }
      </div>
    </div>
  )
}
