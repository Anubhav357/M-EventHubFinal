import React from "react";

function NotFound(props) {
  return (
    <div>
      <div
        class="spinner-grow"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <h2>{props.firstTime ? "Search events" : "No such event found"}</h2>
    </div>
  );
}

export default NotFound;
