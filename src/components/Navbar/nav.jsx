import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaSortUp } from "react-icons/fa";
import Facebook from "../../img/facebook.png";
import Twitter from "../../img/twitter.png";
import Instagram from "../../img/instagram.png";
import Pinterest from "../../img/pinterest.png";
import Veddit from "../../img/veddit.png";
import Meddit from "../../img/meddit.png";
const Nav = (props) => {
  const [dropClass, setDropClass] = useState("");
  const [dropOpen, setDropOpen] = useState(true);

  // Function for Open and Close Dropdown Menu
  const dropToggle = () => {
    if (dropOpen === true) {
      setDropOpen(false);
      setDropClass("dropdown-open");
    } else {
      setDropOpen(true);
      setDropClass("");
    }
  };
  return (
    <ul className={props.menuclass}>
      <li className="active">Explore</li>
      <li>Discover</li>
      <li>For Professionals</li>
      <li className="dropdown">
        <BiDotsHorizontalRounded onClick={() => dropToggle()} />
        <ul className={"dropdown-list " + dropClass}>
          <FaSortUp className="arrow" />
          <li>About Click Motto</li>
          <li>Pricing</li>
          <li>License</li>
          <li>Partnerships</li>
          <li>Blog</li>
          <li>Help</li>
          <li>Join The Team</li>
          <ul className="social-icons">
            <li>
              <img src={Facebook} alt="Facebook_Logo" />
            </li>
            <li>
              <img src={Twitter} alt="Twitter_Logo" />
            </li>
            <li>
              <img src={Instagram} alt="Instagram_Logo" />
            </li>
            <li>
              <img src={Pinterest} alt="Pinterest_Logo" />
            </li>
            <li>
              <img src={Veddit} alt="Veddit_Logo" />
            </li>
            <li>
              <img src={Meddit} alt="Meddit_Logo" />
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <button className="submit-btn">Submit Photos</button>
      </li>
      <li>
        <div className="bar"></div>
      </li>
      <li>Login</li>
      <li>
        <button className="join-btn">Join Free</button>
      </li>
    </ul>
  );
};

export default Nav;
