import { Container, Grid } from '@material-ui/core'
import React from 'react'
import "./styles.css"
import Landingheader from '../../images/landing_page-01.png'
import Carditem from '../../components/CardItem/Carditem'
import IMGBorder2 from '../../images/BGCard2.png'
import NewsIMG2 from '../../images/antonio-scant-z2NDh7a2QZE-unsplash.jpg'
import NewsIMG1 from '../../images/nipanan-lifestyle-pV2xU2rP580-unsplash.jpg'
const Newspage =()=>{
    return(
        <div className="main-newspage-container">
            <div className="news-header">
            <img src={Landingheader} alt="img"/>
                <div className="text-header">
                    <p>NEWS</p>
                </div>
            </div>
            <div className="news-container">
                <div className="news-main-container">
                    <Carditem 
                        img={NewsIMG1} 
                        textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                        textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                        width={"90%"} 
                        height={150}
                        borderH={"100%"} 
                        borderW={300}
                        fontSize={{textHeader : 22,textDesc:14}}
                        top={"45%"}
                    />
                    <Carditem img={NewsIMG1} 
                        textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                        textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                        width={"90%"} 
                        height={150}
                        borderH={"100%"} 
                        borderW={300}
                        fontSize={{textHeader : 22,textDesc:14}}
                        top={"45%"}
                        />
                    <Carditem img={NewsIMG1} 
                        textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                        textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                        width={"90%"} 
                        height={150}
                        borderH={"100%"} 
                        borderW={300}
                        fontSize={{textHeader : 22,textDesc:14}}
                        top={"45%"}
                        />
                </div>
                <div className="news-latest-container">
                    
                    {/* <img src={IMGBorder2} alt='border' /> */}
                    
                    {/* <div className="container"> */}
                        <div className="news-latest-item">
                        <p>LATEST</p>

                        <img src={IMGBorder2} alt='border' />
                            <div className="new-lastest-content">
                                <img src={NewsIMG2} alt="img"/>
                                <div className="description">
                                    <p className="text-header">THAI AROMATIC COCONUT JELLY DRINK</p>
                                    <p className="text-desc">
                                        &nbsp;&nbsp;&nbsp;&nbsp;Quality Aromatic coconuts come from a special soil 
                                        in Damnoen Saduak, Ratchaburi, Thailand. The soil  
                                        that they are grown in, used to be under sea level 
                                        in the past.  The aromatic coconuts contain all 
                                        necessary vitamins and minerals that are beneficial 
                                        for good health. Our quality product is made in Thailand. 
                                        We capture the freshness of the coconut juice.
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
                <div className="news-recommended-container">
                    <p>reccommended</p>
                    <div className="list-news-reccommended">
                            <Carditem 
                                img={NewsIMG1} 
                                textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                                textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                                width={"90%"} 
                                height={150}
                                borderH={"100%"} 
                                borderW={300}
                                fontSize={{textHeader : 22,textDesc:14}}
                                top={"45%"}
                            />
                            <Carditem img={NewsIMG1} 
                                textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                                textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                                width={"90%"} 
                                height={150}
                                borderH={"100%"} 
                                borderW={300}
                                fontSize={{textHeader : 22,textDesc:14}}
                                top={"45%"}
                                />
                                
                            <Carditem img={NewsIMG1} 
                                textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                                textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                                width={"90%"} 
                                height={150}
                                borderH={"100%"} 
                                borderW={300}
                                fontSize={{textHeader : 22,textDesc:14}}
                                top={"45%"}
                                />
                                </div>
                                <div className="list-news-reccommended">
                            <Carditem 
                                img={NewsIMG1} 
                                textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                                textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                                width={"90%"} 
                                height={150}
                                borderH={"100%"} 
                                borderW={300}
                                fontSize={{textHeader : 22,textDesc:14}}
                                top={"45%"}
                            />
                            
                            <Carditem img={NewsIMG1} 
                                textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                                textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                                width={"90%"} 
                                height={150}
                                borderH={"100%"} 
                                borderW={300}
                                fontSize={{textHeader : 22,textDesc:14}}
                                top={"45%"}
                                />
                            <Carditem img={NewsIMG1} 
                                textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                                textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                                width={"90%"} 
                                height={150}
                                borderH={"100%"} 
                                borderW={300}
                                fontSize={{textHeader : 22,textDesc:14}}
                                top={"45%"}
                                />
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Newspage