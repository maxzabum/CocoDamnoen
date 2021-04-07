import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import Carditem from '../../components/CardItem/Carditem'
import "./styles.css"
import Landingheader from '../../images/landing_page-01.png'
import BicepsPNG from '../../images/biceps.png'
import BagSVG from '../../images/bag.svg'
import CoconutPNG from '../../images/coconut.png'
import LandingOurstory from '../../images/our_story-03.png'
import ProductIMG from '../../images/Product-2.png'
import IngreIMG from '../../images/vera-gorbunova.png'
import BoxContent from '../../images/aromatic_content-10.png'
import CocoBG2 from '../../images/aromatic-02.png'
import IMGPreview1 from '../../images/black-coco-coco-nut-60713.png'
import IMGPreview2 from '../../images/IMG_8606.png'
import IMGPreview3 from '../../images/jonas-ducker.png'
import IMGPreview4 from '../../images/vera-gorbunova.png'
const Homepage =()=>{
    return(
        <div className="main-homepage-container">
            <div className="item-container landing-header">
                <img src={Landingheader} alt="img"/>
                <div className="text-header">
                    <p>COCO</p>
                    <p>DAMNOEN</p>
                </div>
                <div className="text-desc">
                    <p>THAI AROMATIC COCONUT</p>
                    <p>JELLY DRINK</p>
                </div>
            </div>
            <div container className="item-container landing-ourstory">
                <div className='top-grid'>
                        <div className='text-left'>
                            <div>
                                <p>THAI AROMATIC COCONUT</p>
                                <p>JELLY DRINK</p>
                            </div>
                        </div>
                        <div className='text-right'>
                            <div>
                                <div className='circle-container'>
                                    <img src={BicepsPNG} style={{width:64,height:60}} alt="img"/>
                                </div>
                                <p>HEALTHY</p>
                            </div>
                            <div>
                                <div className='circle-container'>
                                    <img src={BagSVG} style={{width:43.36,height:59.78}} alt="img"/>
                                </div>
                                    <p>CONVENIENT</p>
                            </div>
                            <div>
                                <div className='circle-container'>
                                    <img src={CoconutPNG} style={{width:44.55,height:60}} alt="img"/>
                                </div>
                                <p>DELICIOUS</p>
                            </div>
                        </div>
                   
                </div>
                <div className='bottom-grid'>
                    
                        <div item xs={12} sm={6} className='text-left'>
                            <img src={LandingOurstory} className='image-ourstory' alt="img"/>
                        </div>
                        <div item xs={12} sm={6} className='text-right'>
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
                        </div>
                </div>
            </div>
            <div  className="item-container landing-product">
                <div className="product-header">
                    <p>PRODUCT</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;Quality Aromatic coconuts come from a special soil in 
                        Damnoen Saduak, Ratchaburi, Thailand.
                    </p>
                </div>
                <div className="product-container" >
                        <div className='product-img'>
                            {/* <img src={ProductIMG} className='image-product' alt="img"/> */}
                            <Carditem img={ProductIMG} width={300} height={"auto"} 
                            borderH={650} borderW={550} 
                            fontSize={25}
                            top={"50%"}/>
                        </div>
                        <div className='product-ingredient'>
                            <Carditem img={IngreIMG} textHeader="AROMATIC COCONUT JUICE" 
                            width={100} 
                            height={100} 
                            borderH="100%" 
                            borderW="100%" 
                            fontSize={{textHeader : 25}}
                            top={"50%"}
                            />
                            <Carditem img={IngreIMG} 
                            textHeader="SUGAR" width={100} height={100} 
                            borderH="100%" borderW="100%" fontSize={{textHeader : 25}}
                            top={"50%"}
                            />
                            <Carditem img={IngreIMG} 
                            textHeader="SALT" width={100} 
                            height={100} fontSize={{textHeader:25}}
                            top={"50%"}/>
                            <Carditem img={IngreIMG} 
                            textHeader="CARRAGEENAN" width={100} 
                            height={100} borderH="100%" borderW="100%" fontSize={{textHeader : 25}}
                            top={"50%"}/>
                        </div>
                </div>
            </div>
            <div className="item-container landing-properties">
                <div className="left-container" >
                    <div className="text-container">
                        <p>AROMATIC COCONUT</p>
                        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quality Aromatic coconuts comes from a 
                            special soil in Ratchaburi. The soil  that is used, 
                            used to be under sea level in the past.  The 
                            aromatic coconuts contain all necessary vitamins 
                            and minerals that are beneficial for good health. 
                            Some benefits of Aromatic coconut juice
                        </p>
                    </div>
                    <div className="box-content">
                        <div className="box-container">
                            <img src={BoxContent}/>
                            <p>SLOWING DOWN OF ALZHEIMERS</p>
                        </div>
                        <div className="box-container">
                            <img src={BoxContent}/>
                            <p>GIVING YOUTHFUL AND GLOWING SKIN</p>
                        </div>
                        <div className="box-container">
                            <img src={BoxContent}/>
                            <p>THE BEST REFRESHMENT DRINK AND SPORT DRINK</p>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <img src={CocoBG2} />
                </div>
            </div>
            <div className="item-container landing-pictures">
                <p>COCO DAMNOEN</p>
                <div className="imgs-container">
                    <img src={IMGPreview1}/>
                    <img src={IMGPreview2}/>
                    <img src={IMGPreview3}/>
                    <img src={IMGPreview4}/>
                </div>
            </div>
        </div>
    )
}
export default Homepage