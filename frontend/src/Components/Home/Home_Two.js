import React from "react";
import { Link } from "react-router-dom";
import topBG from "../../pictures/topBG.jpg";
import one from "../../pictures/one.jpg";
import two from "../../pictures/two.jpg";
import three from "../../pictures/three.jpg";
import four from "../../pictures/four.jpg";

function Home_Two({ page_two }) {
  const cardsInfo = [
    { key: 1, image: topBG, title: "Party", content: "Check it out" },
    { key: 2, image: one, title: "Wedding", content: "Check it out" },
    { key: 3, image: two, title: "New Year Eve", content: "Check it out" },
    { key: 4, image: three, title: "Birthday", content: "Check it out" },
    { key: 5, image: four, title: "Concert", content: "Check it out" },
  ];
  return (
    <div className="home__two" ref={page_two}>
      <p className="text-center events_text mt-2">Our Events</p>
      <div className="d-flex justify-content-center">
        <hr width="250px" color="black" />
      </div>
      <div className="p-1 m-1 d-flex justify-content-center cardsSet home__Two-cardSet">
        {cardsInfo.map((item) => {
          return (
            <div key={item.key} className="card p-3 m-3">
              <img src={item.image} className="card-img-top" alt="photos" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <Link to="/" className="btn btn-primary">
                  Go there
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home_Two;
