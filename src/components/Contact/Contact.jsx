import React from "react";
import "./Contact.css";
import { IoMdCall } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { MdVideoCall } from "react-icons/md";
const Contact = () => {
  return (
    <section className="contact-wrap">
      <div className="paddings innerWidth flexCenter contact-container">
        <div className=" flexColStart  contact-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We are always ready to provide you the best services..
            <br />
            For any Queries, feel free to contact provided below{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoMdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                     <span className="primaryText" >Call</span>
                     <span className="secondaryText" >021 123 145 23</span>

                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    < IoChatbubbleEllipses size={25} />
                  </div>
                  <div className="flexColStart detail">
                     <span className="primaryText" >Chat</span>
                     <span className="secondaryText" >021 123 145 23</span>

                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>

            </div>

           {/* second row  */}
           <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    < MdVideoCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                     <span className="primaryText" >Video Call</span>
                     <span className="secondaryText" >021 123 145 23</span>

                  </div>
                </div>
                <div className="flexCenter button"> Video Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    < FaMessage size={25} />
                  </div>
                  <div className="flexColStart detail">
                     <span className="primaryText" >Message</span>
                     <span className="secondaryText" >021 123 145 23</span>

                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>

            </div>

          </div>
        </div>
        <div className="contact-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
