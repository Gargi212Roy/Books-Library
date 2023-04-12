import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import bookLogo from "../assets/bookLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/Navbar.css";

function Navbar() {
  const [toggleBar, setToggleBar] = useState(false);

  const handleNavbar = () => setToggleBar(!toggleBar);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar_content flex">
        <div className="brand_toggler flex flex_sb">
          <Link to="/" className="navbar_brand flex">
            <img src={bookLogo} alt="site logo" />
            <span className="text_uppercase fw_7 fs_60 ls_1">Bookworms</span>
          </Link>
          <button className="navbar_toggler_btn" onClick={handleNavbar}>
            <GiHamburgerMenu
              size={35}
              style={{ color: `${toggleBar ? "#fff" : "#010101"}` }}
            />
          </button>
        </div>
        <div
          className={
            toggleBar
              ? "navbar_collapse show_navbar_collapse"
              : "navbar_collapse"
          }
        >
          <ul className="navbar_nav">
            <li className="nav_item">
              <Link
                to="/"
                className="nav_link text_uppercase text_white fs-22 fw_6 ls_1"
              >
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link
                to="/about"
                className="nav_link text_uppercase text_white fw_6 ls_1"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
