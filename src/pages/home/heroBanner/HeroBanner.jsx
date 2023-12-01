import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Image from '../../../components/laxyLoadImage/Image';
import ContentWrapper from '../../../components/contentWrapper/ContentWRapper';
import {motion} from "framer-motion"

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("")
  const navigate=useNavigate();
  const {url}=useSelector(state=>state.home)


  const searchQueryHandler=(e)=>{

    // console.log(e.key)
        if(e.key==="Enter" && query.length>0){
          navigate(`/search/${query}`)

        }
  }

  const {data,loading}=useFetch("/movie/upcoming");

  
  
  useEffect(() => {
    const bg=url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
    // console.log(bg)

   
    setBackground(bg)
  }, [data])
  

  return (
      <div className='heroBanner w-full h-[450px] bg-black  flex items-center relative 
      md:h-[700px]

      '>
       {!loading &&  <div className="backdrop-img
       w-full h-full absolute top-0 left-0 opacity-[0.5] overflow-hidden
       ">
        
          <Image src={background} className={"w-full h-full object-cover object-center "}/>  
{/* i need to change this */}
        </div>}

        <div className="opacity-layer  w-full h-[250px] bg-fika absolute bottom-0 left-0 "></div>

       <ContentWrapper>
          <div className="herBannerContent flex flex-col items-center text-white text-center relative w-[82%] mx-0 my-auto max-w-[800px]">
            <motion.span 
         
            initial={{ scale: 4 ,opacity:0.2}} // Starting zoomed in
            animate={{ 
              scale: 1, // Animate to normal size
              opacity:1,
              rotate: 1800-360-360 // Rotate the element
            }}
            transition={{ 
              duration: 3, 
              ease: "easeOut" 
            }}
            className="title text-5xl font-bold md:mb-0 md:text-[90px] ">Uncover.</motion.span>
            <span className="subTitle text-[18px] font-[500] mb-[40px] mt-[15px] md:font-[24px]">
Endless narratives, thrilling series, and dynamic characters to ignite your imagination. Set off on your discovery adventure
            </span>
            <div className="searchInput  flex items-center w-full">
              <motion.input type="text" 
              initial={{width:"0px",}}
              animate={{ 
               width:"calc(100% - 100px)",
              
              }}
              transition={{
                duration:3,
              }}
              placeholder='Search for a movie or tv show...
              '
              onKeyUp={searchQueryHandler}
              onChange={(e)=>setQuery(e.target.value)}
              value={query}
              className='w-[calc(100%-100px)] h-[50px] bg-white outline-0 border-[0px] rounded-tl-[30px] rounded-bl-[30px] !pl-[15px] text-black  py-[15px] text-[14px] md:w-[calc(100%-150px)] md:h-[60px] md:text-[20px] md:px-[0px] md:py-[30px]'
              />
              <button
              onClick={()=>{

                if(query) navigate(`/search/${query}`);
              }}

              
              className='w-[100px] h-[50px] bg  text-white outline-0 border-0 rounded-tl-[0px] rounded-bl-[0px] rounded-tr-[30px] rounded-br-[30px] text-[16px] cursor-pointer  md:w-[150px] md:h-[60px] md:text-[18px] bg-gradientForButton' >Search</button>
            </div>
          </div>
          </ContentWrapper>
        {/*  <div style={{height:"300vh"}}>fff</div> */}

      </div>
  )
}

export default HeroBanner