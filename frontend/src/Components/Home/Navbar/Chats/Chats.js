import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillEnvelopeFill, BsFillReplyFill } from "react-icons/bs";
import "./Chats.css";

function Chats() {
  const [color, setColor] = useState(0);
  const chatsContent = [
    { key: 1, sentBy: "Rohit", message: "Hello everyone!!" },
    { key: 2, sentBy: "Ben", message: "Hello everyone!!" },
    { key: 3, sentBy: "Gayle", message: "Hello everyone!!" },
    { key: 4, sentBy: "Rahul", message: "Hello everyone!!" },
    { key: 5, sentBy: "Sam", message: "Hello everyone!!" },
  ];
  return (
    <div>
      <Link className="d-flex flex-column p-2 m-1 justify-content-center align-items-center min-vw-20 min-vh-30 ">
        <div className={window.innerWidth < 990 ? "dropdown" : "dropleft"}>
          <BsFillEnvelopeFill
            size="25px"
            className="dropdown-toggle onHover"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            color={color === 1 ? "grey" : "white"}
            onMouseEnter={() => setColor(1)}
            onMouseLeave={() => setColor(0)}
          />

          <div
            className="dropdown-menu chats-dropMenu position-absolute"
            aria-labelledby="dropdownMenuButton"
          >
            {chatsContent.map((item) => {
              return (
                <div key={item.key} className="chats-card">
                  <div className="card-body d-flex flex-row justify-content-between">
                    <div className="d-flex flex-wrap flex-column">
                      <h5 className="card-title">
                        <b>{item.sentBy}</b>
                      </h5>
                      <p className="card-text">{item.message}</p>
                      <Link to="/">
                        <p className="card-text">View Messages</p>
                      </Link>
                    </div>
                    <Link
                      className="d-flex flex-column align-items-center justify-content-center"
                      to="/"
                    >
                      <BsFillReplyFill color="blue" />
                      <p>Reply</p>
                    </Link>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Chats;
