import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { COMPANIES } from "../../data/CompaniesData";
import TopBar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Pictures from "./components/PicturesOfEvents/Pictures";
import FAQs from "./components/FAQs/FAQs";
import ContactUs from "./components/ContactUs/ContactUs";
import SocialMediaHandles from "../SocialMediaHandles/SocialMediaHandles";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";
import Services from "./components/Services/Services";

function Portfolio() {
  const [isUser, setIsUser] = useState(true);
  const [companyId, setCompanyId] = useState("");
  const [company_details, setCompany_Details] = useState({});
  const [func, setFunc] = useState({ fcn: () => 3 });
  const [type, setType] = useState("text");

  useEffect(() => {
    document.title = "Portfolio";
    const url = window.location.href;
    const values = url.split("/");
    setIsUser(values[3] === "company" ? false : true);
    setCompanyId(values[5]);

    COMPANIES.map((company) => {
      if (company.id === parseInt(companyId)) {
        return setCompany_Details(company);
      }
      return "";
    });
  }, [companyId]);

  const getTypeForModal = (modalType) => {
    setType(modalType);
  };
  const getFunctionForModal = (fnctn) => {
    setFunc({ fcn: fnctn });
  };
  return (
    <div className="portfolioPage">
      {type === "" ? "" : <Modal function={func.fcn} type={type} />}
      <TopBar title={company_details.title} />
      <div id="homePage">
        <Home
          isUser={isUser}
          company={company_details}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>

      <div id="aboutPage">
        <About
          isUser={isUser}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>
      <div id="servicesPage">
        <Services
          isUser={isUser}
          company={company_details}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>
      <div id="portfolioPage">
        <Pictures
          isUser={isUser}
          company={company_details}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>

      <div id="faqsPage">
        <FAQs
          isUser={isUser}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>

      <div id="contactUsPage">
        <ContactUs
          isUser={isUser}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>

      <div style={{ background: "#e1e8f0" }}>
        <SocialMediaHandles />
      </div>
    </div>
  );
}
export default Portfolio;
