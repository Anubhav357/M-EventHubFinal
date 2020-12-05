import React, { useState } from "react";
import ManipulateIcons from "../ManipulateItems/manipulateicons";
import "./Card.css";

function Card(props) {
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const handleDescriptionClick = () => {
    props.funct(setDescription);
    props.type("text");
  };
  const handlePhotoClick = () => {
    props.funct(setPhoto);
    props.type("file");
  };

  return (
    <div
      className="card p-2 m-2"
      style={{
        width: "20rem",
        height: "auto",
        overflow: "none",
        background: "white",
      }}
    >
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
          onClick={handlePhotoClick}
        >
          <ManipulateIcons color="black" />
        </div>
      ) : (
        ""
      )}
      <img
        className="card-img-top"
        src={photo}
        alt="CardImageCap"
        style={{ width: "100%", height: "10rem" }}
      />
      <div className="card-body">
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
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
