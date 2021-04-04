import React from 'react'
import Button from '@material-ui/core/Button';
import Logo from './Logo.png'
import ThaiSVG from './thailand.svg'
import './navbar.css'
const Navbar = ()=>{
    return(
        <div className="nav-container">
                <img src={Logo} className="logo"/>
            <ul className="nav-right-items">
                <li className="product-button m-r-10">
                    <a>PRODUCT</a>
                </li>
                <li className="product-button m-r-10">
                    <a>NEWS</a>
                </li>
                <li className="product-button m-r-10">
                    <a>STORE</a>
                </li>
                <li className="product-button m-r-10">
                    <img src={ThaiSVG}/>
                </li>
            </ul>
        </div>
    )
}
export default Navbar