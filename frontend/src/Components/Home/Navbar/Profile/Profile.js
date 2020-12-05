import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPeopleCircle } from "react-icons/bs";
import "./Profile.css";
import Popover from "../../../Popover/Popover";
import { setRegisterPage } from "../../../../data/Data";
import { getUserRegister } from "../../../../data/Data";

function Profile(props) {
  const [color, setColor] = useState(0);
  const goToCompanyPortfolio = () => {
    window.open(`company/portfolio/${2}`).focus();
  };
  useEffect(() => {}, [getUserRegister()]);

  return (
    <div>
      <Popover title={"Logout"} body={"Logout Successfully"} />
      <Link className="d-flex flex-column p-2 m-1 justify-content-center align-items-center min-vw-20 min-vh-30 ">
        <div className={window.innerWidth < 900 ? "dropdown" : "dropleft"}>
          <BsPeopleCircle
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
            className="dropdown-menu position-absolute profile-dropMenu"
            aria-labelledby="dropdownMenuButton"
          >
            <Link
              className={`dropdown-item ${props.login ? "" : "d-none"}`}
              to={`/${getUserRegister() ? "User" : "Company"}/profile_page`}
            >
              Profile
            </Link>
            <Link
              className="dropdown-item"
              to="/user_registeration"
              onClick={() => setRegisterPage(true)}
            >
              User Register
            </Link>
            <Link
              className="dropdown-item"
              to="/company_registeration"
              onClick={() => setRegisterPage(false)}
            >
              Company Register
            </Link>
            <Link
              className={`dropdown-item ${props.login ? "d-none" : ""}`}
              to="/login"
            >
              Login
            </Link>
            <Link
              className={`dropdown-item ${
                props.login && getUserRegister() ? "" : "d-none"
              }`}
              onClick={goToCompanyPortfolio}
            >
              Show Portfolio
            </Link>
            <Link
              className={`dropdown-item ${props.login ? "" : "d-none"}`}
              onClick={() => props.setLogin(false)}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Logout
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Profile;
