import React from "react";
import Navbar from "./Navbar";
import SearchBooks from "./BookComponents/BookSearch";
import "../styles/Header.css";

function Header() {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header_content flex flex_c text_center text_white">
          <h2 className="header_title text_capitalize">
            Welcome To The World Of Books
          </h2>
          <br />
          <p className="header_text fs_18">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            sint veritatis sequi alias! Ex illum itaque fuga consequuntur
            voluptate, in excepturi quo! Minus, cumque. Perspiciatis maiores
            excepturi harum quisquam maxime exercitationem explicabo officiis
          </p>
          <SearchBooks />
        </div>
      </header>
    </div>
  );
}

export default Header;
