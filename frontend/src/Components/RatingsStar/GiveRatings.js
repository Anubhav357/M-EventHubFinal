import React, { useState } from "react";
import { RiStarSFill } from "react-icons/ri";

function GiveRatings() {
  const [rating, setRatings] = useState(0);
  return (
    <div className="m-3 d-flex flex-column">
      <label>
        <b>Ratings</b>
      </label>
      <div>
        <RiStarSFill
          size="20px"
          onClick={() => setRatings(1)}
          color={rating >= 1 ? "orange" : "black"}
        />
        <RiStarSFill
          size="20px"
          onClick={() => setRatings(2)}
          color={rating >= 2 ? "orange" : "black"}
        />
        <RiStarSFill
          size="20px"
          onClick={() => setRatings(3)}
          color={rating >= 3 ? "orange" : "black"}
        />
        <RiStarSFill
          size="20px"
          onClick={() => setRatings(4)}
          color={rating >= 4 ? "orange" : "black"}
        />
        <RiStarSFill
          size="20px"
          onClick={() => setRatings(5)}
          color={rating >= 5 ? "orange" : "black"}
        />
      </div>
    </div>
  );
}

export default GiveRatings;
