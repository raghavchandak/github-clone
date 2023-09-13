import React from "react";
import "../App.css";
import FileSaver from "file-saver";

import ficon from "../assets/fancy-logo.webp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Landing() {
  return (
    <div className="homepage-info">
      <div
        className="first-info"
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/raghav-chandak-91497b181/")
        }
      >
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
            See my LinkedIn Profile
          </h4>
        </div>
        <KeyboardArrowRightIcon
          style={{ color: "white", marginLeft: "auto" }}
        />
      </div>
      <h1 className="name">Raghav Chandak</h1>
      <h1 className="desc">
        A Software Developer by day, and a Sports Enthusiast by night.
      </h1>
      {/* Initial options below the text */}
      <div className="options">
        <div className="email-signup">
          <input
            type="email"
            placeholder="raghavchandak25@gmail.com"
            className="email"
          />
          <button
            className="signUp"
            onClick={() =>
              (window.location.href = "mailto:raghavchandak25@gmail.com")
            }
          >
            Get in touch
          </button>
        </div>
        <div className="seperator"> | </div>
        <button className="start">Come Say Hi!</button>
      </div>
    </div>
  );
}

export default Landing;
