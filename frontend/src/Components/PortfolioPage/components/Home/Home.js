import React, { useState } from "react";
import "./Home.css";
import Five from "../../../../pictures/five.png";
import ManipulateIcons from "../ManipulateItems/manipulateicons";
import { Link } from "react-router-dom";

function Home(props) {
  const [title, setTitle] = useState("Crafted for Business");
  const [head, setHead] = useState(
    "We blend insights and strategy to create digital products for forward-thinking organisations."
  );

  const handleTitleClick = () => {
    props.funct(setTitle);
    props.type("text");
  };
  const handleHeadClick = () => {
    props.funct(setHead);
    props.type("text");
  };
  return (
    <div className="portfolio_home">
      <div className="portfolio_home__left">
        {!props.isUser ? (
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "0px",
            }}
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleTitleClick}
          >
            <ManipulateIcons />
          </div>
        ) : (
          ""
        )}
        <h1 className="portfolio_home__left__title">{title}</h1>
        {!props.isUser ? (
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "0px",
            }}
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleHeadClick}
          >
            <ManipulateIcons />
          </div>
        ) : (
          ""
        )}
        <p className="portfolio_home__left__home">{head}</p>
        <div className="portfolio_home__left__button">
          <Link href={props.company.website} target="_blank">
            <button className="goToWebsiteButton">Go to our Website</button>
          </Link>
        </div>
      </div>
      <div className="portfolio_home__right">
        <img className="rightImage" src={Five} alt="portfolioImage" />
      </div>
    </div>
  );
}

export default Home;
