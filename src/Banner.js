import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className="main-container">
      <div className="hero-container">
        <h1>{props.cTitle}</h1>
        <h2>{props.location}</h2>
        <p>{props.des}</p>
        <Link to="/reservation" className="nav-item">
        <button type="submit" className="ybutton">
          Reserve a Table
        </button>
      </Link>
      </div>

      <div>
        <img
          src={require("./icons_assets/cropped-img.png")}
          alt="Hero_image"
          className="heroimg"
        />
      </div>
    </div>
  );
}

export default Banner;
