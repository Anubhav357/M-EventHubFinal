import React from "react";
import "./ContactUs.css";
import contactUsImage from "../../../../pictures/contactUsIcon.png";

function ContactUs() {
  const handleSubmitQuestions = (e) => {
    e.preventDefault();
  };
  return (
    <div className="portfolio_contactUs">
      <div className="portfolio_contactUs__title">Have Some Questions?</div>
      <div className="portfolio_contactUs__content">
        <div className="portfolio_contactUs__content__left">
          <img src={contactUsImage} alt="contactUsImage" />
        </div>
        <div className="portfolio_contactUs__content__right">
          <div className="portfolio_contactUs__content__right__title">
            Message us
          </div>
          <form onSubmit={handleSubmitQuestions}>
            <input type="text" placeholder="Enter your name" name="name" />
            <input
              type="phone"
              placeholder="Enter your phone number"
              name="phone_num"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
            />
            <textarea
              placeholder="Enter your message"
              name="question"
            ></textarea>
            <input className="submitButton" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
