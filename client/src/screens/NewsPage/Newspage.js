import React from 'react'
import "./styles.css"
import {
    Switch,
    Route,
    useRouteMatch,
    useHistory
  } from "react-router-dom";
import Landingheader from '../../images/landing_page-01.png'
import Carditem from '../../components/CardItem/Carditem'
import IMGBorder2 from '../../images/BGCard2.png'
import NewsIMG2 from '../../images/antonio-scant-z2NDh7a2QZE-unsplash.jpg'
import NewsIMG1 from '../../images/nipanan-lifestyle-pV2xU2rP580-unsplash.jpg'
import DetailNew from './DetailNewsPage/Detailnews'
import NewsheaderMobile from '../../images/news_page_01_mobile.png'
const Newspage =({screenWidth,...props})=>{
    const { url } = useRouteMatch();
    const history = useHistory()
   const news = [
       {
        id:1,
        desc:"Girls, have you heard that coconut water” helps women look radiant.",
        news_detail:"    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
        img:NewsIMG1,
        header:"Benefits Coconut water for health What is the best woman to drink?"
       },
       {
        id:2,
        img:NewsIMG1,
        desc:"Girls, have you heard that coconut water” helps women look radiant.",
        news_detail:"    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
        header:"Benefits Coconut water for health What is the best woman to drink?"
       },
       {
        id:3,
        img:NewsIMG1,
        desc:"Girls, have you heard that coconut water” helps women look radiant.",
        news_detail:"    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
        header:"Benefits Coconut water for health What is the best woman to drink?"
       },
       {
        id:4,
        desc:"Girls, have you heard that coconut water” helps women look radiant.",
        img:NewsIMG1,
        news_detail:"    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
        header:"Benefits Coconut water for health What is the best woman to drink?"
       },
       {
        id:5,
        desc:"Girls, have you heard that coconut water” helps women look radiant.",
        img:NewsIMG1,
        news_detail:"    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
        header:"Benefits Coconut water for health What is the best woman to drink?"
       },
       {
        id:6,
        desc:"Girls, have you heard that coconut water” helps women look radiant.",
        img:NewsIMG2,
        news_detail:"    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
        header:"Benefits Coconut water for health What is the best woman to drink?"
       },
   ]
   const lastest_news = news[news.length-1]
   const main_news = news.map((newse) => {
        if(newse.id <=3){
            return (
                <Carditem 
                    key={newse.id}
                    img={newse.img} 
                    textHeader={newse.header}
                    textDesc={screenWidth > 1024 && newse.desc}
                    width={"90%"} 
                                            height={"clamp(100px, 15vh, 160px)"}
                                            borderH={"100%"} 
                                            borderW={"100%"}
                    fontSize={{textHeader : "clamp(12px, 2vw, 24px)",textDesc:"clamp(10px, 4vw, 14px)"}}
                    top={"50%"}
                    onClick={()=>history.push(`${url}/${newse.id}`)}
                />
            //   <li key={newse.id}>
            //     <Link to={`${url}/${newse.id}`}>{newse.header}</Link>
            //   </li>
            );
        }
        return null
   });
   const main_news_mobile = news.map((newse) => {
    if(newse.id <=2){
        return (
            <Carditem 
                key={newse.id}
                img={newse.img} 
                textHeader={newse.header}
                width={"90%"} 
                                        height={"clamp(80px, 50%, 160px)"}
                                        borderH={"100%"} 
                                        borderW={"100%"}
                fontSize={{textHeader : "clamp(12px, 2vw, 24px)"}}
                top={"50%"}
                onClick={()=>history.push(`${url}/${newse.id}`)}
            />
        
        );
    }
    return null
});
const reccommend_news = news.map((newse) => {
            return <Carditem 
            key={newse.id}
            img={newse.img} 
            textHeader={newse.header}
            width={"90%"} 
                                    height={"160px"}
                                    borderH={"100%"} 
                                    borderW={"100%"}
            fontSize={{textHeader : "clamp(12px, 2vw, 24px)"}}
            top={"50%"}
            onClick={()=>history.push(`${url}/${newse.id}`)}
        />
});
const reccommend_news_mobile = news.map((newse) => {
    if(newse.id <=4){
        return (
            <Carditem 
                key={newse.id}
                img={newse.img} 
                textHeader={newse.header}
                width={"90%"} 
                                        height={"clamp(80px, 50%, 160px)"}
                                        borderH={"100%"} 
                                        borderW={"100%"}
                fontSize={{textHeader : "clamp(12px, 2vw, 24px)"}}
                top={"50%"}
                onClick={()=>history.push(`${url}/${newse.id}`)}
            />
        
        );
    }
    return null
});
    return(
        <Switch >
            <Route exact path={`${url}/:topicId`}>
                <DetailNew news={news} />
            </Route> 
            <Route exact path={url}>
                <div className="main-newspage-container">
                <div className="news-header">
                {screenWidth > 1024 ? <img src={Landingheader} alt="img"/> : <img src={NewsheaderMobile} alt="img"/>}
                    <div className="text-header">
                        <p>NEWS</p>
                    </div>
                </div>
                <div className="news-container">
                    <div className="news-main-container">
                            {screenWidth > 1024 ?
                                main_news:main_news_mobile
                            }
                    </div>
                    <div className="news-latest-container">
                    <div className="news-latest-item">
                            <p>LATEST</p>

                            <img src={IMGBorder2} alt='border' />
                                <div className="new-lastest-content"  onClick={()=>history.push(`${url}/${lastest_news.id}`)}>
                                    <img src={NewsIMG2} alt="img"/>
                                    <div className="description">
                                        <p className="text-header">{lastest_news.header}</p>
                                        {screenWidth>1024 && <p className="text-desc">
                                            {lastest_news.desc}
                                        </p>}
                                    </div>
                                </div>
                            </div>
                        {/* <img src={IMGBorder2} alt='border' /> */}
                        
                        {/* <div className="container"> */}
                            
                        {/* </div> */}
                    </div>
                    <div className="news-recommended-container">
                        <p>reccommended</p>
                        <div className="list-news-reccommended">
                                {screenWidth > 1024 ? reccommend_news : reccommend_news_mobile}
                        </div>
                        {/* <div className="list-news-reccommended">
                                {news.map((news)=>{
                                    if(news.id>3){
                                       return( 
                                        <Carditem 
                                        key={news.id}
                                            img={NewsIMG1} 
                                            textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                                            textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                                            width={"90%"} 
                                            height={150}
                                            borderH={"100%"} 
                                            borderW={300}
                                            fontSize={{textHeader : 22,textDesc:14}}
                                            top={"45%"}
                                            onClick={()=>history.push(`${url}/${news.id}`)}
                                        />
                                       ) 
                                    }
                                    return null
                                })
                                    
                                }
                        </div> */}

                                {/* <Carditem 
                                    img={NewsIMG1} 
                                    textHeader={"Benefits Coconut water for health What is the best woman to drink? "}
                                    textDesc={"Girls, have you heard that coconut water” helps women look radiant."}
                                    width={"90%"} 
                                    height={150}
                                    borderH={"100%"} 
                                    borderW={300}
                                    fontSize={{textHeader : 22,textDesc:14}}
                                    top={"45%"}
                                /> */}
                                {/* <Carditem img={NewsIMG1} 
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
                                    /> */}
                    </div>
                </div>
            
            </div>
        </Route> 
    </Switch>
        
    )
}
export default Newspage