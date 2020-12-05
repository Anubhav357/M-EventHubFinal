import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import "./Home.css";
import HomeOne from "./Home_One";
import HomeTwo from "./Home_Two";
import HomeThree from "./Home_Three";

import SocialMediaHandles from "../SocialMediaHandles/SocialMediaHandles";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="home">
      <Navbar activeTab={"Home"} />
      <div className="home__body">
        <HomeOne />
        <HomeTwo />
        <HomeThree />
        <SocialMediaHandles />
      </div>
    </div>
  );
}
export default Home;
