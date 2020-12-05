import React, { useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import "./ProfilePage.css";
import imgProfile from "../../../pictures/imgProfile.png";
import { getUserDetails } from "../../../data/Data";
import axios from "axios";

function ProfilePage() {
  const [details, setDetails] = useState({});
  console.log(getUserDetails());
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/profile/${getUserDetails().id}`)
      .then(function (res) {
        setDetails(res.data);
      });
    document.title = "Profile";
  }, []);

  const profile_info = [
    { key: 1, label: "E-Mail : ", data: details.email },
    { key: 2, label: "Date of Birth : ", data: details.dob },
    { key: 3, label: "Gender : ", data: details.gender },
    { key: 4, label: "Mobile no. : ", data: details.mobile },
    { key: 5, label: "Address : ", data: details.address },
    { key: 6, label: "State : ", data: details.state },
    { key: 7, label: "City : ", data: details.city },
    { key: 8, label: "Pincode : ", data: details.pincode },
  ];
  return (
    <div className="profilePage">
      <Navbar />
      <div className="profile-Content">
        <div className="profile-bg"></div>
        <div className="profile-info-one">
          <img src={imgProfile} className="imgProfile" alt="photos" />
          <div className="profile-info-one-content">
            <p className="profile-info-one-content-name">
              <b>{details.name}</b>
            </p>
            <p className="profile-info-one-content-bio">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <p className="profile-profileheader  text-center">Profile</p>
        <div className="profile-info-two">
          {profile_info.map((item) => {
            return (
              <div
                key={item.key}
                className="profile-info-two-information d-flex p-2 m-3"
              >
                <p className="mr-2">
                  <b>{item.label}</b>
                </p>
                <p className="ml-2 text-center">{item.data}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
