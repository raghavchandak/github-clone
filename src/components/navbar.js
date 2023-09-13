import React, { useState } from "react";
import "../styles/navbar.css";

import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ handleClick }) {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
    // handleClick();
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-side">
          <img src={logo} alt="Logo" width="35vw" />
          <ul className="nav-links">
            <li className="link">Product</li>
            <li className="link">Solutions</li>
            <li className="link">Open Source</li>
            <li className="link">Pricing</li>
          </ul>
        </div>
        <div className="right-side">
          <div className="search-bar">
            <SearchIcon style={{ color: "grey" }} />
            <p className="placeholder">Search or jump to...</p>
            <div className="searchbar-end">/</div>
          </div>
          <div className="sign-in">Sign In</div>
          <div className="sign-up">Sign Up</div>
        </div>
      </nav>

      {/* NAVBAR FOR SMALLER SCREENS */}
      <div className="smaller-screens">
        <div className="sign-up">Sign Up</div>
        <img src={logo} alt="Logo" width="35vw" />
        {clicked ? (
          <CloseIcon onClick={() => handleButtonClick()} />
        ) : (
          <MenuIcon onClick={() => handleButtonClick()} />
        )}
      </div>
    </>
  );
}

export default Navbar;
