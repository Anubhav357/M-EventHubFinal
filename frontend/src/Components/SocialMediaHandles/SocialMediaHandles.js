import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

function SocialMediaHandles() {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-center align-items-center mt-3 contactUs-socialMedia">
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill size="28px" className="m-1" color="#d147ff" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter size="28px" className="m-1" color="blue" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook size="28px" className="m-1" color="blue" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size="28px" className="m-1" color="blue" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube size="28px" className="m-1" color="red" />
        </a>
      </div>
    </div>
  );
}

export default SocialMediaHandles;
