import { Container, Grid } from '@material-ui/core'
import React from 'react'
import './styles.css'
import {
    useHistory,
    useParams
  } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import NewsHeader from '../../../images/antonio-scant-z2NDh7a2QZE-unsplash.jpg'
const DetailNew =({news})=>{
    let { topicId } = useParams();
    const history = useHistory()
    const raw_news_detail = "    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself."
    
    const news_data = news.find(p => p.id === Number(topicId));
    const new_data_news_news_detail = news_data.news_detail.split('\n').map(text=>
        {
            return <p className="detail-news">{text}</p>
        }
    )
    return(
        <div className="main-detailnewpage-container">
            <div className="goback" onClick={()=>history.replace('/news')}>
                <ArrowBackIosIcon style={{color:"#a99371"}}/>
                <p >NEWS </p>
            </div>
            <div className="detailnew-header">
                <p>
                    {news_data.header}
                    {/* Benefits Coconut water for health What is the best woman to drink? */}
                </p>
                <p className="date-post">
                    18 july 1990 , admin : dui
                </p>
            </div>
            <div className="new-content-container">
                <img className="img-news" src={news_data.img} alt="img"/>
                <div>
                    {new_data_news_news_detail}
                </div>
            </div>
           
        </div>
    )
}
export default DetailNew