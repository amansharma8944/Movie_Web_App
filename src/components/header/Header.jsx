import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

// import ContentWrapper from "../contentWrapper/ContentWrapper";
import hell from "../../../public/hell.png";
import ContentWrapper from "../contentWrapper/ContentWRapper";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();


    const openSearch=()=>{
      setMobileMenu(false);
      setShowSearch(true);

    }

    const openMobileMenu=()=>{
      setMobileMenu(true);
      setShowSearch(false);

    }
    const searchQueryHandler = (event) => {
      if (event.key === "Enter" && query.length > 0) {
          navigate(`/search/${query}`);
          setTimeout(() => {
              setShowSearch(false);
          }, 1000);
      }
    };

    const navigationHandler = (type) => {
      if (type === "movie") {
          navigate("/explore/movie");
      } else {
          navigate("/explore/tv");
      }
      setMobileMenu(false);
  };









 
useEffect(()=>{

  window.scrollTo(0,0);
},[location])
useEffect(() => {



  const controlNavbar = () => {
    if (window.scrollY > 200) {
        if ((window.scrollY > lastScrollY) && !mobileMenu) {
            setShow("hide");
        } else {
            setShow("show");
        }
    } else {
        setShow("top");
    }

    console.log(window.scrollY)
    console.log(lastScrollY)
    setLastScrollY(window.scrollY);
};

    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    };
}, [lastScrollY, mobileMenu]);

    return (
        <header className={`header   ${mobileMenu?"mobileView":""} ${show}`}
       >
          <ContentWrapper className="contentwrapper " >
            <div className="logo  "  onClick={()=>{navigate("/")}}>
              <img src={hell} alt=""  className="h-[50px]"/>
            </div>
            <ul className="menuItems relative ">

                <li className="menuItem  relative"> 
                
                    <input type="text" className={` absolute right-[0] h-[3.5vh] bg-[rgba(0,0,0,0.4)] rounded-xl    border border-gray-800   !origin-right  transition-width duration-500 ease-in-out ${showSearch ? 'w-[15vw] p-[15px]' : 'w-0 p-0 border-none'}`}
                    onKeyUp={searchQueryHandler}
                    value={query}
                    onChange={(e)=>{setQuery(e.target.value)}}
                    />
                 {
                    showSearch?(
                        <VscChromeClose
                        className="mr-[9px] cursor-pointer z-[99]"
                        onClick={() => setShowSearch(false)}
                    />
                    ) :
                    (
                        <li className="menuItem  " onClick={openSearch}><HiOutlineSearch/></li>
                    )
                }
                
             
                </li>
            
            </ul>
            <div className="mobileMenuItems">
              <HiOutlineSearch  onClick={openSearch}/>
              {mobileMenu?<VscChromeClose onClick={()=>{setMobileMenu(false)}}/> : <SlMenu onClick={openMobileMenu}/>}
            </div>


            </ContentWrapper>
         
        </header>
    );
};

export default Header;