import React, { useEffect } from "react";
import OurStoryHeader from "../../images/ourstory_page_01.jpg";
import OurStoryIMG1 from "../../images/ourstory-content-01.png";
import OurStoryIMG2 from "../../images/ourstory-content-02.png";
import OurStoryIMG3 from "../../images/ourstory-content-03.png";
import OurStoryHeaderMobile from "../../images/ourstory_page_mobile.jpg";
import "./styles.css";
const Ourstorypage = ({ screenWidth, ...props }) => {
  useEffect(() => {
    // window.scrollTo(0, 0);
    // console.log(location);
    return () => window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-ourstorypage-container">
      <div className="item-container ourstory-header">
        {screenWidth > 600 ? (
          <img src={OurStoryHeader} alt="img" />
        ) : (
          <img src={OurStoryHeaderMobile} alt="img" />
        )}
        <div className="text-header">
          <p>OUR</p>
          <p>STORY</p>
        </div>
        <div className="text-desc">
          <p>THAI AROMATIC COCONUT</p>
          <p>JELLY DRINK</p>
        </div>
      </div>
      <div className="item-container ourstory-1">
        <p>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quality Aromatic coconuts come from a
          special soil in Damnoen Saduak, Ratchaburi, Thailand. The soil that
          they are grown in, used to be under sea level in the past. The
          aromatic coconuts contain all necessary vitamins and minerals that are
          beneficial for good health. Our quality product is made in Thailand.
          We capture the freshness of the coconut juice.
        </p>
        <div className="content-container">
          <img src={OurStoryIMG1} alt="img" />
          <div className="content-text-container">
            <div className="number-toppic">
              <p>1</p>
            </div>
            <p>FRESH FROM OUR FARM</p>
            <p>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;Aromatic coconuts are collected from our
              family farm in Damnoen saduak, Ratchaburi, Thailand.
            </p>
          </div>
        </div>
      </div>
      <div className="item-container ourstory-1">
        {screenWidth > 1024 ? (
          <div className="content-container">
            <div className="content-text-container reverse">
              <div className="number-toppic">
                <p>2</p>
              </div>
              <p>Natural preservation method</p>
              <p>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Our research team utilize preservation
                methods that are 100% natural, with no additives or
                preservatives in order to keep our mission to bring fresh
                essentials to your family. Quality foods preserved for your
                convenience and ease-of-use, while still delivering all the
                taste and nutrition of fresh foods. That???s why we utilize
                several preservation methods that are 100% natural, with no
                additives or preservatives, that maintain many of the qualities
                that make fresh foods so desirable.
              </p>
            </div>
            <img src={OurStoryIMG2} alt="img" />
          </div>
        ) : (
          <div className="content-container">
            <img src={OurStoryIMG2} alt="img" />
            <div className="content-text-container reverse">
              <div className="number-toppic">
                <p>2</p>
              </div>
              <p>Natural preservation method</p>
              <p>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Our research team utilize preservation
                methods that are 100% natural, with no additives or
                preservatives in order to keep our mission to bring fresh
                essentials to your family. Quality foods preserved for your
                convenience and ease-of-use, while still delivering all the
                taste and nutrition of fresh foods. That???s why we utilize
                several preservation methods that are 100% natural, with no
                additives or preservatives, that maintain many of the qualities
                that make fresh foods so desirable.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="item-container ourstory-1">
        <div className="content-container">
          <img src={OurStoryIMG3} alt="img" />
          <div className="content-text-container">
            <div className="number-toppic">
              <p>3</p>
            </div>
            <p>Convenience for eating, travelling and storage.</p>
            <p>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;We carefully pick the pouch with a big lid
              that is ergonomic for easy opening and closing. The pouch is easy
              to be stored in the fridge or an ice pack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ourstorypage;
