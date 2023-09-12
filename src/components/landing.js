import React from "react";
import "../App.css";

import ficon from "../assets/fancy-logo.webp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Landing() {
  return (
    <div className="homepage-info">
      <div className="first-info">
        <img src={ficon} alt="logo" style={{ marginRight: "1rem" }} />
        <div>
          <h3
            style={{
              color: "white",
              fontWeight: "bold",
              marginBottom: "0.2rem",
            }}
          >
            Get to know me better!
          </h3>
          <h4 style={{ color: "grey", fontWeight: "500" }}>
            {" "}
            Download my Resume!
          </h4>
        </div>
        <KeyboardArrowRightIcon
          style={{ color: "white", marginLeft: "auto" }}
        />
      </div>
      <h1 className="name">Raghav Chandak</h1>
      <h1 className="desc">The AI-powered developer platform to build, scale, and deliver secure software.</h1>
    </div>
  );
}

export default Landing;
