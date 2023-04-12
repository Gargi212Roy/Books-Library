import React from "react";
import loaderImg from "../assets/loader.gif";
import "../styles/loader.css";
function Loader() {
  return (
    <div className="loader flex flex_c">
      <img src={loaderImg} alt="loading..." />
    </div>
  );
}

export default Loader;
