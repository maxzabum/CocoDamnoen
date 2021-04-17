import React from "react";
import "./contactStyles.css";
import FBIcon from "./fb.png";
import IGIcon from "./instragram.png";
import LineIcon from "./line.png";
import TwiiterIcon from "./twitter.png";
const Contactus = () => {
  return (
    <div className="contactus-container">
      <div className="item-contactus">
        <div className="contact-detail">
          <div className="left-container">
            <p>CONTACT US</p>
            <p>
              377/1 Moo 17, Tumbol Sila, Amphur Muang, Khon Kaen, Thailand 40000{" "}
            </p>
            <p>(+66) 084-204-5999 </p>
            <p>sales@cocodamnoen.com</p>
          </div>
          <div className="right-container">
            <div className="email-subscribe-container">
              <p>NEWSLETTER</p>
              <input type="text" placeholder="EMAIL ADDRESS" />
              <button>SUBSCRIBE</button>
            </div>
            <div className="follow-buttons-container">
              <img src={FBIcon} alt="img" />
              <img src={IGIcon} alt="img" />
              <img src={LineIcon} alt="img" />
              <img src={TwiiterIcon} alt="img" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© Riseplus Technology. All Rights Reserved 2018.</p>
        </div>
      </div>
    </div>
  );
};
export default Contactus;
