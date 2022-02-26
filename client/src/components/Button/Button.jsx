import React, { useState, useEffect } from 'react'
import './index.css'
const Button = ({ label, color, onClick }) => {
    const [buttonStyle, setButtonStyle] = useState({ borderColor: "", color: "", backgroundColor: "#fff" })
    useEffect(() => {
        setButtonStyle({ borderColor: color, color, backgroundColor: "#fff" })
    }, [label, color])

    // const buttonStyle = () => {

    // }
    return (
        <button className={'button-container'} style={{ buttonStyle }}> {label}</ button>
    )
}

export default Button