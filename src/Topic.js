import React from "react";
import "./Topic.css";

function Topic (props){
    return(
        <div className="topic-button">
        <h1 id="menutopic">{props.cardTopic}</h1>
        <button type="submit" className="ybutton">
          Online Menu
        </button>
      </div>
    );
}
export default Topic;