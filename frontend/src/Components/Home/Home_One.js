import React from "react";
import { Link } from "react-router-dom";

function Home_One() {
  return (
    <div>
      <div className="home__body__one  text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <p className="heading p-2 ">A HUB FOR ALL SORT OF EVENTS</p>
        <p className="sub_heading d-none d-sm-none d-lg-block">
          No need to surf websites for events booking
        </p>
        <p className="sub_sub_heading d-none d-sm-none d-lg-block">
          You can get all the events under a single hood
        </p>
        <Link to={`/filter`}>
          <button type="submit" className="p-3 mt-4 border-0 getStarted">
            SEARCH EVENTS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home_One;
