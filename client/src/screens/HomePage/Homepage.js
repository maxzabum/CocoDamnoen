import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Carditem from '../../components/CardItem/Carditem'
import "./styles.css"
import Landingheader from './landing_page-01.png'
import BicepsPNG from './biceps.png'
import BagSVG from './bag.svg'
import CoconutPNG from './coconut.png'
import LandingOurstory from './our_story-03.png'
const Homepage =()=>{
    return(
        <div className="main-homepage-container">
            <Grid container className="item-container landing-header">
                <img src={Landingheader}/>
                <div className="text-header">
                    <p>COCO</p>
                    <p>DAMNOEN</p>
                </div>
                <div className="text-desc">
                    <p>THAI AROMATIC COCONUT</p>
                    <p>JELLY DRINK</p>
                </div>
            </Grid>
            <Grid container className="item-container landing-ourstory">
                <div className='top-grid'>
                    <Grid container>
                        <Grid item xs={12} sm={6} className='text-left'>
                            <div>
                                <p>THAI AROMATIC COCONUT</p>
                                <p>JELLY DRINK</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} className='text-right'>
                            <div>
                                <div className='circle-container'>
                                    <img src={BicepsPNG} style={{width:74,height:70}}/>
                                </div>
                                <p>HEALTHY</p>
                            </div>
                            <div>
                                <div className='circle-container'>
                                    <img src={BagSVG} style={{width:53.36,height:69.78}}/>
                                </div>
                                    <p>CONVENIENT</p>
                            </div>
                            <div>
                                <div className='circle-container'>
                                    <img src={CoconutPNG} style={{width:54.55,height:70}}/>
                                </div>
                                <p>DELICIOUS</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='bottom-grid'>
                    <Grid container>
                        <Grid item xs={12} sm={6} className='text-left'>
                            <img src={LandingOurstory} className='image-ourstory'/>
                        </Grid>
                        <Grid item xs={12} sm={6} className='text-right'>
                            <p>OUR STORY</p>
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quality Aromatic coconuts come from a special soil in 
                                Damnoen Saduak, Ratchaburi, Thailand. The soil that 
                                they are grown in, used to be under sea level in the 
                                past. The aromatic coconuts contain all necessary 
                                vitamins and minerals that are beneficial for good 
                                health. Our quality product is made in Thailand. 
                                We capture the freshness of the coconut juice.
                            </p>
                            <button>SEE OUR STORY</button>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid container className="item-container landing-product">
                <div style={{backgroundColor:"yellow"}}>
                </div>
                <div className="product-ingredients" style={{backgroundColor:"yellow"}}>
                </div>
            </Grid>
            <Grid container className="item-container landing-prooerties">
                <p>dsade</p>
            </Grid>
            <Grid container className="item-container landing-pictures">
                <p>dsade</p>
            </Grid>
        </div>
    )
}
export default Homepage