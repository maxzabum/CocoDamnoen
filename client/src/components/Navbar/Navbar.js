import React from 'react'
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';
import Logo from '../../images/logo.png'
import ThaiSVG from './thailand.svg'
import './navbar.css'
import {useHistory} from 'react-router-dom'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
const Navbar = ({isActive, onClick,active,setActive , screenWidth,...props}) => {
    const history = useHistory()
    return (
        <div>
                <div className={'nav-container'}>
                    {screenWidth > 600 ?
                        <div className={'nav-container'}>
                            <img src={Logo} className="logo" onClick={() => history.push('/')} alt="img"/>
                            <ul className="nav-right-items">
                                <li className="product-button m-r-10" onClick={() => history.push('/ourstory')}>
                                    <a>OURSTORY</a>
                                </li>
                                <li className="product-button m-r-10" onClick={() => history.push('/news')}>
                                    <a>NEWS</a>
                                </li>
                                <li className="product-button m-r-10" onClick={() => history.push('/store')}>
                                    <a>STORE</a>
                                </li>
                                <li className="product-button m-r-10" onClick={() => history.push('/store')}>
                                    <img src={ThaiSVG} alt="sw-lang"/>
                                </li>
                            </ul>
                        </div> : <div>
                            <div className={'nav-mobile-container'}>
                                <img src={Logo} className="logo" onClick={() => history.push('/')} alt="img"/>
                                <SwitchTransition mode={'out-in'}>
                                    <CSSTransition
                                        key={active}
                                        addEndListener={(node, done) => {
                                            node.addEventListener("transitionend", done, false);
                                        }}
                                        classNames="fade"
                                    >
                                        <div >
                                            {active ?
                                                <CloseRoundedIcon className={'close-icon '}
                                                                  onClick={()=>{
                                                                      setActive(!active)
                                                                      // setFade_close('fade-out')
                                                                      // setFade_haze('fade-in')
                                                                  }}/>
                                                :
                                                <DehazeRoundedIcon
                                                    className={'dehaze-icon '}
                                                    onClick={()=>{
                                                        setActive(!active)
                                                        // setFade_haze('fade-out')
                                                        // setFade_close('fade-in')
                                                    }}/>
                                            }
                                        </div>
                                    </CSSTransition>
                                </SwitchTransition>
                            </div>
                            <div className={'nav-mobile-items'}>
                            <CSSTransition
                                in={active}
                                timeout={500}
                                classNames="list-transition"
                                unmountOnExit
                                appear
                            >
                                    <ul className="nav-right-items">
                                        <li className="product-button m-r-10" onClick={() => history.push('/ourstory')}>
                                            <a>OURSTORY</a>
                                        </li>
                                        <li className="product-button m-r-10" onClick={() => history.push('/news')}>
                                            <a>NEWS</a>
                                        </li>
                                        <li className="product-button m-r-10" onClick={() => history.push('/store')}>
                                            <a>STORE</a>
                                        </li>
                                    </ul>
                            </CSSTransition>
                            </div>
                        </div>
                    }
                </div>
        </div>
    )
}
export default Navbar