import React, { useEffect } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import "./AboutUs.css";
import bgimage from "../../../pictures/PagesBG.jpg";
import image1 from "../../../pictures/two.jpg";
import image2 from "../../../pictures/three.jpg";

function AboutUs() {
  const aboutContent = [
    {
      key: 1,
      image: image1,
      content:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
    {
      key: 2,
      image: image2,
      content:
        "It’s your go-to platform, if you want to organize an event and don’t know which organising company will be best suited for you. At EventHub you will find all available plans of Inmarket organising companies for different events according to your requirements at your very screen.",
    },
  ];
  useEffect(() => {
    document.title = "About us";
  }, []);
  return (
    <div className="aboutUs d-flex flex-column">
      <Navbar activeTab={"About Us"} />
      <div className="aboutUs-first">
        <img src={bgimage} className="aboutUs-image" alt="photos" />
        <div className="aboutUs-image-content">
          <p className="aboutUs-text">About Us</p>
        </div>
      </div>
      <div className="d-flex flex-column mt-3 aboutUs-content">
        {aboutContent.map((item) => {
          return (
            <div
              key={item.key}
              className={`d-xl-flex d-lg-flex d-md-flex ${
                item.key % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } justify-content-between justify-content-center align-items-center aboutUs-Content p-2 m-3`}
            >
              <p className="aboutUs-Content-text p-2 m-3">{item.content}</p>
              <img
                src={item.image}
                className="aboutUs-Content-image p-2 m-3 justify-content-center align-items-center"
                alt="photos"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutUs;
