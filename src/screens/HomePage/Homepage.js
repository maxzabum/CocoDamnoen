import React, { useEffect } from "react";
import Carditem from "../../components/CardItem/Carditem";
import "./styles.css";
import LandingheaderMobile from "../../images/landing_page_mobile.jpg";
import Landingheader from "../../images/landing_page_01.jpg";
import BicepsPNG from "../../images/biceps.png";
import BagSVG from "../../images/bag.svg";
import CoconutPNG from "../../images/coconut.png";
import LandingOurstory from "../../images/ourstory-content.jpg";
import ProductIMG from "../../images/product-01.png";
import IngreIMG from "../../images/img-preview-04.jpg";
import BoxContent from "../../images/aromatic_content-10.png";
import CocoBG2 from "../../images/aromatic-02.jpg";
import IMGPreview1 from "../../images/img-preview-01.jpg";
import IMGPreview2 from "../../images/img-preview-02.jpg";
import IMGPreview3 from "../../images/img-preview-03.jpg";
import IMGPreview4 from "../../images/img-preview-04.jpg";
import { useHistory } from "react-router-dom";
import BoxContentMobile from "../../images/border-properties-mobile.png";
const Homepage = ({ screenWidth, ...props }) => {
  useEffect(() => {
    // window.scrollTo(0, 0);
    // console.log(location);
    return () => window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="main-homepage-container">
      <div className="item-container landing-header">
        {screenWidth > 600 ? (
          <img src={Landingheader} alt="img" />
        ) : (
          <img src={LandingheaderMobile} alt="img" />
        )}
        <div className="text-header">
          <p>COCO</p>
          <p>DAMNOEN</p>
        </div>
        <div className="text-desc">
          <p>THAI AROMATIC COCONUT</p>
          <p>JELLY DRINK</p>
        </div>
      </div>
      <div className="item-container landing-ourstory">
        <div className="top-grid">
          <div className="text-left">
            <p>THAI AROMATIC COCONUT</p>
            <p>JELLY DRINK</p>
          </div>
          <div className="text-right">
            <div>
              <div className="circle-container">
                <img
                  src={BicepsPNG}
                  style={
                    screenWidth > 768
                      ? { width: 64, height: 60 }
                      : { width: 44, height: 40 }
                  }
                  alt="img"
                />
              </div>
              <p>HEALTHY</p>
            </div>
            <div>
              <div className="circle-container">
                <img
                  src={BagSVG}
                  style={
                    screenWidth > 768
                      ? { width: 43.36, height: 59.78 }
                      : {
                          width: 33.36,
                          height: 49.78,
                        }
                  }
                  alt="img"
                />
              </div>
              <p>CONVENIENT</p>
            </div>
            <div>
              <div className="circle-container">
                <img
                  src={CoconutPNG}
                  style={
                    screenWidth > 768
                      ? { width: 44.55, height: 60 }
                      : { width: 39.55, height: 55 }
                  }
                  alt="img"
                />
              </div>
              <p>DELICIOUS</p>
            </div>
          </div>
        </div>
        <div className="bottom-grid">
          <div className="text-left">
            <img src={LandingOurstory} className="image-ourstory" alt="img" />
          </div>
          <div className="text-right">
            <p>OUR STORY</p>
            <p>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quality Aromatic
              coconuts come from a special soil in Damnoen Saduak, Ratchaburi,
              Thailand. The soil that they are grown in, used to be under sea
              level in the past. The aromatic coconuts contain all necessary
              vitamins and minerals that are beneficial for good health. Our
              quality product is made in Thailand. We capture the freshness of
              the coconut juice.
            </p>
            <button onClick={() => history.push("/ourstory")}>
              SEE OUR STORY
            </button>
          </div>
        </div>
      </div>
      <div className="item-container landing-product">
        <div className="product-header">
          <p>PRODUCT</p>
          <p>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;Quality Aromatic coconuts come from a
            special soil in Damnoen Saduak, Ratchaburi, Thailand.
          </p>
        </div>
        <div className="product-container">
          <div className="product-img">
            {/* <img src={ProductIMG} className='image-product' alt="img"/> */}
            <Carditem
              img={ProductIMG}
              width={"min(300px, 40vw)"}
              height={"auto"}
              borderH={"max(50%, 650px)"}
              borderW={"min(550px, 80vw)"}
              top={"50%"}
            />
          </div>
          <div className="product-ingredient">
            <Carditem
              img={IngreIMG}
              textHeader="AROMATIC COCONUT JUICE"
              width={"min(100px, 15vw)"}
              height={"min(100px, 15vw)"}
              borderH="100%"
              borderW="100%"
              fontSize={{ textHeader: "clamp(12px, 4vw, 24px)" }}
              top={"50%"}
            />
            <Carditem
              img={IngreIMG}
              textHeader="SUGAR"
              width={"min(100px, 15vw)"}
              height={"min(100px, 15vw)"}
              borderH="100%"
              borderW="100%"
              fontSize={{ textHeader: "clamp(12px, 4vw, 24px)" }}
              top={"50%"}
            />
            <Carditem
              img={IngreIMG}
              textHeader="SALT"
              borderH="100%"
              borderW="100%"
              width={"min(100px, 15vw)"}
              height={"min(100px, 15vw)"}
              fontSize={{ textHeader: "clamp(12px, 4vw, 24px)" }}
              top={"50%"}
            />
            <Carditem
              img={IngreIMG}
              textHeader="CARRAGEENAN"
              width={"min(100px, 15vw)"}
              height={"min(100px, 15vw)"}
              borderH="100%"
              borderW="100%"
              fontSize={{ textHeader: "clamp(12px, 4vw, 24px)" }}
              top={"50%"}
            />
          </div>
        </div>
      </div>
      {screenWidth > 600 ? (
        <div className="item-container landing-properties">
          <div className="item-container landing-properties top-container">
            <div className="left-container">
              <div className="text-container">
                <p>AROMATIC COCONUT</p>
                <p>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quality Aromatic coconuts comes
                  from a special soil in Ratchaburi. The soil that is used, used
                  to be under sea level in the past. The aromatic coconuts
                  contain all necessary vitamins and minerals that are
                  beneficial for good health. Some benefits of Aromatic coconut
                  juice
                </p>
              </div>
            </div>
            <div className="right-container">
              <img src={CocoBG2} alt={"bg-img"} />
            </div>
          </div>
          <div className="box-content">
            <div className="box-container">
              <img src={BoxContent} alt={"img"} />
              <p>SLOWING DOWN OF ALZHEIMERS</p>
            </div>
            <div className="box-container">
              <img src={BoxContent} alt={"img"} />
              <p>GIVING YOUTHFUL AND GLOWING SKIN</p>
            </div>
            <div className="box-container">
              <img src={BoxContent} alt={"img"} />
              <p>THE BEST REFRESHMENT DRINK AND SPORT DRINK</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="item-container landing-properties">
          <div className="right-container">
            <img src={CocoBG2} alt={"img"} />
          </div>
          <div className="left-container">
            <div className="text-container">
              <p>AROMATIC COCONUT</p>
              <p>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quality Aromatic coconuts comes
                from a special soil in Ratchaburi. The soil that is used, used
                to be under sea level in the past. The aromatic coconuts contain
                all necessary vitamins and minerals that are beneficial for good
                health. Some benefits of Aromatic coconut juice
              </p>
            </div>
            <div className="box-content">
              <div className="box-container-mobile">
                <img src={BoxContentMobile} alt="img" />
                <p>SLOWING DOWN OF ALZHEIMERS</p>
              </div>
              <div className="box-container-mobile">
                <img src={BoxContentMobile} alt="img" />
                <p>GIVING YOUTHFUL AND GLOWING SKIN</p>
              </div>
              <div className="box-container-mobile">
                <img src={BoxContentMobile} alt="img" />
                <p>THE BEST REFRESHMENT DRINK AND SPORT DRINK</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="item-container landing-pictures">
        <p>COCO DAMNOEN</p>
        <div className="imgs-container">
          <img src={IMGPreview1} alt="img" />
          <img src={IMGPreview2} alt="img" />
          <img src={IMGPreview3} alt="img" />
          <img src={IMGPreview4} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
