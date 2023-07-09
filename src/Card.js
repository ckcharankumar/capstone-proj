import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="allcontent">
      <img src={props.imageSrc} alt={props.altText} className="cardimg" />
      <div className="menu-list">
        <div className="menu-heading">
          <h3>{props.title}</h3>
          <h3>{props.price}</h3>
        </div>
        <p>{props.description}</p>
        <button type="submit" className="order">
          Order for Delivery
        </button>
      </div>
    </div>
  );
}

export default Card;
