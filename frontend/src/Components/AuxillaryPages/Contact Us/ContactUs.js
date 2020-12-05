import React, { useEffect } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import "./ContactUs.css";
import bgimage from "../../../pictures/PagesBG.jpg";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import SocialMediaHandles from "../../SocialMediaHandles/SocialMediaHandles";

function ContactUs() {
  useEffect(() => {
    document.title = "Contact us";
  }, []);
  return (
    <div className="contactUs d-flex flex-column ">
      <Navbar activeTab={"Contact us"} />
      <div className="contactUs-first">
        <img src={bgimage} className="contactUs-image" alt="..." />
        <div className="contactUs-image-content">
          <p className="contactUs-text">Contact Us</p>
          <p className="contactUs-text-by">-Event Hub Team</p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between h-100">
        <div
          className={`d-flex ml-3 ${
            window.innerWidth < 700
              ? "flex-column justify-content-center"
              : "flex-row"
          } flex-row contactUs-details justify-content-between m-4`}
        >
          <div className="d-flex w-auto flex-row">
            <ul className="p-3">
              <li className="justify-content-center align-items-center">
                <BsFillEnvelopeFill className="mr-1" />
                <b>Mail us at : </b>
              </li>
              <li>eventhub123@gmail.com</li>
            </ul>
          </div>
          <div className="d-flex w-auto flex-row">
            <ul className="p-3">
              <li>
                <MdCall className="mr-1" />
                <b>Call us at : </b>
              </li>
              <li>(+91) 1234567890 </li>
            </ul>
          </div>
          <div className="d-flex w-auto flex-row ">
            <ul className="p-3">
              <li>
                <FaHome className="mr-1" />
                <b>Head Office : </b>
              </li>
              <li>
                Nescii Lawns, NSUT, Azad Hind Fauz Marg, sec-3 Dwarka, New
                Delhi.
              </li>
            </ul>
          </div>
        </div>
        <div className="contactUs-socialMedia">
          <SocialMediaHandles />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
