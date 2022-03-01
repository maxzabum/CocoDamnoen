import React, { useState, useEffect } from "react";
import "./contactStyles.css";
import FBIcon from "./fb.png";
import IGIcon from "./instragram.png";
import LineIcon from "./line.png";
import TwiiterIcon from "./twitter.png";
import { useHistory, useLocation } from "react-router-dom";
const Contactus = () => {
  const [isShow, setIsShow] = useState(true);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/admin") {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [location]);
  return (
    <>
      {isShow && (
        <div className="contactus-container">
          <div className="item-contactus">
            <div className="contact-detail">
              <div className="left-container">
                <p>Develop by</p>
                <p>Mr.apakorn buakum</p>
                <p>(+66) 062-196-1964 </p>
                <p>maxzabum1150@hotmail.com</p>
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
              <p>
                Designed by © Riseplus Technology. All Rights Reserved 2018.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Contactus;
