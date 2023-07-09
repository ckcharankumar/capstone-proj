import React from "react";
import "./Banner.css"

function Banner(props){
    return(
        <div className="main-container">
        <div className="hero-container">
          <h1>{props.cTitle}Little Lemon</h1>
          <h2>{props.location}</h2>
          <p>
            {props.des}
          </p>
          <button type="submit" className="ybutton">
            Reserve a Table
          </button>
        </div>

        <div>
          <img
            src={require("./icons_assets/restauranfood.jpg")}
            alt="Hero image"
            className="heroimg"
          />
        </div>
      </div>

    );
};

export default Banner;