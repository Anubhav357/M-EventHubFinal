import React, { useState, useEffect } from "react";
import "./Services.css";
import ManipulateIcons from "../ManipulateItems/manipulateicons";

function Services(props) {
  const [servicesDesc, setServicesDesc] = useState(
    "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!"
  );
  const [mouseClickOnList, setMouseClickOnList] = useState("1");
  const [mouseHoverOnList, setMouseHoverOnList] = useState("0");
  const [events, setEvents] = useState(null);

  useEffect(() => {
    setEvents(props.company.events);
  }, [props.company.events]);
  const handleServicesDescClick = () => {
    props.funct(setServicesDesc);
    props.type("text");
  };
  return (
    <div className="portfolio_services">
      <h1 className="portfolio_services__title">Services</h1>
      <div className="portfolio_services__contentBox">
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
            onClick={handleServicesDescClick}
          >
            <ManipulateIcons color="black" />
          </div>
        ) : (
          ""
        )}
        <p className="portfolio_about__content">{servicesDesc}</p>
      </div>
      <div className="portfolio_services__body">
        <div className="portfolio_services__body__left">
          <ul>
            <li
              onMouseEnter={() => setMouseHoverOnList("1")}
              onMouseLeave={() => setMouseHoverOnList("0")}
              onClick={() => setMouseClickOnList("1")}
              style={{
                backgroundColor: `${
                  mouseClickOnList === "1" || mouseHoverOnList === "1"
                    ? "#198dfa"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "1" || mouseHoverOnList === "1"
                    ? "#fff"
                    : "#198dfa"
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
                    ? "#198dfa"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "2" || mouseHoverOnList === "2"
                    ? "#fff"
                    : "#198dfa"
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
                    ? "#198dfa"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "3" || mouseHoverOnList === "3"
                    ? "#fff"
                    : "#198dfa"
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
                    ? "#198dfa"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "4" || mouseHoverOnList === "4"
                    ? "#fff"
                    : "#198dfa"
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
                    ? "#198dfa"
                    : ""
                }`,
                color: `${
                  mouseClickOnList === "5" || mouseHoverOnList === "5"
                    ? "#fff"
                    : "#198dfa"
                }`,
              }}
            >
              Wedding
            </li>
          </ul>
        </div>
        <div className="portfolio_services__body__right animate__animated animate__rollIn">
          {props.company.id && props.company.states
            ? mouseClickOnList !== "1"
              ? Object.values(
                  Object.values(events)[parseInt(mouseClickOnList) - 2]
                )[0].map((key, index) => {
                  return (
                    <div
                      key={index}
                      className="portfolio_services__body__right__card animate__animated animate__rollIn"
                    >
                      {props.company.states[key]}
                    </div>
                  );
                })
              : props.company.states.map((state, index) => {
                  return (
                    <div
                      key={index}
                      className="portfolio_services__body__right__card animate__animated animate__rollIn"
                    >
                      {state}
                    </div>
                  );
                })
            : ""}
        </div>
      </div>
    </div>
  );
}
export default Services;
