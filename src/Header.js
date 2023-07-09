import React from "react";
import Nav from "./Nav";
import "./Header.css";

function Header() {
  return (
    <div>
      <head>
        <meta
          name="description"
          content="Little Lemon Restaurant offers a delightful fusion of flavors using fresh, locally sourced ingredients, providing a memorable and exquisite dining experience."
        />
        <meta property="og:title" content="Lemon Restaurant" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="Lemon Restaurant" />
        <meta property="og:url" content="https://littlelemon" />
        <meta
          property="og:description"
          content="Little Lemon Restaurant offers a delightful fusion of flavors using fresh, locally sourced ingredients, providing a memorable and exquisite dining experience."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Little Lemon" />
      </head>
      <header className="header-container">
        {/* <img src="LLlogo.png" alt="Little Lemon logo" /> */}
        <img
          src={require("./LL-logo/Asset 16@4x.png")}
          alt="Little Lemon logo"
          height={70}
        />
        <Nav />
      </header>
    </div>
  );
}

export default Header;
