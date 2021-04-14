import React, {useEffect, useState} from 'react'
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';
import Logo from './Logo.png'
import ThaiSVG from './thailand.svg'
import './navbar.css'
import {useHistory} from 'react-router-dom'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
const Navbar = ({isActive, onClick,active,setActive , screenWidth,...props}) => {
    const history = useHistory()
    // const [width, setWindowWidth] = useState(0)
    // const [active, setActive] = useState( closeNav === null ? false : true)
    const [fade , setFade] = useState(true)
    const [fade_close , setFade_close] = useState('')
    // useEffect(() => {
    //
    //     updateDimensions();
    //     // console.log(width)
    //     window.addEventListener('resize', updateDimensions);
    //     return () =>
    //         window.removeEventListener('resize', updateDimensions);
    //
    // }, [])
    // useEffect(()=>{
    //
    //
    //     return () =>
    //
    //
    // },[])
    // const updateDimensions = () => {
    //     const width = window.innerWidth
    //     setWindowWidth(width)
    // }
    return (
        <div>
                <div className={'nav-container'} onClick={()=>{

                }}>
                    {screenWidth > 600 ?
                        <div className={'nav-container'}>
                            <img src={Logo} className="logo" onClick={() => history.push('/')}/>
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
                        </div> : <div>
                            <div className={'nav-mobile-container'}>
                                <img src={Logo} className="logo" onClick={() => history.push('/')}/>
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

                            {/*{active ?*/}
                            {/*    <div className={'nav-mobile-items'}>*/}
                            {/*        <ul className="nav-right-items">*/}
                            {/*            <li className="product-button m-r-10" onClick={() => history.push('/ourstory')}>*/}
                            {/*                <a>OURSTORY</a>*/}
                            {/*            </li>*/}
                            {/*            <li className="product-button m-r-10" onClick={() => history.push('/news')}>*/}
                            {/*                <a>NEWS</a>*/}
                            {/*            </li>*/}
                            {/*            <li className="product-button m-r-10" onClick={() => history.push('/store')}>*/}
                            {/*                <a>STORE</a>*/}
                            {/*            </li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*    :*/}
                            {/*    null*/}
                            {/*}*/}
                        </div>
                    }
                </div>
        </div>
    )
}
export default Navbar