import React, { useState, useEffect } from "react";
import "./Pictures.css";
import ManipulateIcons from "../ManipulateItems/manipulateicons";

function Picture(props) {
  const [PictureDesc, setPictureDesc] = useState(
    "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!"
  );
  const [mouseClickOnList, setMouseClickOnList] = useState("1");
  const [mouseHoverOnList, setMouseHoverOnList] = useState("0");
  const [Pictures, setPictures] = useState(null);
  const [photo, setPhoto] = useState("");
  const [photoNum, setPhotoNum] = useState(-1);

  useEffect(() => {
    setPictures(props.company.eventsPhotos);
  }, [props.company.eventsPhotos]);
  const handlePictureDescClick = () => {
    props.funct(setPictureDesc);
    props.type("text");
  };
  const handlePhotoClick = (num) => {
    setPhotoNum(num);
    props.funct(setPhoto);
    props.type("file");
  };
  return (
    <div className="portfolio_Picture">
      <h1 className="portfolio_Picture__title">Portfolio</h1>
      <div className="portfolio_Picture__contentBox">
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
            onClick={handlePictureDescClick}
          >
            <ManipulateIcons color="white" />
          </div>
        ) : (
          ""
        )}
        <p className="portfolio_about__content">{PictureDesc}</p>
      </div>
      <div className="portfolio_Picture__body">
        <div className="portfolio_Picture__body__left">
          <ul>
            <li
              onMouseEnter={() => setMouseHoverOnList("1")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("1")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "1" || mouseHoverOnList === "1"
                    ? "#fff"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "1" || mouseHoverOnList === "1"
                    ? "#198dfa"
                    : "#fff"
                }`,
              }}
            >
              All Events
            </li>
            <li
              onMouseEnter={() => setMouseHoverOnList("2")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("2")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "2" || mouseHoverOnList === "2"
                    ? "#fff"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "2" || mouseHoverOnList === "2"
                    ? "#198dfa"
                    : "#fff"
                }`,
              }}
            >
              Birthday
            </li>
            <li
              onMouseEnter={() => setMouseHoverOnList("3")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("3")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "3" || mouseHoverOnList === "3"
                    ? "#fff"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "3" || mouseHoverOnList === "3"
                    ? "#198dfa"
                    : "#fff"
                }`,
              }}
            >
              Reception
            </li>
            <li
              onMouseEnter={() => setMouseHoverOnList("4")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("4")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "4" || mouseHoverOnList === "4"
                    ? "#fff"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "4" || mouseHoverOnList === "4"
                    ? "#198dfa"
                    : "#fff"
                }`,
              }}
            >
              Engagement
            </li>
            <li
              onMouseEnter={() => setMouseHoverOnList("5")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("5")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "5" || mouseHoverOnList === "5"
                    ? "#fff"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "5" || mouseHoverOnList === "5"
                    ? "#198dfa"
                    : "#fff"
                }`,
              }}
            >
              Wedding
            </li>
          </ul>
        </div>
        <div className="portfolio_Picture__body__right animate__animated animate__rollIn">
          {props.company.id && props.company.images
            ? mouseClickOnList !== "1"
              ? Object.values(
                  Object.values(Pictures)[parseInt(mouseClickOnList) - 2]
                )[0].map((key, index) => {
                  return (
                    <div>
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
                          onClick={() => handlePhotoClick(index)}
                        >
                          <ManipulateIcons color="white" />
                        </div>
                      ) : (
                        ""
                      )}
                      <img
                        key={index}
                        src={
                          props.company.images[key] === "Hello" ||
                          photoNum === index
                            ? photo
                            : ""
                        }
                        alt="imagePhoto"
                        className="portfolio_Picture__body__right__card animate__animated animate__rollIn"
                      />
                    </div>
                  );
                })
              : props.company.images.map((image, index) => {
                  return (
                    <div>
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
                          onClick={() => handlePhotoClick(index)}
                        >
                          <ManipulateIcons color="white" />
                        </div>
                      ) : (
                        ""
                      )}
                      <img
                        key={index}
                        src={
                          image === "Hello" || photoNum === index ? photo : ""
                        }
                        alt="imagePhoto"
                        className="portfolio_Picture__body__right__card animate__animated animate__rollIn"
                      />
                    </div>
                  );
                })
            : ""}
        </div>
      </div>
    </div>
  );
}
export default Picture;
