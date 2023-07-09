import React from "react";
import "./Main.css";
import Card from "./Card";
import Banner from "./Banner";
import Topic from "./Topic";

// function Main() {
//   return (
//     <div>
//       <div className="main-container">
//         <div className="hero-container">
//           <h1>Little Lemon</h1>
//           <h2>Chicago</h2>
//           <p>
//             We are a family-owned Mediterranean restaurant, focused on
//             traditional recipes served with a modern twist.
//           </p>
//           <button type="submit" className="ybutton">Reserve a Table</button>
//         </div>

//         <div>
//           <img
//             src={require("./icons_assets/restauranfood.jpg")}
//             alt="Hero image"
//             className="heroimg"
//           />
//         </div>
//       </div>

//       <div className="topic-button">
//         <h1 id="menutopic">This week's specials!</h1>
//         <button type="submit" className="ybutton">Online Menu</button>
//       </div>







//       <div className="menu-cards">
//         <div className="allcontent">
//           <img src={require("./icons_assets/greek salad.jpg")} alt="Menu1" className="cardimg" />
//           <div className="menu-list">
//              <div className="menu-heading">
//                <h3>Greek Salad</h3>
//                <h3>$12.89</h3>
//               </div>
//               <p>
//               The famous Greek salad of crispy lettuce, peppers, olives, and our
//               Chicago-style feta cheese, garnished with crunchy garlic and
//               rosemary croutons.
//              </p>
//             <button type="submit" className="order">Order for Delivery</button>
//           </div>
//         </div>
//         <div className="allcontent">
//           <img src={require("./icons_assets/greek salad.jpg")} alt="Menu1" className="cardimg" />
//           <div className="menu-list">
//              <div className="menu-heading">
//                <h3>Greek Salad</h3>
//                <h3>$12.89</h3>
//               </div>
//               <p>
//               The famous Greek salad of crispy lettuce, peppers, olives, and our
//               Chicago-style feta cheese, garnished with crunchy garlic and
//               rosemary croutons.
//              </p>
//             <button type="submit" className="order">Order for Delivery</button>
//           </div>
//         </div>
//         <div className="allcontent">
//           <img src={require("./icons_assets/lemon dessert.jpg")} alt="Menu1" className="cardimg" />
//           <div className="menu-list">
//              <div className="menu-heading">
//                <h3>Greek Salad</h3>
//                <h3>$12.89</h3>
//               </div>
//               <p>
//               The famous Greek salad of crispy lettuce, peppers, olives, and our
//               Chicago-style feta cheese, garnished with crunchy garlic and
//               rosemary croutons.
//              </p>
//             <button type="submit" className="order">Order for Delivery</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











function Main() {
    return (
      <div>
        <Banner
          ctTitle="Little Lemon"
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
  

