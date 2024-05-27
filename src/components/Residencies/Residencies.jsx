import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider";
import { sliderSettings } from "../../utils/helper";

const Residencies = () => {
  return (
    <div>
      <section className="r-wrap">
        <div className=" r-container  ">
          <div className="  flexColStart r-head  ">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>

          <Swiper {...sliderSettings} >
            <SliderButton/>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className=" flexColStart r-card ">
                  <img src={card.image} alt="" />

                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>₹</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};


        const SliderButton = () => {
            const swiper = useSwiper();
            return (
                <div className=" flexCenter r-buttons">

                    <button onClick={()=> {swiper.slidePrev()}} >&lt;</button>
                    <button onClick={()=> {swiper.slideNext()}} >&gt;</button>
                </div>
            )
        }
export default Residencies;
