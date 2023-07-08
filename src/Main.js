import React from "react";
import "./Main.css";

function Main() {
    return (
        <>
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
            <div>
                <img src={require("./icons_assets/restauranfood.jpg")} alt="Hero image" className="heroimg" />
                </div>
        </div>
        <div className="topic-button">
            <h1 id="menutopic" >This weeks specials!</h1>
            <button type="Submit" value={SubmitEvent}>Online Menu</button>

        </div>
            </>
    );
}

export default Main;