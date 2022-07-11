import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <img
          className="nav-logo"
          src="https://i.postimg.cc/d1h98rC3/Netflix-Logo.png"
          alt=""
        />
        <ul className="nav-list"></ul>
      </div>
    </div>
  );
}

export default NavBar;
