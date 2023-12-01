import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "./style.scss"

const Footer = () => {
  return (<>
  <div  className='w-full bg-white h-[0.5px] sm:h-[1px] '></div>
  <div className='h-auto pb-[20px] w-full bg-fika flex flex-col  items-center  ' >
        <ul className='w-[30%] flex  justify-between mt-[6vh] text-white text-[15px] opacity-[0.8]'>
          <li className='hover:text-pink-300 cursor-pointer'>About</li>
          <li className='hover:text-pink-300 cursor-pointer'>FAQ</li>
          <li className='hover:text-pink-300 cursor-pointer'>Policy</li>
         
         
         
        </ul>
        <p className='w-[70%] text-center px-[4vw] mt-[5vh] text-white opacity-[0.8]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolore dignissimos, dicta omnis animi neque impedit, tempora voluptates eum necessitatibus debitis rerum, corrupti adipisci.</p>

        <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>


  </div>
  </>
  )
}

export default Footer