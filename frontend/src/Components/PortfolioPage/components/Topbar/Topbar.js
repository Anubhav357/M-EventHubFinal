import React from "react";
import "./Topbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

function Topbar(props) {
  return (
    <nav className="navbar navbar-expand-lg topbar">
      <p style={{ fontSize: "1.5rem", fontWeight: "700", cursor: "pointer" }}>
        <Link to="homePage" smooth={true} duration={1000}>
          {props.title}
        </Link>
      </p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" style={{ color: "white " }}>
          <AiOutlineMenu />
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-0 ml-auto topbar__right">
          <li className="mr-3" style={{ cursor: "pointer" }}>
            <section id="about">
              <Link to="aboutPage" smooth={true} duration={1000}>
                About
              </Link>
            </section>
          </li>
          <li className="mr-3" style={{ cursor: "pointer" }}>
            <section id="home">
              <Link to="servicesPage" smooth={true} duration={1000}>
                Services
              </Link>
            </section>
          </li>
          <li className="mr-3 " style={{ cursor: "pointer" }}>
            <section id="portfolio">
              <Link to="portfolioPage" smooth={true} duration={1000}>
                Portfolio
              </Link>
            </section>
          </li>
          <li className="mr-3 " style={{ cursor: "pointer" }}>
            <section id="portfolio">
              <Link to="faqsPage" smooth={true} duration={1000}>
                FAQs
              </Link>
            </section>
          </li>
          <li className="mr-3 " style={{ cursor: "pointer" }}>
            <section id="contact_us">
              <Link to="contactUsPage" smooth={true} duration={1000}>
                Contact us
              </Link>
            </section>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Topbar;
