import React, { useState } from "react";
import faqImage from "../../../../pictures/faqImage.png";
import ManipulateIcons from "../ManipulateItems/manipulateicons";
import "./FAQs.css";

function FAQs(props) {
  const [description, setDescription] = useState(
    "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!"
  );
  const handleDescriptionClick = () => {
    props.funct(setDescription);
    props.type("text");
  };
  const faqContents = [
    {
      key: 1,
      keyword: "One",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
    {
      key: 2,
      keyword: "Two",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
    {
      key: 3,
      keyword: "Three",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
    {
      key: 4,
      keyword: "Four",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
    {
      key: 5,
      keyword: "Five",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
  ];
  return (
    <div className="portfolio_faqs">
      <h1 className="portfolio_faqs__title">Frequently Asked Questions</h1>
      <div className="portfolio_faqs__contentBox">
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
        <p className="portfolio_faqs__content">{description}</p>
      </div>
      <div className="portfolio_faqs__content__leftRight">
        <div className="portfolio_faqs__content__left">
          <div
            className=" flex-column align-items-center nowrap justify-content-center faq-accordian mb-3 w-100"
            id="accordionExample"
          >
            {faqContents.map((item) => {
              return (
                <div key={item.key} className=" faqs-card w-80">
                  <div className="portfolio_faqs-card-header">
                    <h2 className="mb-0">
                      <button
                        className={`btn btn-block text-left ${
                          item.key !== 1 ? "collapsed" : ""
                        }  `}
                        style={{ color: "white" }}
                        type=""
                        data-toggle="collapse"
                        data-target={`#collapse${item.keyword}`}
                        aria-expanded="false"
                        aria-controls={`collapse${item.keyword}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                  </div>
                  <div
                    id={`collapse${item.keyword}`}
                    className="collapse"
                    aria-labelledby={`headingOne${item.keyword}`}
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="portfolio_faqs__content__right">
          <img src={faqImage} alt="faqImage" />
        </div>
      </div>
    </div>
  );
}

export default FAQs;
