import React from "react";
import Corousel from "../Corousel/Corousel";

function ShortPortfolio(props) {
  return (
    <div className="shortPortfolio">
      <div className="mb-5">{props.mediumContent}</div>
      <Corousel SampleImages={props.SampleImages} />
    </div>
  );
}

export default ShortPortfolio;
