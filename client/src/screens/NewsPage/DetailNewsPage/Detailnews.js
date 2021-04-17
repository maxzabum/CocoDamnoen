import React from "react";
import "./styles.css";
import { useHistory, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const DetailNew = ({ news }) => {
  let { topicId } = useParams();
  const history = useHistory();
  const news_data = news.find((p) => p.id === Number(topicId));
  const new_data_news_news_detail = news_data.news_detail
    .split("\n")
    .map((text, id) => {
      return (
        <p key={id} className="detail-news">
          {text}
        </p>
      );
    });
  return (
    <div className="main-detailnewpage-container">
      <div className="goback" onClick={() => history.replace("/news")}>
        <ArrowBackIosIcon style={{ color: "#a99371" }} />
        <p>NEWS </p>
      </div>
      <div className="detailnew-header">
        <p>
          {news_data.header}
          {/* Benefits Coconut water for health What is the best woman to drink? */}
        </p>
        <p className="date-post">
          {news_data.date} , {news_data.writer}
        </p>
      </div>
      <div className="new-content-container">
        <img className="img-news" src={news_data.img} alt="img" />
        <div>{new_data_news_news_detail}</div>
      </div>
    </div>
  );
};
export default DetailNew;
