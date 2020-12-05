import React from "react";
import { FaEdit } from "react-icons/fa";

function manipulateicons(props) {
  return (
    <div style={{ cursor: "pointer" }}>
      <FaEdit size="25px" color={props.color === "black" ? "black" : "white"} />
    </div>
  );
}

export default manipulateicons;
