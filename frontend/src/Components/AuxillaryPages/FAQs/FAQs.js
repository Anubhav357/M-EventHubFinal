import React, { useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import bgimage from "../../../pictures/PagesBG.jpg";
import "./FAQs.css";

import axios from "axios";

function FAQs() {
  const [faqContents, setfaqContents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/faq")
    .then(res=>{
      setfaqContents(res.data)
    });
    console.log(faqContents);
    document.title = "FAQs";
  });

  return (
    <div className="faqs d-flex flex-column">
      <Navbar activeTab={"FAQs"} />
      <div className="faqs-first">
        <img src={bgimage} className="faqs-image" alt="bgImage" />
        <div className="faqs-image-content">
          <p className="faqs-text">FAQs</p>
        </div>
      </div>
      <div
        className="accordion d-flex nowrap justify-content-center faq-accordian mb-3"
        id="accordionExample"
      >
        {faqContents.map((item) => {
          return (
            <div key={item.key} className="card faqs-card m-2">
              <div
                className="card-header faqs-card-header"
                id={`heading${item.keyword}`}
              >
                <h2 className="mb-0">
                  <button
                    className={`btn text-left ${
                      item.key !== 1 ? "collapsed" : ""
                    } faqs-accordian-button `}
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
  );
}

export default FAQs;
