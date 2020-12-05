import React from "react";
import { RiStarSFill } from "react-icons/ri";

function ShowRatings(props) {
  const rating = props.rating;
  return (
    <div className="m-3 d-flex flex-column">
      <div>
        <RiStarSFill size="20px" color={rating >= 1 ? "orange" : "black"} />
        <RiStarSFill size="20px" color={rating >= 2 ? "orange" : "black"} />
        <RiStarSFill size="20px" color={rating >= 3 ? "orange" : "black"} />
        <RiStarSFill size="20px" color={rating >= 4 ? "orange" : "black"} />
        <RiStarSFill size="20px" color={rating >= 5 ? "orange" : "black"} />
      </div>
    </div>
  );
}

export default ShowRatings;
