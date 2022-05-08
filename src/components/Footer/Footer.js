import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF,faGoogle,faInstagram,faTwitter,faYoutube,} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

// Footer Section.
const Footer = () => {
  return (
    // Footer Section Start.
    <footer className="">
      <div className="footer-content">
        <h3>
          {" "}
          <img
            alt=""
            src="https://avatars.githubusercontent.com/u/4430336?s=200&v=4"
            width="30"
            height="30"
            className="d-inline-block align-center me-3"
          />
          ORACLE INVENTORY
        </h3>
        <p>FOLLOW ORACLE</p>
        <ul className="social-icon">
          <li>
            <a href="">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2022 and all rights reserved by - All Sister Concerns of
          ORACLE Group{" "}
        </p>
      </div>
    </footer>
    // Footer Section End !.
  );
};

export default Footer;
