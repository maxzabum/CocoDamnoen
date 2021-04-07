import React from 'react'
import Button from '@material-ui/core/Button';
import Logo from './Logo.png'
import ThaiSVG from './thailand.svg'
import './navbar.css'
import {useHistory} from 'react-router-dom'
const Navbar = ()=>{
    const history = useHistory()
    return(
        <div className="nav-container">
                <img src={Logo} className="logo" onClick={()=>history.push('/')}/>
            <ul className="nav-right-items">
                <li className="product-button m-r-10" onClick={()=>history.push('/ourstory')}>
                    <a>OURSTORY</a>
                </li>
                <li className="product-button m-r-10" onClick={()=>history.push('/news')}>
                    <a>NEWS</a>
                </li>
                <li className="product-button m-r-10" onClick={()=>history.push('/store')}>
                    <a>STORE</a>
                </li>
                
            </ul>
        </div>
    )
}
export default Navbar