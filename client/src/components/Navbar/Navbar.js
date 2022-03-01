import React, { useState, useEffect } from "react";
import { MdOutlineDehaze } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import Logo from "../../images/logo.png";
import "./navbar.css";
import { useHistory, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
const Navbar = ({
  isActive,
  onClick,
  active,
  setActive,
  screenWidth,
  ...props
}) => {
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
        <div>
          <div className={"nav-container"}>
            {screenWidth > 600 ? (
              <div className={"nav-container"}>
                <img
                  src={Logo}
                  className="logo"
                  onClick={() => {
                    history.push("/");
                  }}
                  alt="img"
                />
                <ul className="nav-right-items">
                  <li
                    href="#"
                    className="product-button m-r-10"
                    onClick={() => {
                      history.push("/ourstory");
                    }}
                  >
                    Ourstory
                  </li>
                  <li
                    href="#"
                    className="product-button m-r-10"
                    onClick={() => {
                      history.push("/news");
                    }}
                  >
                    NEWS
                  </li>
                  <li
                    href="#"
                    className="product-button m-r-10"
                    onClick={() => {
                      history.push("/store");
                    }}
                  >
                    STORE
                  </li>
                  <li
                    href="#"
                    className="product-button m-r-10"
                    onClick={() => {
                      history.push("/store");
                    }}
                  ></li>
                </ul>
              </div>
            ) : (
              <div>
                <div className={"nav-mobile-container"}>
                  <img
                    src={Logo}
                    className="logo"
                    onClick={() => {
                      history.push("/");
                      setActive(false);
                    }}
                    alt="img"
                  />
                  <SwitchTransition mode={"out-in"}>
                    <CSSTransition
                      key={active}
                      addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                      }}
                      classNames="fade-toggle"
                    >
                      <div className="toggle-button">
                        {active ? (
                          <IoClose
                            className={"close-icon "}
                            onClick={() => {
                              setActive(!active);
                              // setFade_close('fade-out')
                              // setFade_haze('fade-in')
                            }}
                          />
                        ) : (
                          <MdOutlineDehaze
                            className={"dehaze-icon "}
                            onClick={() => {
                              setActive(!active);
                              // setFade_haze('fade-out')
                              // setFade_close('fade-in')
                            }}
                          />
                        )}
                      </div>
                    </CSSTransition>
                  </SwitchTransition>
                </div>
                <div className={"nav-mobile-items"}>
                  <CSSTransition
                    in={active}
                    timeout={500}
                    classNames="list-transition"
                    unmountOnExit
                    appear
                  >
                    <ul className="nav-right-items">
                      <li
                        href="#"
                        className="product-button m-r-10"
                        onClick={() => {
                          history.push("/ourstory");
                          setActive(!active);
                        }}
                      >
                        OURSTORY
                      </li>
                      <li
                        href="#"
                        className="product-button m-r-10"
                        onClick={() => {
                          history.push("/news");
                          setActive(!active);
                        }}
                      >
                        NEWS
                      </li>
                      <li
                        href="#"
                        className="product-button m-r-10"
                        onClick={() => {
                          history.push("/store");
                          setActive(!active);
                        }}
                      >
                        STORE
                      </li>
                    </ul>
                  </CSSTransition>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
