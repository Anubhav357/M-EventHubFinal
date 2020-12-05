import React, { useState } from "react";
import "./About.css";
import ManipulateIcons from "../ManipulateItems/manipulateicons";
import Card from "../Card/Card";

function About(props) {
  const [description, setDescription] = useState(
    "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!"
  );
  const handleDescriptionClick = () => {
    props.funct(setDescription);
    props.type("text");
  };
  return (
    <div className="portfolio_about">
      <h1 className="portfolio_about__title">About</h1>
      <div className="portfolio_about__contentBox">
        {!props.isUser ? (
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "0px",
              textAlign: "end",
            }}
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleDescriptionClick}
          >
            <ManipulateIcons color="black" />
          </div>
        ) : (
          ""
        )}
        <p className="portfolio_about__content">{description}</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <Card isUser={props.isUser} funct={props.funct} type={props.type} />
        <Card isUser={props.isUser} funct={props.funct} type={props.type} />
        <Card isUser={props.isUser} funct={props.funct} type={props.type} />
      </div>
    </div>
  );
}

export default About;
