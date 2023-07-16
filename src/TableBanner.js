import React from "react";
import "./TableBanner.css"
// import { Link } from "react-router-dom";

function Tbanner(props){
    return (
        <div className="main-tbcontainer">
          <div className="hero-tbcontainer">
            <h1>{props.cTitle}</h1>
            <h2>{props.location}</h2>
            <p>{props.des}</p>
            {/* <Link to="/reservation" className="nav-item">
            <button type="submit" className="ybutton">
              Reserve a Table
            </button>
          </Link> */}
          </div>

          <div>
            <img
              src={require("./icons_assets/reserve-table.jpg")}
              alt="Hero_image"
              className="tbheroimg"
            />
          </div>
        </div>
      );
    }

export default Tbanner;