import React from "react";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import "./index.scss";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <ul className="about-ul">
            <li>abouts</li>
            <li>chef</li>
            <li>evets</li>
            <li>contact</li>
          </ul>

          <ul className="social-ul">
            <li>
              <FaTwitter className="social" />
            </li>
            <li>
              <FaFacebookSquare className="social" />
            </li>
            <li>
              <FaInstagram className="social" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
