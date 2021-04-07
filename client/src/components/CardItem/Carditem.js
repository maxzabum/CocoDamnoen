import React from 'react'
import Border from './borderPng.png'
import BorderIngre from './product_content-12.png'
import "./cardStyles.css"
const Carditem = ({img,textHeader,width,height,borderW,borderH,fontSize,top,textDesc,imgBorder,onClick,...props}) =>{
    return(
        <div className="card-container" onClick={onClick}>
            <img src={imgBorder ? imgBorder : BorderIngre} style={{width:borderW,height:borderH}} className="img-content" />
            <div className="card-content" style={{top:top}}>
                <img src={img} alt="img-ingre" style={{width:width,height:height}}/>
                {textHeader && <p style={{fontSize:fontSize.textHeader}}>{textHeader}</p>}
                {textDesc && <p style={{fontSize:fontSize.textDesc}}>{textDesc}</p>} 
            </div>
        </div>
    )
}
export default Carditem