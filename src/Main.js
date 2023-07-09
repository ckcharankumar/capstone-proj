import React from "react";
import "./Main.css";
import Card from "./Card";
import Banner from "./Banner";
import Topic from "./Topic";


function Main() {
    return (
      <div>
        <Banner
          cTitle="Little Lemon"
          location="Chicago"
          des="We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
        />
  
        <Topic cardTopic="Weekend Special Menu!!" />
  
        <div className="menu-cards">
          <Card
            imageSrc={require("./icons_assets/greek salad.jpg")}
            altText="Green Salad Image"
            title="Green Salad"
            price="$12.89"
            description="The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons."
          />
          <Card
            imageSrc={require("./icons_assets/bruchetta.png")}
            altText="Bruchetta Image"
            title="Bruchetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
          />
          <Card
            imageSrc={require("./icons_assets/lemon dessert.jpg")}
            altText="Lemon Dessert Image"
            title="Lemon Dessert"
            price="$5.00"
            description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. "
          />

          
        </div>
      </div>
    );
  }
  
  export default Main;
  

