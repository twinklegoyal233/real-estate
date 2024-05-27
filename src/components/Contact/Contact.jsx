import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
// import { BsFillChatDotsFill } from "react-icons/bs ";
// import { HiChatBubbleBottomCenter } from "react-icons/hi2";
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
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                     <span>Call</span>
                     <span>021 123 145 23</span>

                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
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
