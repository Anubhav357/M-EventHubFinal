import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import "./Notification.css";

function Notification() {
  const notificationContents = [
    {
      key: 1,
      title: "Lorem Ipsum",
      body: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      timeAgo: 3,
    },
    {
      key: 2,
      title: "Ipsum Lorem",
      body: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem",
      timeAgo: 5,
    },
    {
      key: 3,
      title: "Lorem Ipsum",
      body: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      timeAgo: 8,
    },
    {
      key: 4,
      title: "Ipsum Lorem",
      body: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem",
      timeAgo: 10,
    },
  ];
  const [color, setColor] = useState(0);
  return (
    <div>
      <Link className="d-flex flex-column p-2 m-1 justify-content-center align-items-center min-vw-20 min-vh-30">
        <div className={window.innerWidth < 900 ? "dropdown" : "dropleft"}>
          <BsFillBellFill
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
            className="dropdown-menu notification-dropMenu position-absolute"
            aria-labelledby="dropdownMenuButton"
          >
            {notificationContents.map((item) => {
              return (
                <div className="notification-card">
                  <div className="card-body d-flex flex-row justify-content-between">
                    <div className="d-flex flex-wrap flex-column">
                      <h5 className="card-title">
                        <b>{item.title}</b>
                      </h5>
                      <p className="card-text">{item.body}</p>
                      <p className="card-text">
                        <small className="text-muted">{`${item.timeAgo} mins ago`}</small>
                      </p>
                    </div>
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
export default Notification;
