// import React from 'react'


import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

// import ContentWrapper from "../contentWrapper/ContentWrapper";
// import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";
import Image from "../laxyLoadImage/Image";
import CircleRating from "../circleRating/CircleRating";

const Carousel = ({data,loading,endpoint,title}) => {

   const carContainer=useRef();
   const {url}=useSelector(state=>state.home);
   const nav=useNavigate();

   const navigation=(direction)=>{
    const container=carContainer.current;
    const scrollAmount=direction==="left"?container.scrollLeft-(container.offsetWidth+20):container.scrollLeft+(container.offsetWidth+20);
       

    container.scrollTo({
        left:scrollAmount,
        behavior:"smooth"
        
    })

   }
   


   const skItem = () => {
    return (
        <div className="skeletonItem">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
    );
};



  return (
    <div className="carousel px-[20px]" >
        <div className="ContentWrapper relative">
            {title &&  <div className="carouselTitle">{title}</div> 
            
            
            }
            <BsFillArrowLeftCircleFill className="carouselLeftNav arrow  absolute !left-[0vw]" onClick={()=>navigation("left")}/>

            <BsFillArrowRightCircleFill className="carouselRightNav arrow absolute !left-[96vw]" onClick={()=>navigation("right")}/>
            {!loading?(
                <div ref={carContainer} className="carouselItems">
                    {data?.map((items)=>{
                        const posterLink=items.poster_path?url.poster+items.poster_path:PosterFallback

                        return (

                            <div
                            onClick={()=>{
                                nav(`/${items.media_type|| endpoint}/${items.id}`)
                            }}
                            key={items.id}
                             className="carouselItem">


                                <div className="posterBlock">

                                    <Image src={posterLink}/>
                                    <CircleRating rating={items.vote_average.toFixed(1)}/>
                                </div>

                                <div className="textBlock">
                                    <span className="title">
                                        {items.title|| items.name}
                                    </span>
                                    <span className="date">
                                        {dayjs(items.release_Date).format("MMM D,YYYY")}
                                    </span>
                                </div>

                            </div>
                        )
                    })}
                </div>
            ):(
                <div className="loadingSkeleton">
                {skItem()}
              
            </div>
            )}


        </div>
    </div>
  )
}

export default Carousel