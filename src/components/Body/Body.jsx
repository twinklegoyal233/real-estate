
import React from "react";
import "./Body.css";
import { HiLocationMarker } from "react-icons/hi";
import Countup from "react-countup";
import {motion} from "framer-motion";

const Body = () => {
  return (
    <div>
      <section className="body-wrap">
        <div className=" flexCenter innerWidth paddings body-container ">
          <div className=" flexColStart body-left">
            <div className="body-title">
              <div className="orange-circle"/>
              <motion.h1
              initial ={{y : "2rem", opacity : 0}}
              animate = {{y : 0 , opacity : 1}}
              transition={{duration : 2, type : "spring"}}
              >
                Discover <br /> Most Suitable <br /> with Ease{" "}
              </motion.h1>
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
          <div className="flexCenter stats">
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
            <motion.div
              initial = {{x : "7rem", opacity : 0}}
              animate = {{ x : 0, opacity: 1 }}
              transition={{duration : 3, type : "spring"}}
            className="image-container">
              <img src="./hero-image.png" alt="building" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
