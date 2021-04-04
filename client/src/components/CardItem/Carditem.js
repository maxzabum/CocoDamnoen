import React from 'react'
import Border from './borderPng.png'
import CocoD from './cocoD.jpg'
import "./cardStyles.css"
import { Grid } from '@material-ui/core'
const Carditem = () =>{
    return(
        <Grid container className="container">
            {/* <p>dsad</p> */}
            {/* <img src={Border} className="card-container"/> */}
            <Grid item xs={12} className="card-content">
                <img src={CocoD} className="img-content"/>
                <p>dsaew</p>
            </Grid>
        </Grid>
    )
}
export default Carditem