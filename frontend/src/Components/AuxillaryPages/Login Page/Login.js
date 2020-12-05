import React, { useEffect, useState } from "react";
import "./login.css";
import Navbar from "../../Home/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { setLoginStatus, setUserRegister } from "../../../data/Data";
import { setUserDetails } from "../../../data/Data";
import { getUserRegister } from "../../../data/Data";
import axios from "axios";

function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [isClientLogin, setIsClientLogin] = useState(true);
  const [loggedIN, setLoggedIn] = useState({ found: false });
  const history = useHistory();
  useEffect(() => {
    document.title = "Login ";
  }, [isClientLogin]);

  const handleFormSubmit = (event) => {
    axios
      .post(
        `http://localhost:5000/api/${
          isClientLogin ? "users" : "organisers"
        }/login`,
        info
      )
      .then(function (res) {
        setLoggedIn(res.data);
      });
    setUserRegister(isClientLogin);
    setInfo({
      email: "",
      password: "",
    });
    event.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };
  if (loggedIN.found === true) {
    console.log(loggedIN);
    setLoginStatus(true);
    history.push(`/${getUserRegister() ? "user" : "company"}`);
    setUserRegister(true);
    setUserDetails({ id: loggedIN.id });
    return null;
  } else {
    if (loggedIN.found === "incorrect") {
      alert("Incorrect email or password");
      window.location.reload(false);
    }

    return (
      <div className="login__page">
        <div className="login_header">
          <Navbar />
          <div className="bgImage">
            <div className="wrapper">
              <div className="title">EventHub</div>

              <form action="#" onSubmit={handleFormSubmit}>
                <button onClick={() => setIsClientLogin(true)}>Client</button>
                <button onClick={() => setIsClientLogin(false)}>Company</button>
                <div className="field">
                  <input
                    type="text"
                    required
                    name="email"
                    onChange={handleChange}
                  />
                  <label>Email Address</label>
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                  />
                  <label>Password</label>
                </div>
                <div className="content">
                  <div className="checkbox">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                  </div>
                  <div className="pass-link">
                    <Link to="/">Forgot password?</Link>
                  </div>
                </div>
                <div className="field">
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">
                  <Link to="/user_registeration">Create User Account</Link>
                </div>
                <div className="signup-link">
                  <Link to="/company_registeration">
                    Create Company Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
