import React from "react";
import "./Main.css";

function Main() {
    return (
        <div className="main-container">
            <div className="hero-container">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned
                Mediterranean resturant,
                focused on tradtional
                recepies served with a modern
                twist
            </p>
            <button type="Submit" value={SubmitEvent}>Reserve a Table</button>
            </div>
        </div>
    );
}

export default Main;