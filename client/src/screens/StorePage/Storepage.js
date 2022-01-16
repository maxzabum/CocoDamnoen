import React, { useEffect } from "react";
import "./styles.css";
import Landingheader from "../../images/store_page_01.jpg";
import Carditem from "../../components/CardItem/Carditem";
import IMGBorder2 from "../../images/BGCard2.png";
import NewsIMG2 from "../../images/new_preview_01.jpg";
import NewsIMG1 from "../../images/img-preview-04.jpg";
import LandingheaderMobile from "../../images/store_page_01_mobile.jpg";
const Storepage = ({ screenWidth, ...props }) => {
  useEffect(() => {
    return () => window.scrollTo(0, 0);
  }, []);
  const news = [
    {
      id: 1,
      desc:
        "Girls, have you heard that coconut water” helps women look radiant.",
      news_detail:
        "    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
      img: NewsIMG1,
      header:
        "Benefits Coconut water for health What is the best woman to drink?",
    },
    {
      id: 2,
      img: NewsIMG1,
      desc:
        "Girls, have you heard that coconut water” helps women look radiant.",
      news_detail:
        "    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
      header:
        "Benefits Coconut water for health What is the best woman to drink?",
    },
    {
      id: 3,
      img: NewsIMG1,
      desc:
        "Girls, have you heard that coconut water” helps women look radiant.",
      news_detail:
        "    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
      header:
        "Benefits Coconut water for health What is the best woman to drink?",
    },
    {
      id: 4,
      desc:
        "Girls, have you heard that coconut water” helps women look radiant.",
      img: NewsIMG1,
      news_detail:
        "    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
      header:
        "Benefits Coconut water for health What is the best woman to drink?",
    },
    {
      id: 5,
      desc:
        "Girls, have you heard that coconut water” helps women look radiant.",
      img: NewsIMG1,
      news_detail:
        "    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
      header:
        "Benefits Coconut water for health What is the best woman to drink?",
    },
    {
      id: 6,
      desc:
        "Girls, have you heard that coconut water” helps women look radiant.",
      img: NewsIMG2,
      news_detail:
        "    Girls, have you heard that coconut water helps women look radiant, soft, and also nourish the body? Adjust the hormones to balance women How true is this story? How much should I drink? When to drink? To be the best \n \nThairath Women invites women to find answers about the benefits of 'coconut water' to 'health'.\n \nThe benefits of 'coconut water' \n    - water coconut hormone estrogen. Helps the skin glow naturally white \n    - coconut water is extremely important to build collagen and elastin. Skin elasticity, firming help slow down the aging well \n    - coconut meat and coconut oil. Vitamins and minerals necessary for the body in its entirety, such as vitamin C, B vitamins, amino acids, calcium, magnesium, phosphorus, potassium, iron and fats that are beneficial to the body \n    - Coconut water is a natural body feeling refreshed. thirst, body absorbed within 5 minutes \n    - fruit juice is a mighty cold. Thereby cool off in the heat of the body \n    - helps detoxify toxic waste from the body. Or to detox itself.",
      header:
        "Benefits Coconut water for health What is the best woman to drink?",
    },
  ];
  const reccommend_store = news.map((newse) => {
    return (
      <Carditem
        key={newse.id}
        img={newse.img}
        textHeader={newse.header}
        width={"90%"}
        height={"clamp(80px, 50%, 160px)"}
        borderH={"100%"}
        borderW={"100%"}
        fontSize={{ textHeader: "clamp(12px, 2vw, 24px)" }}
        top={"50%"}
      />
    );
  });
  const reccommend_store_mobile = news.map((newse) => {
    if (newse.id <= 4) {
      return (
        <Carditem
          key={newse.id}
          img={newse.img}
          textHeader={newse.header}
          width={"90%"}
          height={"clamp(80px, 50%, 160px)"}
          borderH={"100%"}
          borderW={"100%"}
          fontSize={{ textHeader: "clamp(12px, 2vw, 24px)" }}
          top={"50%"}
        />
      );
    }
    return null;
  });
  return (
    <div className="main-storepage-container">
      <div className="store-header">
        {screenWidth > 1024 ? (
          <img src={Landingheader} alt="img" />
        ) : (
          <img src={LandingheaderMobile} alt="img" />
        )}
        <div className="text-header">
          <p>STORE</p>
        </div>
      </div>
      <div className="store-container">
        <div className="store-latest-container">
          <div className="store-latest-item">
            <p>NEWEst</p>
            <div className="items-container">
              <img src={IMGBorder2} alt="border" />
              <div className="store-lastest-content">
                <img src={NewsIMG2} alt="img" />
                <div className="description">
                  <p className="text-header">
                    THAI AROMATIC COCONUT JELLY DRINK
                  </p>
                  {screenWidth > 1024 && (
                    <p className="text-desc">
                      &nbsp;&nbsp;&nbsp;&nbsp;Quality Aromatic coconuts come
                      from a special soil in Damnoen Saduak, Ratchaburi,
                      Thailand. The soil that they are grown in, used to be
                      under sea level in the past. The aromatic coconuts contain
                      all necessary vitamins and minerals that are beneficial
                      for good health. Our quality product is made in Thailand.
                      We capture the freshness of the coconut juice.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="store-recommended-container">
          <p>reccommended</p>
          <div className="list-store-reccommended">
            {screenWidth > 1024 ? reccommend_store : reccommend_store_mobile}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Storepage;
