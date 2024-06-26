import React, { useState } from "react";
import "./Header.css" 
import {BiMenuAltRight} from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false)

  const getMenuStyles = (menuOpen) =>{
    if (document.documentElement.clientWidth <=800 ) {
      return {right : !menuOpen && "-100%" }
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container  ">
        <img src="./logo.png" alt="logo" width={100} />
   
   <OutsideClickHandler onOutsideClick={() => {
    setmenuOpen(false)
   }} >

     <div className=" flexCenter navbar"
      style={getMenuStyles(menuOpen)}
      >
        <a href="#residencies">Residencies</a>
        <a href="#Values">Our Values </a>
        <a href="#GetStarted">Get Started</a>
        <button className="button" >
        <a href="#Contact">Contact</a>
        </button >
        </div>
       </OutsideClickHandler>
      
    <div className="menu-icon" onClick={() => setmenuOpen((prev) => !prev)}   >
      <BiMenuAltRight size={30}/>
    </div>
      </div>
  

    </section>
  );
};

export default Header;
