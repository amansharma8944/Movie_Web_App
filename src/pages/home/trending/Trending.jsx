import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWRapper'
import SwitchPage from '../../../components/switchpage/SwitchPage'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {

  const [endPoint, setEndPoint] = useState("day")

   const onTabChange=(tab)=>{

    setEndPoint(tab==="Day"?"day":"week");
    

   }

   const {data,loading}=useFetch(`/trending/movie/${endPoint}`)
  

  
  return (
    <div className='carouselSection relative mb-[70px]   '>
        <div className="flex items-center justify-between mb-[20px]">

            <span className="carouselTitle text-[24px] text-white font-normal ">title</span>
            <SwitchPage data={["Day","Week"]} onTabChange={onTabChange}/>
        </div>

        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending