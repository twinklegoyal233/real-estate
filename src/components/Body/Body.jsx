
import React from "react";
import "./Body.css";
import { HiLocationMarker } from "react-icons/hi";
import Countup from "react-countup"

const Body = () => {
  return (
    <div>
      <section className="body-wrap">
        <div className=" flexCenter paddings body-container ">
          <div className=" flexCenter body-left">
            <div className="body-title">
              <div className="orange-circle"></div>
              <h1>
                Discover <br /> Perfect Properties <br /> with Ease{" "}
              </h1>
            </div>
            <div className=" flexColStart body-desc">
              <p className="secondaryText" >
                Welcome to Homyz , your go-to source for finding the perfect
                property. <br />
                Browse our extensive listings, view high-quality images, and
                take virtual <br /> tours to discover your dream home
                effortlessly.
              </p>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue) " size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>
          <div className="flexCenter Stats">
            <div className="flexColCenter stat">
              <span>
                <Countup start={8000} end={9000} duration={4}/>
                <span>+</span>
               
              </span>
              <span className="secondaryText"  >Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <Countup start={1950} end={2000} duration={4}/>
                <span>+</span>
               
              </span>
              <span className="secondaryText"  >Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <Countup end={30}/>
                <span>+</span>
               
              </span>
              <span className="secondaryText"  >Awards Winning</span>
            </div>
          </div>


          </div>

          <div className=" flexCenter body-right  ">
            <div className=" image-container">
              <img src="./hero-image.png" alt="building" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
